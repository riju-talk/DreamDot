import { Router } from 'express';
import { ChatService } from '../services/chat.service';
import { AuthenticatedRequest } from '../middleware/auth';
import { logger } from '../utils/logger';

const router = Router();

// Create a new conversation
router.post('/', async (req: AuthenticatedRequest, res) => {
  try {
    const { type, participants, name } = req.body;
    const userId = req.user?.sub;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // For direct messages, ensure only 2 participants
    if (type === 'direct' && participants.length !== 1) {
      return res.status(400).json({ message: 'Direct message requires exactly one other participant' });
    }

    // For group chats, ensure at least 2 participants
    if (type === 'group' && participants.length < 2) {
      return res.status(400).json({ message: 'Group chat requires at least 2 participants' });
    }

    // Add current user to participants if not already included
    const allParticipants = [...new Set([...participants, userId])];

    const conversation = await ChatService.createConversation({
      type,
      participants: allParticipants,
      name,
      createdBy: userId,
    });

    res.status(201).json(conversation);
  } catch (error) {
    logger.error('Error creating conversation:', error);
    res.status(500).json({ message: 'Failed to create conversation' });
  }
});

// Get user's conversations with pagination
router.get('/', async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.sub;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const result = await ChatService.getUserConversations(userId, page, limit);
    res.json(result);
  } catch (error) {
    logger.error('Error getting conversations:', error);
    res.status(500).json({ message: 'Failed to get conversations' });
  }
});

// Get a specific conversation
router.get('/:id', async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.sub;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const conversation = await Conversation.findOne({
      _id: id,
      participants: userId,
    })
      .populate('lastMessage')
      .populate('participants', 'name email avatar')
      .lean();

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    // Add unread count
    const unreadCount = await Message.countDocuments({
      conversation: id,
      sender: { $ne: userId },
      readBy: { $ne: userId },
    });

    res.json({ ...conversation, unreadCount });
  } catch (error) {
    logger.error('Error getting conversation:', error);
    res.status(500).json({ message: 'Failed to get conversation' });
  }
});

// Update conversation (e.g., change name, add/remove participants)
router.patch('/:id', async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.sub;
    const { name, description, isPrivate, participants } = req.body;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if user is an admin of the conversation
    const conversation = await Conversation.findOne({
      _id: id,
      admins: userId,
    });

    if (!conversation) {
      return res.status(403).json({ message: 'Not authorized to update this conversation' });
    }

    // Update fields if provided
    if (name !== undefined) conversation.name = name;
    if (description !== undefined) conversation.description = description;
    if (isPrivate !== undefined) conversation.isPrivate = isPrivate;
    
    // Add/remove participants if provided
    if (participants && Array.isArray(participants)) {
      // Ensure current user remains in the conversation
      const updatedParticipants = [...new Set([...participants, userId])];
      conversation.participants = updatedParticipants;
      
      // Ensure admins are still participants
      conversation.admins = conversation.admins.filter(adminId => 
        updatedParticipants.includes(adminId)
      );
    }

    await conversation.save();
    
    res.json(conversation);
  } catch (error) {
    logger.error('Error updating conversation:', error);
    res.status(500).json({ message: 'Failed to update conversation' });
  }
});

// Delete a conversation (soft delete)
router.delete('/:id', async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.sub;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // For group chats, only admins can delete
    // For direct messages, either participant can delete their copy
    const conversation = await Conversation.findOne({
      _id: id,
      $or: [
        { type: 'group', admins: userId },
        { type: 'direct', participants: userId }
      ]
    });

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found or not authorized' });
    }

    if (conversation.type === 'group') {
      // For groups, only admins can delete the entire conversation
      await Conversation.findByIdAndDelete(id);
      // TODO: Notify all participants about the deletion
    } else {
      // For direct messages, just remove the user from participants
      conversation.participants = conversation.participants.filter(p => p !== userId);
      if (conversation.participants.length === 0) {
        // If no participants left, delete the conversation
        await Conversation.findByIdAndDelete(id);
      } else {
        await conversation.save();
      }
    }

    res.json({ message: 'Conversation deleted successfully' });
  } catch (error) {
    logger.error('Error deleting conversation:', error);
    res.status(500).json({ message: 'Failed to delete conversation' });
  }
});

export default router;
