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
}