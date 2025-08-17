"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

interface SocialPostProps {
  post: {
    id: string
    user: {
      name: string
      handle: string
      avatar: string
      verified: boolean
    }
    timestamp: string
    content: {
      text: string
      media?: Array<{
        type: "image" | "video" | "audio"
        url: string
        alt?: string
      }>
    }
    engagement: {
      likes: number
      comments: number
      shares: number
      bookmarks: number
    }
    isLiked: boolean
    isBookmarked: boolean
  }
}

export function SocialPost({ post }: SocialPostProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked)
  const [likes, setLikes] = useState(post.engagement.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  return (
    <Card className="dream-card w-full max-w-2xl mx-auto">
      <CardContent className="p-6 pb-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 ring-2 ring-background">
              <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
              <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                {post.user.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1">
                <Link href={`/account/${post.user.handle}`} className="font-medium hover:underline">
                  {post.user.name}
                </Link>
                {post.user.verified && <Sparkles className="h-4 w-4 text-primary" />}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>{post.user.handle}</span>
                <span className="mx-1">•</span>
                <span>{post.timestamp}</span>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save post</DropdownMenuItem>
              <DropdownMenuItem>Copy link</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Not interested</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-sm leading-relaxed whitespace-pre-line">{post.content.text}</p>

          {/* Media */}
          {post.content.media && post.content.media.length > 0 && (
            <div className="space-y-3">
              {post.content.media.map((media, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl">
                  {media.type === "image" && (
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={media.url || "/placeholder.svg"}
                        alt={media.alt || "Post media"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-4 border-t mt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center space-x-2 px-3 rounded-full transition-colors ${
                isLiked ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
              }`}
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              <span>{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 px-3 rounded-full">
              <MessageCircle className="h-4 w-4" />
              <span>{post.engagement.comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 px-3 rounded-full">
              <Share2 className="h-4 w-4" />
              <span>{post.engagement.shares}</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className={`px-3 rounded-full transition-colors ${
              isBookmarked ? "text-primary hover:text-primary/80" : "hover:text-primary"
            }`}
            onClick={handleBookmark}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
