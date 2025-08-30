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
  price: number
  originalPrice?: number
  category?: string
  rating?: number
  students?: number
  tracks?: string[]
  courses?: string[]
  hours?: number
  discount?: number
  visibility: boolean
  createdAt: Date
  creatorId: string
}

export interface FeedItem {
  id: string
  type: 'post' | 'marketplace'
  created_at: Date
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
      type: string
      url: string
      alt: string
    }>
    product?: {
      title: string
      price: number
      originalPrice?: number
      category?: string
      rating?: number
      students?: number
      tracks?: string[]
      courses?: string[]
      hours?: number
      discount?: number
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
