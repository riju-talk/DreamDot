import { Server, Socket } from 'socket.io';
import { ensureMember } from './utils/authz';
import { Message } from './db/models/Message';
import { connectDb } from './db/connect';

interface UserSocket extends Socket {
  user?: {
    sub: string;
    [key: string]: any;
  };
}

interface MessagePayload {
  conversationId: string;
  ciphertext: string;
  nonce: string;
  keyId: string;
  attachments?: any[];
}

const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1000;

async function saveEncryptedMessage(userId: string, payload: MessagePayload, attempt = 1): Promise<any> {
  try {
    await connectDb(); // Ensure DB connection
    const { conversationId, ciphertext, nonce, keyId, attachments } = payload;
    return await Message.create({ 
      conversationId, 
      senderId: userId, 
      ciphertext, 
      nonce, 
      keyId, 
      attachments,
      timestamp: new Date()
    });
  } catch (error) {
    console.error(`Error saving message (attempt ${attempt}):`, error);
    if (attempt < MAX_RETRY_ATTEMPTS) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS * attempt));
      return saveEncryptedMessage(userId, payload, attempt + 1);
    }
    throw error;
  }
}

export function registerSocket(io: Server) {
  const onConnection = (socket: UserSocket) => {
    if (!socket.user?.sub) {
      console.error('No user found on socket');
      socket.disconnect(true);
      return;
    }

    const userId = socket.user.sub;
    console.log(`User ${userId} connected`);

    const handleError = (error: Error, event: string) => {
      console.error(`Socket error in ${event}:`, error);
      socket.emit('error', { event, message: error.message });
    };

    // Handle room joining
    socket.on('room:join', async ({ conversationId }) => {
      try {
        await ensureMember(userId, conversationId);
        await socket.join(conversationId);
        socket.to(conversationId).emit('presence:join', { 
          userId,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        handleError(error as Error, 'room:join');
      }
    });

    // Handle room leaving
    socket.on('room:leave', ({ conversationId }) => {
      try {
        socket.leave(conversationId);
        socket.to(conversationId).emit('presence:leave', { 
          userId,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        handleError(error as Error, 'room:leave');
      }
    });

    // Handle typing indicators
    socket.on('message:typing', ({ conversationId, isTyping }) => {
      try {
        socket.to(conversationId).emit('message:typing', { 
          userId,
          isTyping,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        handleError(error as Error, 'message:typing');
      }
    });

    // Handle message sending
    socket.on('message:send', async (payload: MessagePayload, ack) => {
      const { conversationId } = payload;
      await ensureMember(user.sub, conversationId);
      const saved = await saveEncryptedMessage(user.sub, payload);
      io.of(ns).to(conversationId).emit('message:new', { ...saved.toObject(), status: 'delivered' });
      if (ack) ack({ ok: true, id: saved._id });
    });

    socket.on('disconnect', () => {});
  };

  io.of('/dm').on('connection', onConnection('/dm'));
  io.of('/community').on('connection', onConnection('/community'));
}
