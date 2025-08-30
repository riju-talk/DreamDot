import { Types } from 'mongoose';
import { Message } from '../models/Message';
import { Conversation } from '../models/Conversation';
import { logger } from '../utils/logger';

export class ChatService {
  // Create a new conversation
  static async createConversation({
    type,
    participants,
    name,
    createdBy,
  }: {
    type: 'direct' | 'group';
    participants: string[];
    name?: string;
    createdBy: string;
  }) {
    try {
      // For direct messages, check if conversation already exists
      if (type === 'direct' && participants.length === 2) {
        const existingConversation = await Conversation.findOne({
          type: 'direct',
          participants: { $all: participants },
        });

        if (existingConversation) {
          return existingConversation;
        }
      }

      const conversation = await Conversation.create({
        type,
        participants,
        name: name || `Chat ${new Date().toLocaleDateString()}`,
        createdBy,
        admins: [createdBy],
        lastMessageAt: new Date(),
      });

      return conversation;
    } catch (error) {
      logger.error('Error creating conversation:', error);
      throw new Error('Failed to create conversation');
    }
  }

  // Send a message
  static async sendMessage({
    conversationId,
    senderId,
    content,
    type = 'text',
    attachments = [],
  }: {
    conversationId: string;
    senderId: string;
    content: string;
    type?: 'text' | 'image' | 'file' | 'audio';
    attachments?: Array<{ url: string; type: string; name?: string }>;
  }) {
    const session = await Message.startSession();
    session.startTransaction();

    try {
      // Create the message
      const message = await Message.create(
        [
          {
            conversation: new Types.ObjectId(conversationId),
            sender: senderId,
            content,
            type,
            attachments,
            readBy: [senderId],
          },
        ],
        { session }
      );

      // Update conversation's last message
      await Conversation.findByIdAndUpdate(
        conversationId,
        {
          lastMessage: message[0]._id,
          lastMessageAt: new Date(),
          $addToSet: { unreadBy: { $each: [] } }, // Reset unreadBy for sender
          $pull: { unreadBy: senderId }, // Remove sender from unreadBy
        },
        { session, new: true }
      );

      await session.commitTransaction();
      session.endSession();

      // Populate sender info before returning
      const populatedMessage = await Message.findById(message[0]._id)
        .populate('sender', 'name email avatar')
        .lean();

      return populatedMessage;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      logger.error('Error sending message:', error);
      throw new Error('Failed to send message');
    }
  }

  // Mark messages as read
  static async markAsRead(conversationId: string, userId: string) {
    try {
      // Mark messages as read
      await Message.updateMany(
        {
          conversation: conversationId,
          sender: { $ne: userId },
          readBy: { $ne: userId },
        },
        { $addToSet: { readBy: userId } }
      );

      // Update conversation's unreadBy
      await Conversation.findByIdAndUpdate(conversationId, {
        $pull: { unreadBy: userId },
      });
    } catch (error) {
      logger.error('Error marking messages as read:', error);
      throw new Error('Failed to mark messages as read');
    }
  }

  // Get conversation messages with pagination
  static async getConversationMessages(
    conversationId: string,
    userId: string,
    page = 1,
    limit = 50
  ) {
    try {
      // Verify user is part of the conversation
      const isMember = await Conversation.exists({
        _id: conversationId,
        participants: userId,
      });

      if (!isMember) {
        throw new Error('Not authorized to view this conversation');
      }

      const skip = (page - 1) * limit;

      const [messages, total] = await Promise.all([
        Message.find({ conversation: conversationId })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('sender', 'name email avatar')
          .lean(),
        Message.countDocuments({ conversation: conversationId }),
      ]);

      // Mark messages as read
      await this.markAsRead(conversationId, userId);

      return {
        messages: messages.reverse(), // Return oldest first
        pagination: {
          total,
          page,
          totalPages: Math.ceil(total / limit),
          hasMore: page * limit < total,
        },
      };
    } catch (error) {
      logger.error('Error getting conversation messages:', error);
      throw new Error('Failed to get messages');
    }
  }

  // Get user's conversations with pagination
  static async getUserConversations(userId: string, page = 1, limit = 20) {
    try {
      const skip = (page - 1) * limit;

      const [conversations, total] = await Promise.all([
        Conversation.find({ participants: userId })
          .sort({ lastMessageAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('lastMessage')
          .populate('participants', 'name email avatar')
          .lean(),
        Conversation.countDocuments({ participants: userId }),
      ]);

      // Add unread count to each conversation
      const conversationsWithUnread = await Promise.all(
        conversations.map(async (conv) => {
          const unreadCount = await Message.countDocuments({
            conversation: conv._id,
            sender: { $ne: userId },
            readBy: { $ne: userId },
          });
          return { ...conv, unreadCount };
        })
      );

      return {
        conversations: conversationsWithUnread,
        pagination: {
          total,
          page,
          totalPages: Math.ceil(total / limit),
          hasMore: page * limit < total,
        },
      };
    } catch (error) {
      logger.error('Error getting user conversations:', error);
      throw new Error('Failed to get conversations');
    }
  }
}
