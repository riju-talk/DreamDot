import { Server as SocketIOServer, Socket } from 'socket.io';
import { Server as HTTPServer } from 'http';
import { prismaMessaging as prismaMessagingInstance } from '../src/lib/db/client';

let io: SocketIOServer | null = null;

/**
 * Initializes a new Socket.IO server instance or returns the existing one.
 * @param server - The HTTP server to attach the socket to.
 * @returns The initialized Socket.IO server.
 */

const initializeSocket = (server: HTTPServer): SocketIOServer => {
  if (!io) {
    io = new SocketIOServer(server, {
      path: "/api/socket_io",
      cors: { origin: "*" }, // Adjust for production security
    });

    io.on("connection", (socket: Socket) => {
      console.log("User connected:", socket.id);

      // Register user and join their conversation rooms
      socket.on("register", async (userId: { userId: string }) => {
        console.log(`User ${userId.userId} connected with socket ${socket.id}`);

        const conversationIds = await getUserConversations(userId.userId);
        console.log(`User ${userId.userId} joining conversations:`, conversationIds);

        conversationIds.forEach((conversationId: string) => {
          socket.join(conversationId);
          console.log(`User ${userId.userId} joined room ${conversationId}`);
        });
      });

      socket.on("sendMessage", (message: { conversationId: string; [key: string]: any }) => {
        console.log("Received message:", message);
        io?.to(message.conversationId).emit("receiveMessage", message);
        console.log(`Message emitted to room ${message.conversationId}`);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }

  return io;
};

const getSocket = (): SocketIOServer | null => io;

/**
 * Retrieves all conversation IDs that a user is part of.
 * @param userId - The ID of the user.
 * @returns A list of conversation IDs.
 */

const getUserConversations = async (userId: string): Promise<string[]> => {
  const userConversations = await prismaMessagingInstance.userConversation.findMany({
    where: { userId },
    select: { conversationId: true },
  });

  return userConversations.map((uc) => uc.conversationId);
};

export { initializeSocket, getSocket };
