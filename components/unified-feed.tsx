"use client"

import { FeedPost } from "./feed-post"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const feedItems = [
  {
    id: "1",
    type: "post",
    user: {
      name: "ArtisticVision",
      handle: "@artisticvision",
      avatar: "/placeholder.svg",
      verified: true,
    },
    timestamp: "2h",
    content: {
      text: "Just finished this cyberpunk cityscape! Spent 12 hours on the neon reflections alone 🌃✨",
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
    type: "marketplace",
    user: {
      name: "StreetLens",
      handle: "@streetlens",
      avatar: "/placeholder.svg",
      verified: false,
    },
    timestamp: "4h",
    content: {
      text: "New photography course is live! Learn urban street photography techniques that took me years to master 📸",
      media: [
        {
          type: "image",
          url: "/placeholder.svg?height=400&width=600",
          alt: "Urban photography course preview",
        },
      ],
      product: {
        title: "Urban Photography Masterclass",
        price: "$79",
        originalPrice: "$99",
        category: "Course",
        rating: 4.9,
        students: 1240,
      },
    },
    engagement: {
      likes: 876,
      comments: 124,
      shares: 67,
      bookmarks: 234,
    },
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: "3",
    type: "post",
    user: {
      name: "StoryWeaver",
      handle: "@storyweaver",
      avatar: "/placeholder.svg",
      verified: true,
    },
    timestamp: "6h",
    content: {
      text: "Chapter 3 of The Midnight Chronicles is here! Our hero finally discovers the truth about the ancient prophecy... 📚✨\n\nFree to read for all followers! Premium subscribers get early access to Chapter 4 next week.",
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
    id: "4",
    type: "marketplace",
    user: {
      name: "SonicArtist",
      handle: "@sonicartist",
      avatar: "/placeholder.svg",
      verified: false,
    },
    timestamp: "8h",
    content: {
      text: "New ambient soundscape pack is ready! Perfect for studying, meditation, or just chilling 🎵 Each track tells a different story through sound.",
      media: [
        {
          type: "audio",
          url: "/placeholder.mp3",
          title: "Ambient Soundscapes Vol. 3 - Preview",
          duration: "2:34",
        },
      ],
      product: {
        title: "Ambient Soundscapes Vol. 3",
        price: "$12",
        category: "Music Pack",
        tracks: 8,
        duration: "45 min",
      },
    },
    engagement: {
      likes: 987,
      comments: 45,
      shares: 78,
      bookmarks: 167,
    },
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "5",
    type: "post",
    user: {
      name: "PixelPoet",
      handle: "@pixelpoet",
      avatar: "/placeholder.svg",
      verified: true,
    },
    timestamp: "12h",
    content: {
      text: "Working on something special... Can you guess what it is? 👀\n\n#WIP #DigitalArt #Mystery",
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
    id: "6",
    type: "marketplace",
    user: {
      name: "CodeCanvas",
      handle: "@codecanvas",
      avatar: "/placeholder.svg",
      verified: false,
    },
    timestamp: "1d",
    content: {
      text: "Bundle deal alert! 🚨 Get all my web development courses for 60% off. Limited time offer for the next 48 hours!",
      media: [
        {
          type: "image",
          url: "/placeholder.svg?height=300&width=500",
          alt: "Course bundle preview",
        },
      ],
      product: {
        title: "Complete Web Dev Bundle",
        price: "$49",
        originalPrice: "$120",
        category: "Course Bundle",
        courses: 5,
        hours: "24+ hours",
        discount: "60% OFF",
      },
    },
    engagement: {
      likes: 445,
      comments: 78,
      shares: 89,
      bookmarks: 123,
    },
    isLiked: false,
    isBookmarked: true,
  },
]

export function UnifiedFeed() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Dreams</h2>
        <Button variant="outline" size="sm" className="gap-2 rounded-full">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="space-y-6">
        {feedItems.map((item) => (
          <FeedPost key={item.id} post={item} />
        ))}
      </div>

      <div className="text-center py-8">
        <Button variant="outline" className="rounded-full">
          Load More Dreams
        </Button>
      </div>
    </div>
  )
}
