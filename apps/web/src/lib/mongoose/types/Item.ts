export interface Item {
    _id: string
    creatorId: string
    title: string
    description?: string
    fileUrl: string
    fileType: "image" | "video" | "audio" | "text" | "pdf" | "other"
    price: number
    currency: string
    createdAt: string
    downloads: number
    ratings: {
      userId: string
      rating: number
      review?: string
      timestamp: string
    }[]
  }
  