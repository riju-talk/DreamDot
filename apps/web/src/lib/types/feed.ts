export interface User {
  id: string
  name: string
  avatar_url: string
  is_verified: boolean
}

export interface Post {
  _id: string
  content: string
  mediaUrl?: string
  mediaType?: string
  visibility: boolean
  createdAt: Date
  creatorId: string
}

export interface Item {
  _id: string
  title: string
  description: string
  fileUrl: string
  fileType: string
  price: number | null
  originalPrice?: number | null
  category?: string | null
  rating?: number | null
  students?: number | null
  tracks?: string[]
  courses?: string[]
  hours?: number | null
  discount?: number | null
  visibility: boolean
  createdAt: Date
  creatorId: string
}

export interface FeedItem {
  id: string
  type: 'post' | 'marketplace'
  created_at: Date
  timestamp: string
  user: {
    id: string
    name: string
    handle: string
    avatar: string
    verified: boolean
  }
  content: {
    text: string
    media: Array<{
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
