
import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import { connectDb } from './db/connect';
import { initializeSocketIO } from './middleware/auth';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { logger } from './utils/logger';
import { registerApi } from './routes';
import { registerSocket } from './socket';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Security middleware
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: false
}));

// Compression middleware
app.use(compression());

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS configuration
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'];
    
    // Allow requests with no origin (mobile apps, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
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

// Trust proxy (important for production)
app.set('trust proxy', 1);

// Register API routes
registerApi(app);

// Initialize Socket.IO
const io = new SocketIOServer(server, {
  path: process.env.SOCKET_PATH || '/socket.io',
  cors: corsOptions,
  serveClient: false,
  connectTimeout: 30000,
  pingTimeout: 25000,
  pingInterval: 20000,
  transports: ['polling', 'websocket'],
  allowEIO3: true
});

// Initialize socket connection handling with authentication
initializeSocketIO(io);

// Register socket event handlers
registerSocket(io);

// 404 handler for unknown routes
app.use(notFoundHandler);

// Error handling middleware (should be after all routes)
app.use(errorHandler);

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    // Connect to database
    await connectDb();
    
    const PORT = process.env.PORT || 3001;
    const HOST = process.env.HOST || '0.0.0.0';
    
    server.listen(PORT, HOST as string, () => {
      logger.info(`🚀 Chat server running on ${HOST}:${PORT}`);
      logger.info(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
      logger.info(`🌐 CORS allowed origins: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
      logger.info(`🔌 Socket.IO path: ${process.env.SOCKET_PATH || '/socket.io'}`);
    });
    
  } catch (error) {
    logger.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: Error | unknown) => {
  if (reason instanceof Error) {
    logger.error(`Unhandled Rejection: ${reason.message}`, { stack: reason.stack });
  } else {
    logger.error(`Unhandled Rejection: ${reason}`);
  }
});

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  logger.error(`Uncaught Exception: ${error.message}`, { stack: error.stack });
  process.exit(1);
});

// Handle graceful shutdown
const gracefulShutdown = (signal: string) => {
  logger.info(`Received ${signal}. Shutting down gracefully...`);
  
  // Close the HTTP server
  server.close(async () => {
    logger.info('HTTP server closed');
    
    // Close database connection
    try {
      const mongoose = await import('mongoose');
      await mongoose.disconnect();
      logger.info('Database connection closed');
    } catch (error) {
      logger.error('Error closing database connection:', error);
    }
    
    logger.info('Process terminated');
    process.exit(0);
  });
  
  // Force close server after 10 seconds
  setTimeout(() => {
    logger.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

// Handle termination signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Start the server
startServer();
