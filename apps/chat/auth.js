const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Simple JWT authentication middleware for Express
function authenticateToken(req, res, next) {
  console.log('🔐 Authenticating request...');

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    console.log('❌ No token provided');
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.log('❌ Invalid token:', err.message);
      return res.status(403).json({ error: 'Invalid token' });
    }

    console.log('✅ Token verified for user:', user.sub);
    req.user = user;
    next();
  });
}

// Socket.IO authentication middleware
function authenticateSocket(socket, next) {
  console.log('🔐 Authenticating socket connection...');

  try {
    const token = socket.handshake.auth?.token ||
                 socket.handshake.query?.token?.replace('Bearer ', '');

    if (!token) {
      console.log('❌ No token provided for socket');
      return next(new Error('Authentication error: No token provided'));
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log('❌ Invalid socket token:', err.message);
        return next(new Error('Authentication error: Invalid token'));
      }

      console.log('✅ Socket authenticated for user:', decoded.sub);
      socket.userId = decoded.sub;
      socket.userEmail = decoded.email;
      next();
    });
  } catch (error) {
    console.log('❌ Socket authentication error:', error.message);
    next(new Error('Authentication failed'));
  }
}

// Generate JWT token
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

// Verify if user is member of conversation
async function ensureMember(userId, conversationId) {
  console.log('🔍 Checking membership for user:', userId, 'in conversation:', conversationId);

  const { Conversation } = require('./models');

  const conversation = await Conversation.findById(conversationId);
  if (!conversation) {
    throw new Error('Conversation not found');
  }

  if (!conversation.participants.includes(userId)) {
    throw new Error('User is not a member of this conversation');
  }

  console.log('✅ User is member of conversation');
  return conversation;
}

module.exports = {
  authenticateToken,
  authenticateSocket,
  generateToken,
  ensureMember
};
