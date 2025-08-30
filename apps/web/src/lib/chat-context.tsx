"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useSession } from "next-auth/react"
import { chatApi } from "./api/chat"
import type { ChatConversation, ChatMessage, GroupChat, DirectMessage } from "./chat"

interface ChatContextType {
  conversations: ChatConversation[]
  activeConversation: ChatConversation | null
  messages: ChatMessage[]
  isLoading: boolean
  setActiveConversation: (conversation: ChatConversation | null) => void
  sendMessage: (content: string, type?: "text" | "image" | "file") => Promise<void>
  createDirectMessage: (userId: string) => Promise<DirectMessage>
  createGroupChat: (name: string, participantIds: string[]) => Promise<GroupChat>
  markAsRead: (conversationId: string) => void
  searchConversations: (query: string) => ChatConversation[]
  refreshConversations: () => Promise<void>
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

// Mock data for demonstration
const mockConversations: ChatConversation[] = [
  {
    id: "dm-1",
    type: "dm",
    name: "ArtisticVision",
    avatar: "/placeholder.svg",
    participants: [
      {
        id: "user-1",
        name: "ArtisticVision",
        handle: "@artisticvision",
        avatar: "/placeholder.svg",
        isOnline: true,
      },
    ],
    lastMessage: {
      id: "msg-1",
      content: "Hey! Love your latest artwork! 🎨",
      senderId: "user-1",
      senderName: "ArtisticVision",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-15T10:30:00Z",
      type: "text",
      isRead: false,
    },
    unreadCount: 2,
    isOnline: true,
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "group-1",
    type: "group",
    name: "Digital Artists Hub",
    avatar: "/placeholder.svg",
    participants: [
      {
        id: "user-1",
        name: "ArtisticVision",
        handle: "@artisticvision",
        avatar: "/placeholder.svg",
        isOnline: true,
        role: "admin",
      },
      {
        id: "user-2",
        name: "PixelPoet",
        handle: "@pixelpoet",
        avatar: "/placeholder.svg",
        isOnline: false,
        role: "member",
      },
      {
        id: "user-3",
        name: "ColorMaster",
        handle: "@colormaster",
        avatar: "/placeholder.svg",
        isOnline: true,
        role: "member",
      },
    ],
    lastMessage: {
      id: "msg-2",
      content: "Who's joining the art challenge this week?",
      senderId: "user-2",
      senderName: "PixelPoet",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-15T09:15:00Z",
      type: "text",
      isRead: true,
    },
    unreadCount: 0,
    createdAt: "2024-01-05T12:00:00Z",
    updatedAt: "2024-01-15T09:15:00Z",
  },
  {
    id: "dm-2",
    type: "dm",
    name: "StoryWeaver",
    avatar: "/placeholder.svg",
    participants: [
      {
        id: "user-4",
        name: "StoryWeaver",
        handle: "@storyweaver",
        avatar: "/placeholder.svg",
        isOnline: false,
        lastSeen: "2024-01-15T08:45:00Z",
      },
    ],
    lastMessage: {
      id: "msg-3",
      content: "Thanks for the feedback on my story!",
      senderId: "user-4",
      senderName: "StoryWeaver",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-14T16:20:00Z",
      type: "text",
      isRead: true,
    },
    unreadCount: 0,
    createdAt: "2024-01-12T14:30:00Z",
    updatedAt: "2024-01-14T16:20:00Z",
  },
]

const mockMessages: { [key: string]: ChatMessage[] } = {
  "dm-1": [
    {
      id: "msg-1-1",
      content: "Hey! Love your latest artwork! 🎨",
      senderId: "user-1",
      senderName: "ArtisticVision",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-15T10:30:00Z",
      type: "text",
      isRead: false,
    },
    {
      id: "msg-1-2",
      content: "The colors you used are absolutely stunning!",
      senderId: "user-1",
      senderName: "ArtisticVision",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-15T10:31:00Z",
      type: "text",
      isRead: false,
    },
    {
      id: "msg-1-3",
      content: "Thank you so much! That means a lot coming from you 😊",
      senderId: "current-user",
      senderName: "You",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-15T10:35:00Z",
      type: "text",
      isRead: true,
    },
  ],
  "group-1": [
    {
      id: "msg-2-1",
      content: "Good morning everyone! 🌅",
      senderId: "user-1",
      senderName: "ArtisticVision",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-15T08:00:00Z",
      type: "text",
      isRead: true,
    },
    {
      id: "msg-2-2",
      content: "Morning! Ready for another creative day?",
      senderId: "user-3",
      senderName: "ColorMaster",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-15T08:15:00Z",
      type: "text",
      isRead: true,
    },
    {
      id: "msg-2-3",
      content: "Who's joining the art challenge this week?",
      senderId: "user-2",
      senderName: "PixelPoet",
      senderAvatar: "/placeholder.svg",
      timestamp: "2024-01-15T09:15:00Z",
      type: "text",
      isRead: true,
    },
  ],
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession()
  const [conversations, setConversations] = useState<ChatConversation[]>([])
  const [activeConversation, setActiveConversation] = useState<ChatConversation | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Load conversations on mount
  useEffect(() => {
    if (session?.user) {
      refreshConversations()
    }
  }, [session])

  // Load messages when active conversation changes
  useEffect(() => {
    if (activeConversation?.id) {
      loadMessages(activeConversation.id)
    } else {
      setMessages([])
    }
  }, [activeConversation])

  const refreshConversations = async () => {
    setIsLoading(true)
    try {
      const response = await chatApi.getConversations()
      if (response.success && response.data) {
        setConversations(response.data)
      } else {
        console.error('Failed to load conversations:', response.error)
        // Fallback to mock data if API fails
        setConversations(mockConversations)
      }
    } catch (error) {
      console.error('Error loading conversations:', error)
      // Fallback to mock data on error
      setConversations(mockConversations)
    } finally {
      setIsLoading(false)
    }
  }

  const loadMessages = async (conversationId: string) => {
    setIsLoading(true)
    try {
      const response = await chatApi.getMessages(conversationId)
      if (response.success && response.data) {
        setMessages(response.data)
      } else {
        console.error('Failed to load messages:', response.error)
        // Fallback to mock data if API fails
        setMessages(mockMessages[conversationId] || [])
      }
    } catch (error) {
      console.error('Error loading messages:', error)
      // Fallback to mock data on error
      setMessages(mockMessages[conversationId] || [])
    } finally {
      setIsLoading(false)
    }
  }

  const sendMessage = async (content: string, type: "text" | "image" | "file" = "text") => {
    if (!activeConversation) return

    // Optimistically add the message to UI
    const tempId = `temp-${Date.now()}`
    const optimisticMessage: ChatMessage = {
      id: tempId,
      content,
      senderId: session?.user?.id || "current-user",
      senderName: session?.user?.name || "You",
      senderAvatar: session?.user?.image || "/placeholder.svg",
      timestamp: new Date().toISOString(),
      type,
      isRead: true,
    }

    setMessages((prev) => [...prev, optimisticMessage])

    try {
      const response = await chatApi.sendMessage(activeConversation.id, content, type)
      
      if (response.success && response.data) {
        // Replace optimistic message with real one
        setMessages((prev) => 
          prev.map(msg => msg.id === tempId ? response.data! : msg)
        )

        // Update conversation's last message
        setConversations((prev) =>
          prev.map((conv) =>
            conv.id === activeConversation.id
              ? {
                  ...conv,
                  lastMessage: response.data!,
                  updatedAt: new Date().toISOString(),
                }
              : conv,
          ),
        )
      } else {
        console.error('Failed to send message:', response.error)
        // Remove optimistic message on failure
        setMessages((prev) => prev.filter(msg => msg.id !== tempId))
      }
    } catch (error) {
      console.error('Error sending message:', error)
      // Remove optimistic message on error
      setMessages((prev) => prev.filter(msg => msg.id !== tempId))
    }
  }

  const createDirectMessage = async (userId: string): Promise<DirectMessage> => {
    // Mock implementation
    const newDM: DirectMessage = {
      id: `dm-${Date.now()}`,
      type: "dm",
      name: "New User",
      otherParticipant: {
        id: userId,
        name: "New User",
        handle: "@newuser",
        avatar: "/placeholder.svg",
        isOnline: false,
      },
      participants: [
        {
          id: userId,
          name: "New User",
          handle: "@newuser",
          avatar: "/placeholder.svg",
          isOnline: false,
        },
      ],
      unreadCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    setConversations((prev) => [newDM, ...prev])
    return newDM
  }

  const createGroupChat = async (name: string, participantIds: string[]): Promise<GroupChat> => {
    // Mock implementation
    const newGroup: GroupChat = {
      id: `group-${Date.now()}`,
      type: "group",
      name,
      participants: participantIds.map((id) => ({
        id,
        name: `User ${id}`,
        handle: `@user${id}`,
        avatar: "/placeholder.svg",
        isOnline: false,
        role: "member" as const,
      })),
      unreadCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isPrivate: false,
      adminIds: ["current-user"],
      memberCount: participantIds.length + 1,
    }

    setConversations((prev) => [newGroup, ...prev])
    return newGroup
  }

  const markAsRead = (conversationId: string) => {
    setConversations((prev) => prev.map((conv) => (conv.id === conversationId ? { ...conv, unreadCount: 0 } : conv)))
  }

  const searchConversations = (query: string) => {
    if (!query.trim()) return conversations
    
    // Use Fuse.js search from search utility
    const { searchConversations: fuseSearchConversations } = require('./search')
    return fuseSearchConversations(conversations, query)
  }

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeConversation,
        messages,
        isLoading,
        setActiveConversation,
        sendMessage,
        createDirectMessage,
        createGroupChat,
        markAsRead,
        searchConversations,
        refreshConversations,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}
