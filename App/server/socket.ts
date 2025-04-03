// const { Server: HTTPServer } = require("http");
// const { Server: SocketIOServer } = require("socket.io");
import { Server as SocketIOServer } from 'socket.io';
import { prismaMessaging as prismaMessagingInstance } from '../src/lib/db/client';
// const { prismaMessaging: prismaMessagingInstance } = require("../src/lib/db/client");


let io = null;

const initializeSocket = (server) => {
  if (!io) {
    io = new SocketIOServer(server, {
      path: "/api/socket_io",
      cors: { origin: "*" }, // Adjust for production security
    });

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      // Register user and join their conversation rooms
      socket.on("register", async (userId) => {
        console.log(`User ${userId["userId"]} connected with socket ${socket.id}`);

        // Fetch all conversation IDs for this user from the database
        const conversationIds = await getUserConversations(userId["userId"]);
        console.log(`User ${userId["userId"]} joining conversations:`, conversationIds);
        
        // Join each conversation room
        conversationIds.forEach((conversationId) => {
          socket.join(conversationId);
          console.log(`User ${userId["userId"]} joined room ${conversationId}`);
        });
      });

      // Handle sending a message
      socket.on("sendMessage", (message) => {
        console.log("Received message:", message);

        // Emit the message to all sockets in the conversation room
        io.to(message.conversationId).emit("receiveMessage", message);
        console.log(`Message emitted to room ${message.conversationId}`);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        // No need to manually remove from rooms; Socket.IO handles this automatically
      });
    });
  }
  return io;
};

const getSocket = () => io;

// Dummy function to fetch user's conversations (replace with actual DB query)
const getUserConversations = async (userId) => {
  const userConversations = await prismaMessagingInstance.userConversation.findMany({
    where: { userId },
    select: { conversationId: true },
  });
  return userConversations.map((uc) => uc.conversationId);
};

export { initializeSocket, getSocket };