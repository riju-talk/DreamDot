"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Sparkles,
  ShoppingCart,
  Play,
  Star,
  Clock,
  Users,
  BookOpen,
} from "lucide-react"
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

interface FeedPostProps {
  post: {
    id: string
    type: "post" | "marketplace"
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
        title?: string
        duration?: string
      }>
      product?: {
        title: string
        price: string
        originalPrice?: string
        category: string
        rating?: number
        students?: number
        tracks?: number
        duration?: string
        courses?: number
        hours?: string
        discount?: string
      }
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

export function FeedPost({ post }: FeedPostProps) {
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
    <Card className="dream-card w-full">
      <CardContent className="p-4 pb-0">
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
                {post.type === "marketplace" && (
                  <Badge className="ml-2 dream-badge text-primary-foreground text-xs">
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Selling
                  </Badge>
                )}
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
                  {media.type === "video" && (
                    <div className="relative aspect-[16/9] w-full bg-muted rounded-xl flex items-center justify-center">
                      <Button size="lg" className="dream-button text-primary-foreground">
                        <Play className="h-6 w-6 mr-2" />
                        Play Video
                      </Button>
                    </div>
                  )}
                  {media.type === "audio" && (
                    <div className="bg-muted/50 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Button size="sm" variant="outline" className="rounded-full">
                          <Play className="h-4 w-4" />
                        </Button>
                        <div>
                          <p className="font-medium text-sm">{media.title}</p>
                          <p className="text-xs text-muted-foreground">{media.duration}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Product Info for Marketplace Posts */}
          {post.type === "marketplace" && post.content.product && (
            <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{post.content.product.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="bg-background/50">
                      {post.content.product.category}
                    </Badge>
                    {post.content.product.discount && (
                      <Badge className="dream-badge text-primary-foreground">{post.content.product.discount}</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    {post.content.product.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span>{post.content.product.rating}</span>
                      </div>
                    )}
                    {post.content.product.students && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{post.content.product.students} students</span>
                      </div>
                    )}
                    {post.content.product.tracks && (
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{post.content.product.tracks} tracks</span>
                      </div>
                    )}
                    {post.content.product.courses && (
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{post.content.product.courses} courses</span>
                      </div>
                    )}
                    {(post.content.product.duration || post.content.product.hours) && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.content.product.duration || post.content.product.hours}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2">
                    {post.content.product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {post.content.product.originalPrice}
                      </span>
                    )}
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {post.content.product.price}
                    </span>
                  </div>
                  <Button className="mt-2 dream-button text-primary-foreground" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-4 border-t mt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center space-x-2 px-3 rounded-full transition-colors ${isLiked ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
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
            className={`px-3 rounded-full transition-colors ${isBookmarked ? "text-primary hover:text-primary/80" : "hover:text-primary"
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
