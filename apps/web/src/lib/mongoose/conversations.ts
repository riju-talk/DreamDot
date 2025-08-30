import { connectToDatabase } from './connection'
import Conversation from './models/Conversation.js'
import Message from './models/Message.js'
import type { ChatConversation, ChatMessage } from '../chat'

export async function fetchConversations(userId: string): Promise<{
  conversations: any[]
}> {
  try {
    await connectToDatabase()
    
    const conversations = await Conversation.find({
      'participants.userId': userId
    }).lean()

    // Get last message for each conversation
    const conversationsWithMessages = await Promise.all(
      conversations.map(async (conv) => {
        const lastMessage = await Message.findOne({
          conversationId: conv._id
        }).sort({ timestamp: -1 }).lean()

        const unreadCount = await Message.countDocuments({
          conversationId: conv._id,
          readBy: { $ne: userId }
        })

        return {
          id: conv._id.toString(),
          type: conv.type,
          name: conv.name || (conv.type === 'dm' ? 'Direct Message' : 'Group Chat'),
          avatar: conv.avatar,
          participants: conv.participants,
          lastMessage: lastMessage ? {
            id: lastMessage._id.toString(),
            content: lastMessage.content,
            senderId: lastMessage.senderId,
            senderName: lastMessage.senderName,
            timestamp: lastMessage.timestamp.toISOString(),
            type: lastMessage.type,
            isRead: lastMessage.readBy.includes(userId)
          } : null,
          unreadCount,
          createdAt: conv.createdAt.toISOString(),
          updatedAt: conv.updatedAt || conv.createdAt.toISOString()
        }
      })
    )

    return {
      conversations: conversationsWithMessages.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      )
    }
  } catch (error) {
    console.error('Error fetching conversations:', error)
    throw error
  }
}

export async function fetchMessages(conversationId: string, userId: string): Promise<{
  messages: any[]
}> {
  try {
    await connectToDatabase()
    
    const messages = await Message.find({
      conversationId
    }).sort({ timestamp: 1 }).lean()

    const formattedMessages = messages.map(msg => ({
      id: msg._id.toString(),
      content: msg.content,
      senderId: msg.senderId,
      senderName: msg.senderName,
      senderAvatar: msg.senderAvatar,
      timestamp: msg.timestamp.toISOString(),
      type: msg.type,
      fileName: msg.fileName,
      isRead: msg.readBy.includes(userId)
    }))

    return { messages: formattedMessages }
  } catch (error) {
    console.error('Error fetching messages:', error)
    throw error
  }
}

export async function createConversation({
  type,
  name,
  participantIds,
  isPrivate = false
}: {
  type: 'dm' | 'group'
  name?: string
  participantIds: string[]
  isPrivate?: boolean
}): Promise<{ conversation: any }> {
  try {
    await connectToDatabase()
    
    const conversation = new Conversation({
      type,
      name,
      isPrivate,
      participants: participantIds.map(userId => ({
        userId,
        role: 'member'
      })),
      createdAt: new Date()
    })

    await conversation.save()

    return {
      conversation: {
        id: conversation._id.toString(),
        type: conversation.type,
        name: conversation.name,
        isPrivate: conversation.isPrivate,
        participants: conversation.participants,
        createdAt: conversation.createdAt.toISOString(),
        updatedAt: conversation.createdAt.toISOString(),
        unreadCount: 0
      }
    }
  } catch (error) {
    console.error('Error creating conversation:', error)
    throw error
  }
}

export async function sendMessage({
  conversationId,
  senderId,
  senderName,
  senderAvatar,
  content,
  type = 'text',
  fileName
}: {
  conversationId: string
  senderId: string
  senderName: string
  senderAvatar?: string
  content: string
  type?: 'text' | 'image' | 'file' | 'audio'
  fileName?: string
}): Promise<{ message: any }> {
  try {
    await connectToDatabase()
    
    const message = new Message({
      conversationId,
      senderId,
      senderName,
      senderAvatar,
      content,
      type,
      fileName,
      timestamp: new Date(),
      readBy: [senderId] // Mark as read by sender
    })

    await message.save()

    // Update conversation's updatedAt
    await Conversation.findByIdAndUpdate(conversationId, {
      updatedAt: new Date()
    })

    return {
      message: {
        id: message._id.toString(),
        content: message.content,
        senderId: message.senderId,
        senderName: message.senderName,
        senderAvatar: message.senderAvatar,
        timestamp: message.timestamp.toISOString(),
        type: message.type,
        fileName: message.fileName,
        isRead: true
      }
    }
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}

export async function markConversationAsRead(conversationId: string, userId: string): Promise<void> {
  try {
    await connectToDatabase()
    
    // Mark all messages in the conversation as read by this user
    await Message.updateMany(
      { 
        conversationId,
        readBy: { $ne: userId }
      },
      {
        $addToSet: { readBy: userId }
      }
    )
  } catch (error) {
    console.error('Error marking conversation as read:', error)
    throw error
  }
}
