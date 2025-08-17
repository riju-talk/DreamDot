export interface Post {
    _id: string
    userId: string
    content: string
    mediaUrl?: string
    mediaType: "image" | "video" | "text" | "audio"
    createdAt: string
    visibility: "public" | "followers" | "private"
    likes: string[]
    comments: {
      userId: string
      text: string
      timestamp: string
    }[]
  }
  