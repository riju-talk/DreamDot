
import { Conversation } from '../db/models/Conversation';
import { logger } from './logger';

export async function ensureMember(userId: string, conversationId: string): Promise<boolean> {
  try {
    const conversation = await Conversation.findOne({
      _id: conversationId,
      participants: userId
    });

    if (!conversation) {
      throw new Error('User is not a member of this conversation');
    }

    return true;
  } catch (error) {
    logger.error('Authorization check failed:', { userId, conversationId, error });
    throw error;
  }
}

export async function isConversationAdmin(userId: string, conversationId: string): Promise<boolean> {
  try {
    const conversation = await Conversation.findOne({
      _id: conversationId,
      admins: userId
    });

    return !!conversation;
  } catch (error) {
    logger.error('Admin check failed:', { userId, conversationId, error });
    return false;
  }
}
