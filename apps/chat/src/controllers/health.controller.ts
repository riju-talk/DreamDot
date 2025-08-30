import { Request, Response } from 'express';
import { logger } from '../utils/logger';

/**
 * Health check endpoint handler
 */
export const healthCheck = (_req: Request, res: Response) => {
  try {
    // Add any health check logic here (e.g., database connection check)
    const healthStatus = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };

    res.json(healthStatus);
  } catch (error) {
    logger.error('Health check failed:', error);
    res.status(503).json({ 
      status: 'error',
      message: 'Service unavailable',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export default {
  healthCheck,
};
