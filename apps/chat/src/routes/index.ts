
import { Express } from 'express';
import { authJwt } from '../middleware/auth';
import { conversationRoutes } from './conversation.routes';
import { messageRoutes } from './message.routes';
import { attachmentRoutes } from './attachments';
import { healthController } from '../controllers/health.controller';

export function registerApi(app: Express): void {
  // Health check endpoint (no auth required)
  app.get('/health', healthController);
  app.get('/api/health', healthController);

  // API prefix
  const apiPrefix = '/api/v1';

  // Apply JWT authentication to all API routes
  app.use(apiPrefix, authJwt);

  // Register routes
  app.use(`${apiPrefix}/conversations`, conversationRoutes);
  app.use(`${apiPrefix}/messages`, messageRoutes);
  app.use(`${apiPrefix}/attachments`, attachmentRoutes);

  // Catch-all for API routes
  app.use(apiPrefix, (req, res) => {
    res.status(404).json({
      success: false,
      message: `API endpoint ${req.originalUrl} not found`
    });
  });
}
