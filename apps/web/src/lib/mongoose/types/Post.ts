export interface Post {
  _id: string
  userId: string
  content: string
  media?: Array<{
    type?: string
    url?: string
    alt?: string
  }>
  visibility: boolean
  createdAt: string
  likes?: string[] // Array of user IDs who liked the post
  comments?: Array<{
    userId: string
    text: string
    timestamp: Date
  }>
}