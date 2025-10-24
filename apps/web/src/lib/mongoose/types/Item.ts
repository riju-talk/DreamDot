export interface Item {
  _id: string
  creatorId: string
  title: string
  description?: string
  content?: string // For writings
  fileUrl?: string // Primary file URL
  fileUrls?: string[] // For groups of files (e.g., art collections)
  fileType: "image" | "video" | "audio" | "text" | "pdf" | "other"
  itemType: "art" | "music" | "video" | "writing" | "group" | "comic" | "other"
  category?: string // Specific categories like "illustration", "blog", etc.
  tags?: string[]
  dimensions?: {
    width?: number
    height?: number
  } // For art
  fileSize?: number
  price: number
  currency: string
  monetizationType: "free" | "one-time" | "subscription"
  thumbnailUrl?: string
  seoDescription?: string
  readingTime?: number // For writings
  wordCount?: number // For writings
  views: number
  downloads: number
  likes: number
  comments?: {
    userId: string
    username?: string
    comment: string
    timestamp: string
  }[]
  ratings?: {
    userId: string
    rating: number
    review?: string
    timestamp: string
  }[]
  createdAt: string
  updatedAt: string
  isPublished: boolean
}