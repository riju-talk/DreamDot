export interface Message {
    _id: string
    conversationId: string
    senderId: string
    senderName: string
    senderAvatar?: string
    content: string
    type: "text" | "image" | "file" | "audio"
    fileName?: string
    timestamp: string
    readBy: string[]
  }
  