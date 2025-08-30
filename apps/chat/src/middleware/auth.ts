import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger';
import { Server as SocketIOServer, Socket } from 'socket.io';

declare global {
  namespace Express {
    interface Request {
      user?: {
        sub: string;
        email: string;
        // Add other user properties as needed
      };
    }
  }
}

export interface AuthenticatedRequest extends Request {
  user?: {
    sub: string;
    email: string;
  };
}

interface SocketWithUser extends Socket {
  user?: {
    id: string;
    email: string;
  };
  handshake: {
    auth?: {
      token?: string;
    };
    query?: {
      token?: string;
    };
  };
}

/**
 * Express middleware to authenticate JWT tokens
 */
export const authJwt = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { sub: string; email: string };
    
    req.user = {
      sub: decoded.sub,
      email: decoded.email,
    };

    next();
  } catch (error) {
    logger.error('Authentication error:', error);
    
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Token expired' });
    }
    
    res.status(500).json({ message: 'Authentication failed' });
  }
};

/**
 * Socket.IO authentication middleware
 */
export const socketAuth = (socket: SocketWithUser, next: (err?: Error) => void) => {
  try {
    const token = socket.handshake.auth?.token || 
                 (socket.handshake.query?.token as string)?.split(' ')[1];
    
    if (!token) {
      return next(new Error('Authentication error: No token provided'));
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { sub: string; email: string };
    
    // Attach user to socket for later use
    socket.user = {
      id: decoded.sub,
      email: decoded.email,
    };

    next();
  } catch (error) {
    logger.error('Socket authentication error:', error);
    
    if (error instanceof jwt.JsonWebTokenError) {
      return next(new Error('Invalid token'));
    }
    
    if (error instanceof jwt.TokenExpiredError) {
      return next(new Error('Token expired'));
    }
    
    next(new Error('Authentication failed'));
  }
};

/**
 * Initialize Socket.IO with authentication
 */
export const initializeSocketIO = (io: SocketIOServer) => {
  io.use(socketAuth);
  
  io.on('connection', (socket: SocketWithUser) => {
    if (!socket.user) {
      socket.disconnect(true);
      return;
    }
    
    const userId = socket.user.id;
    
    // Join the user's personal room for direct messages
    socket.join(`user:${userId}`);
    
    // Handle joining conversation rooms
    socket.on('joinConversation', (conversationId: string) => {
      socket.join(`conversation:${conversationId}`);
      logger.info(`User ${userId} joined conversation ${conversationId}`);
    });
    
    // Handle leaving conversation rooms
    socket.on('leaveConversation', (conversationId: string) => {
      socket.leave(`conversation:${conversationId}`);
      logger.info(`User ${userId} left conversation ${conversationId}`);
    });
    
    // Handle disconnection
    socket.on('disconnect', () => {
      logger.info(`User ${userId} disconnected`);
    });
  });
};
