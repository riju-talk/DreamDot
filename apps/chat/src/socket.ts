import { Server, Socket } from 'socket.io';
import { ensureMember } from './utils/authz';
import { Message } from './db/models/Message';

async function saveEncryptedMessage(userId: string, payload: any) {
  const { conversationId, ciphertext, nonce, keyId, attachments } = payload;
  return Message.create({ conversationId, senderId: userId, ciphertext, nonce, keyId, attachments });
}

export function registerSocket(io: Server) {
  const onConnection = (ns: string) => (socket: Socket) => {
    const user = (socket as any).user;
    socket.on('room:join', async ({ conversationId }) => {
      await ensureMember(user.sub, conversationId);
      socket.join(conversationId);
      socket.to(conversationId).emit('presence:join', { userId: user.sub });
    });

    socket.on('room:leave', ({ conversationId }) => {
      socket.leave(conversationId);
      socket.to(conversationId).emit('presence:leave', { userId: user.sub });
    });

    socket.on('message:typing', ({ conversationId, isTyping }) => {
      socket.to(conversationId).emit('message:typing', { userId: user.sub, isTyping });
    });

    socket.on('message:send', async (payload, ack) => {
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
