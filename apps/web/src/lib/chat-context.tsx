
"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useSession } from "next-auth/react"
import { useSocket } from "./socket"
import type { ChatConversation, ChatMessage, GroupChat, DirectMessage } from "./chat"

interface ChatContextType {
  conversations: ChatConversation[]
  activeConversation: ChatConversation | null
  messages: ChatMessage[]
  isConnected: boolean
  joinConversation: (conversationId: string) => void
  leaveConversation: (conversationId: string) => void
  sendMessage: (content: string, conversationId: string) => void
  setActiveConversation: (conversation: ChatConversation | null) => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession()
  const { socket, isConnected } = useSocket()
  const [conversations, setConversations] = useState<ChatConversation[]>([])
  const [activeConversation, setActiveConversation] = useState<ChatConversation | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])

  // Listen for incoming messages
  useEffect(() => {
    if (!socket) return

    const handleNewMessage = (message: ChatMessage) => {
      setMessages(prev => [...prev, message])
    }

    const handleMessageDelivered = (data: { messageId: string }) => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === data.messageId 
            ? { ...msg, status: 'delivered' } 
            : msg
        )
      )
    }

    socket.on('message:new', handleNewMessage)
    socket.on('message:delivered', handleMessageDelivered)

    return () => {
      socket.off('message:new', handleNewMessage)
      socket.off('message:delivered', handleMessageDelivered)
    }
  }, [socket])

  const joinConversation = (conversationId: string) => {
    if (socket && isConnected) {
      socket.emit('room:join', { conversationId })
    }
  }

  const leaveConversation = (conversationId: string) => {
    if (socket && isConnected) {
      socket.emit('room:leave', { conversationId })
    }
  }

  const sendMessage = (content: string, conversationId: string) => {
    if (!socket || !isConnected || !session?.user) return

    const message = {
      conversationId,
      content,
      senderId: session.user.id,
      timestamp: new Date().toISOString(),
      type: 'text' as const
    }

    socket.emit('message:send', message, (response: any) => {
      if (response.ok) {
        console.log('Message sent successfully')
      } else {
        console.error('Failed to send message:', response.error)
      }
    })
  }

  const value: ChatContextType = {
    conversations,
    activeConversation,
    messages,
    isConnected,
    joinConversation,
    leaveConversation,
    sendMessage,
    setActiveConversation
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}
