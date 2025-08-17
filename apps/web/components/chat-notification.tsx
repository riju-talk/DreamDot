"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { X, MessageSquare } from "lucide-react"

interface ChatNotificationProps {
  message: {
    id: string
    content: string
    senderName: string
    senderAvatar: string
    conversationName: string
  }
  onClose: () => void
  onReply: () => void
}

export function ChatNotification({ message, onClose, onReply }: ChatNotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  if (!isVisible) return null

  return (
    <Card className="fixed top-4 right-4 z-50 w-80 dream-card shadow-lg animate-in slide-in-from-right">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={message.senderAvatar || "/placeholder.svg"} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {message.senderName.substring(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-medium text-sm">{message.senderName}</p>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
                <X className="h-3 w-3" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">{message.conversationName}</p>
            <p className="text-sm mt-1 line-clamp-2">{message.content}</p>

            <div className="flex items-center space-x-2 mt-3">
              <Button size="sm" onClick={onReply} className="h-7 text-xs">
                <MessageSquare className="h-3 w-3 mr-1" />
                Reply
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
