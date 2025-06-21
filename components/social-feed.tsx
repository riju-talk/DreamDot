"use client"

import { SocialPost } from "@/components/social-post"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const socialPosts = [
  {
    id: "1",
    user: {
      name: "ArtisticVision",
      handle: "@artisticvision",
      avatar: "/placeholder.svg",
      verified: true,
    },
    timestamp: "2h",
    content: {
      text: "Just finished this cyberpunk cityscape! Spent 12 hours on the neon reflections alone 🌃✨ What do you think? #digitalart #cyberpunk #neonvibes",
      media: [
        {
          type: "image",
          url: "/placeholder.svg?height=400&width=600",
          alt: "Cyberpunk cityscape artwork",
        },
      ],
    },
    engagement: {
      likes: 1243,
      comments: 89,
      shares: 34,
      bookmarks: 156,
    },
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "2",
    user: {
      name: "StoryWeaver",
      handle: "@storyweaver",
      avatar: "/placeholder.svg",
      verified: true,
    },
    timestamp: "4h",
    content: {
      text: "Chapter 3 of The Midnight Chronicles is here! Our hero finally discovers the truth about the ancient prophecy... 📚✨\n\nWhat's your favorite fantasy trope? Let me know in the comments! #writing #fantasy #storytelling",
      media: [
        {
          type: "image",
          url: "/placeholder.svg?height=300&width=500",
          alt: "Book chapter illustration",
        },
      ],
    },
    engagement: {
      likes: 532,
      comments: 67,
      shares: 23,
      bookmarks: 89,
    },
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: "3",
    user: {
      name: "PixelPoet",
      handle: "@pixelpoet",
      avatar: "/placeholder.svg",
      verified: true,
    },
    timestamp: "6h",
    content: {
      text: "Working on something special... Can you guess what it is? 👀\n\nHint: It involves dragons and lots of sparkles ✨🐉\n\n#WIP #DigitalArt #Mystery #ComingSoon",
      media: [
        {
          type: "image",
          url: "/placeholder.svg?height=400&width=600",
          alt: "Work in progress teaser",
        },
      ],
    },
    engagement: {
      likes: 234,
      comments: 56,
      shares: 12,
      bookmarks: 34,
    },
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: "4",
    user: {
      name: "MusicMaker",
      handle: "@musicmaker",
      avatar: "/placeholder.svg",
      verified: false,
    },
    timestamp: "8h",
    content: {
      text: "Late night studio session vibes 🎵🌙 Working on some chill beats for you all. Should I drop a preview? #music #latenight #beats #chillvibes",
      media: [
        {
          type: "image",
          url: "/placeholder.svg?height=300&width=500",
          alt: "Studio setup at night",
        },
      ],
    },
    engagement: {
      likes: 445,
      comments: 78,
      shares: 23,
      bookmarks: 67,
    },
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "5",
    user: {
      name: "PhotoLens",
      handle: "@photolens",
      avatar: "/placeholder.svg",
      verified: false,
    },
    timestamp: "12h",
    content: {
      text: "Golden hour magic in the city 📸✨ Sometimes the best shots happen when you least expect them. Always keep your camera ready! #photography #goldenhour #streetphotography #citylife",
      media: [
        {
          type: "image",
          url: "/placeholder.svg?height=400&width=600",
          alt: "Golden hour city photography",
        },
      ],
    },
    engagement: {
      likes: 789,
      comments: 45,
      shares: 67,
      bookmarks: 123,
    },
    isLiked: true,
    isBookmarked: true,
  },
]

export function SocialFeed() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Posts</h2>
        <Button variant="outline" size="sm" className="gap-2 rounded-full">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="space-y-6">
        {socialPosts.map((post) => (
          <SocialPost key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center py-8">
        <Button variant="outline" className="rounded-full">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
