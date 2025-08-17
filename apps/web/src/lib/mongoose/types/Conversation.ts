export interface Conversation {
    _id: string
    name?: string
    type: "dm" | "group"
    isPrivate: boolean
    participants: {
      userId: string // UUID from Postgres
      role: "admin" | "member"
    }[]
    avatar?: string
    createdAt: string
  }
  