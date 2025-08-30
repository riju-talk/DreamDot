import { Router, type Express } from "express";
import { authJwt } from "../middleware/auth";
import { healthCheck } from "../controllers/health.controller";
import conversationRoutes from "./conversation.routes";
import messageRoutes from "./message.routes";
import { uploadAttachment, streamAttachment } from "./attachments";

export function registerApi(app: Express) {
  const router = Router();
  
  // Health check endpoint (no auth required)
  router.get('/health', healthCheck);
  
  // API routes with JWT authentication
  router.use(authJwt);
  
  // Chat API v1 routes
  router.use('/conversations', conversationRoutes);
  router.use('/messages', messageRoutes);
  
  // File attachments
  router.post('/attachments', uploadAttachment);
  router.get('/attachments/:id', streamAttachment);
  
  // 404 handler for /api/chat/*
  router.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
  });
  
  // Mount the router at /api/chat
  app.use('/api/chat', router);
}
