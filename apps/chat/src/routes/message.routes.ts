import { Router } from 'express';
import { ChatService } from '../services/chat.service';
import { AuthenticatedRequest } from '../middleware/auth';
import { logger } from '../utils/logger';
import { Message } from '../models/Message';
import { Conversation } from '../models/Conversation'; // Import Conversation model
import { Types } from 'mongoose';

const router = Router();

// Send a message
router.post('/', async (req: AuthenticatedRequest, res) => {
  try {
    const { conversationId, content, type = 'text', attachments = [] } = req.body;
    const userId = req.user?.sub;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!conversationId || !content) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const message = await ChatService.sendMessage({
      conversationId,
      senderId: userId,
      content,
      type,
      attachments,
    });

    // Emit socket event for real-time updates
    // This will be handled by the WebSocket server
    // io.to(conversationId).emit('message:new', message);

    res.status(201).json(message);
  } catch (error) {
    logger.error('Error sending message:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

// Get messages in a conversation with pagination
router.get('/conversation/:conversationId', async (req: AuthenticatedRequest, res) => {
  try {
    const { conversationId } = req.params;
    const userId = req.user?.sub;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify user is part of the conversation
    const isParticipant = await Conversation.exists({
      _id: conversationId,
      participants: userId,
    });

    if (!isParticipant) {
      return res.status(403).json({ message: 'Not authorized to view this conversation' });
    }

    const result = await ChatService.getConversationMessages(
      conversationId,
      userId,
      page,
      limit
    );

    res.json(result);
  } catch (error) {
    logger.error('Error getting messages:', error);
    res.status(500).json({ message: 'Failed to get messages' });
  }
});

// Mark messages as read
router.post('/mark-read', async (req: AuthenticatedRequest, res) => {
  try {
    const { conversationId } = req.body;
    const userId = req.user?.sub;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!conversationId) {
      return res.status(400).json({ message: 'Missing conversation ID' });
    }

    await ChatService.markAsRead(conversationId, userId);
    
    // Emit socket event to update read status in real-time
    // io.to(conversationId).emit('message:read', { userId, conversationId });

    res.json({ success: true });
  } catch (error) {
    logger.error('Error marking messages as read:', error);
    res.status(500).json({ message: 'Failed to mark messages as read' });
  }
});

// Delete a message (soft delete)
router.delete('/:messageId', async (req: AuthenticatedRequest, res) => {
  try {
    const { messageId } = req.params;
    const userId = req.user?.sub;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    // Only the message sender or an admin can delete the message
    const conversation = await Conversation.findOne({
      _id: message.conversation,
      $or: [
        { _id: message.conversation, participants: userId },
        { _id: message.conversation, admins: userId }
      ]
    });

    if (!conversation) {
      return res.status(403).json({ message: 'Not authorized to delete this message' });
    }

    // Soft delete the message
    message.deleted = true;
    message.deletedAt = new Date();
    message.deletedBy = userId;
    await message.save();

    // Emit socket event for real-time updates
    // io.to(conversation._id.toString()).emit('message:deleted', { messageId });

    res.json({ success: true });
  } catch (error) {
    logger.error('Error deleting message:', error);
    res.status(500).json({ message: 'Failed to delete message' });
  }
});

// React to a message
router.post('/:messageId/react', async (req: AuthenticatedRequest, res) => {
  try {
    const { messageId } = req.params;
    const { emoji } = req.body;
    const userId = req.user?.sub;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!emoji) {
      return res.status(400).json({ message: 'Emoji is required' });
    }

    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    // Verify user is part of the conversation
    const isParticipant = await Conversation.exists({
      _id: message.conversation,
      participants: userId,
    });

    if (!isParticipant) {
      return res.status(403).json({ message: 'Not authorized to react to this message' });
    }

    // Remove existing reaction from this user if it exists
    const existingReactionIndex = message.reactions.findIndex(
      (r) => r.userId === userId
    );

    if (existingReactionIndex !== -1) {
      // If the same emoji, remove the reaction
      if (message.reactions[existingReactionIndex].emoji === emoji) {
        message.reactions.splice(existingReactionIndex, 1);
      } else {
        // Update to the new emoji
        message.reactions[existingReactionIndex].emoji = emoji;
      }
    } else {
      // Add new reaction
      message.reactions.push({
        emoji,
        userId,
      });
    }

    await message.save();

    // Emit socket event for real-time updates
    // io.to(message.conversation.toString()).emit('message:reacted', {
    //   messageId,
    //   reactions: message.reactions,
    // });

    res.json({ reactions: message.reactions });
  } catch (error) {
    logger.error('Error reacting to message:', error);
    res.status(500).json({ message: 'Failed to react to message' });
  }
});

export default router;