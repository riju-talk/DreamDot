export interface Post {
  _id: string
  userId: string
  content: string
  media?: Array<{
    type?: string
    url?: string
    alt?: string
  }>
  // In DB it's currently a boolean flag
  visibility: boolean
  createdAt: string
  likes?: string[]
  comments?: {
    userId: string
    text: string
    timestamp: string
  }[]
}