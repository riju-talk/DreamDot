require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const { connectDb } = require('./db');
const { authenticateToken, authenticateSocket, generateToken, ensureMember } = require('./auth');
const { Message, Conversation, User } = require('./models');

// Debug logging function
function debugLog(message, data = null) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
  if (data) {
    console.log(JSON.stringify(data, null, 2));
  }
}

// Create Express app
const app = express();
const server = http.createServer(app);

// Security middleware
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: false
}));

// Compression middleware
app.use(compression());

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'];
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Trust proxy (important for production)
app.set('trust proxy', 1);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API Routes
app.use('/api/v1', authenticateToken);

// Get user conversations
app.get('/api/v1/conversations', async (req, res) => {
  try {
    debugLog('📋 Getting conversations for user:', req.user.sub);

    const conversations = await Conversation.find({
      participants: req.user.sub,
      isArchived: false
    })
    .sort({ lastMessageAt: -1 })
    .limit(50);

    debugLog('✅ Found conversations:', conversations.length);
    res.json({ success: true, data: conversations });
  } catch (error) {
    debugLog('❌ Error getting conversations:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create conversation
app.post('/api/v1/conversations', async (req, res) => {
  try {
    const { type, participants, name } = req.body;
    const userId = req.user.sub;

    debugLog('💬 Creating conversation:', { type, participants, name, userId });

    if (!type || !participants || !Array.isArray(participants)) {
      return res.status(400).json({ success: false, error: 'Type and participants are required' });
    }

    // For direct messages, check if conversation already exists
    if (type === 'direct' && participants.length === 2) {
      const existingConversation = await Conversation.findOne({
        type: 'direct',
        participants: { $all: participants }
      });

      if (existingConversation) {
        debugLog('✅ Found existing direct conversation');
        return res.json({ success: true, data: existingConversation });
      }
    }

    const conversation = await Conversation.create({
      type,
      participants: [...participants, userId], // Include creator
      name: name || `Chat ${new Date().toLocaleDateString()}`,
      createdBy: userId,
      admins: [userId],
      lastMessageAt: new Date(),
    });

    debugLog('✅ Created conversation:', conversation._id);
    res.json({ success: true, data: conversation });
  } catch (error) {
    debugLog('❌ Error creating conversation:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get messages for a conversation
app.get('/api/v1/conversations/:id/messages', async (req, res) => {
  try {
    const { id } = req.params;
    const { limit = 50, before } = req.query;

    debugLog('📨 Getting messages for conversation:', id);

    let query = { conversation: id, isDeleted: false };

    if (before) {
      query.timestamp = { $lt: new Date(before) };
    }

    const messages = await Message.find(query)
      .sort({ timestamp: -1 })
      .limit(parseInt(limit))
      .populate('sender', 'name email avatar');

    debugLog('✅ Found messages:', messages.length);
    res.json({ success: true, data: messages.reverse() });
  } catch (error) {
    debugLog('❌ Error getting messages:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Send message (REST API fallback)
app.post('/api/v1/conversations/:id/messages', async (req, res) => {
  try {
    const { id } = req.params;
    const { content, type = 'text', attachments = [] } = req.body;
    const userId = req.user.sub;

    debugLog('📨 Sending message to conversation:', id);

    // Check if user is member
    await ensureMember(userId, id);

    // Create message
    const message = await Message.create({
      conversationId: id,
      conversation: id,
      senderId: userId,
      sender: userId,
      content,
      type,
      attachments,
      readBy: [userId],
      timestamp: new Date()
    });

    // Update conversation's last message
    await Conversation.findByIdAndUpdate(id, {
      lastMessage: message._id,
      lastMessageAt: new Date(),
      $addToSet: { unreadBy: { $each: [] } }, // Reset unreadBy for sender
      $pull: { unreadBy: userId }, // Remove sender from unreadBy
    });

    debugLog('✅ Message sent:', message._id);
    res.json({ success: true, data: message });
  } catch (error) {
    debugLog('❌ Error sending message:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Socket.IO setup
const io = socketIo(server, {
  path: process.env.SOCKET_PATH || '/socket.io',
  cors: corsOptions,
  serveClient: false,
  connectTimeout: 30000,
  pingTimeout: 25000,
  pingInterval: 20000,
  transports: ['polling', 'websocket'],
  allowEIO3: true
});

// Socket connection handler
io.use(authenticateSocket);

io.on('connection', (socket) => {
  debugLog('🔌 Socket connected:', socket.userId);

  // Handle room joining
  socket.on('room:join', async (data) => {
    try {
      debugLog('🚪 Joining room:', data.conversationId);

      await ensureMember(socket.userId, data.conversationId);
      await socket.join(data.conversationId);

      // Notify others in the room
      socket.to(data.conversationId).emit('presence:join', {
        userId: socket.userId,
        timestamp: new Date().toISOString()
      });

      debugLog('✅ Joined room:', data.conversationId);
    } catch (error) {
      debugLog('❌ Error joining room:', error.message);
      socket.emit('error', { event: 'room:join', message: error.message });
    }
  });

  // Handle room leaving
  socket.on('room:leave', (data) => {
    debugLog('🚪 Leaving room:', data.conversationId);

    socket.leave(data.conversationId);
    socket.to(data.conversationId).emit('presence:leave', {
      userId: socket.userId,
      timestamp: new Date().toISOString()
    });

    debugLog('✅ Left room:', data.conversationId);
  });

  // Handle typing indicators
  socket.on('message:typing', (data) => {
    debugLog('⌨️ Typing in room:', data.conversationId);

    socket.to(data.conversationId).emit('message:typing', {
      userId: socket.userId,
      isTyping: data.isTyping,
      timestamp: new Date().toISOString()
    });
  });

  // Handle message sending
  socket.on('message:send', async (data, ack) => {
    try {
      debugLog('📨 Socket message send:', data.conversationId);

      const { conversationId, ciphertext, nonce, keyId, attachments = [] } = data;

      // Check membership
      await ensureMember(socket.userId, conversationId);

      // Save encrypted message
      const savedMessage = await Message.create({
        conversationId,
        conversation: conversationId,
        senderId: socket.userId,
        sender: socket.userId,
        ciphertext,
        nonce,
        keyId,
        type: 'text',
        attachments,
        readBy: [socket.userId],
        timestamp: new Date()
      });

      // Update conversation
      await Conversation.findByIdAndUpdate(conversationId, {
        lastMessage: savedMessage._id,
        lastMessageAt: new Date(),
        $addToSet: { unreadBy: { $each: [] } },
        $pull: { unreadBy: socket.userId },
      });

      // Broadcast to room (excluding sender)
      socket.to(conversationId).emit('message:new', {
        ...savedMessage.toObject(),
        status: 'delivered'
      });

      debugLog('✅ Message sent and broadcasted:', savedMessage._id);

      if (ack) {
        ack({ ok: true, id: savedMessage._id });
      }
    } catch (error) {
      debugLog('❌ Error sending socket message:', error.message);
      socket.emit('error', { event: 'message:send', message: error.message });
      if (ack) {
        ack({ ok: false, error: error.message });
      }
    }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    debugLog('🔌 Socket disconnected:', socket.userId);
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  debugLog('❌ Express error:', err.message);
  res.status(500).json({
    success: false,
    error: err.message
  });
});

// Graceful shutdown
const gracefulShutdown = (signal) => {
  debugLog(`📴 Received ${signal}. Shutting down gracefully...`);

  server.close(async () => {
    debugLog('📴 HTTP server closed');

    try {
      const mongoose = require('mongoose');
      await mongoose.disconnect();
      debugLog('📴 Database connection closed');
    } catch (error) {
      debugLog('❌ Error closing database connection:', error.message);
    }

    debugLog('📴 Process terminated');
    process.exit(0);
  });

  // Force close after 10 seconds
  setTimeout(() => {
    debugLog('❌ Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

// Handle termination signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  debugLog('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  debugLog('❌ Uncaught Exception:', error.message);
  process.exit(1);
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    // Connect to database (non-blocking)
    await connectDb();

    const PORT = parseInt(process.env.PORT || '3001', 10);
    const HOST = process.env.HOST || '0.0.0.0';

    server.listen(PORT, HOST, () => {
      debugLog(`🚀 Chat server running on ${HOST}:${PORT}`);
      debugLog(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
      debugLog(`🔌 Socket.IO path: ${process.env.SOCKET_PATH || '/socket.io'}`);

      if (!require('./db').isConnected()) {
        debugLog('⚠️  Running in offline mode - database not connected');
        debugLog('💡 Some features like message persistence may not work');
      }
    });

  } catch (error) {
    debugLog('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

// Start the server
startServer();

module.exports = { app, server, io };
