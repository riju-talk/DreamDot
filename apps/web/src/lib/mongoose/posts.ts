import mongoose, { Collection } from 'mongoose'
import { connectToDatabase } from "./connection"
import { Post } from "./types/Post"
import { prismaSocial } from "../db"

const { Schema } = mongoose

// Define the schema
const PostSchema = new Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  media: { type: Array },
  visibility: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
})

// Create model if it doesn't exist
export const PostModel = mongoose.models.Post || mongoose.model("Post", PostSchema)

// TypeScript interface for fetch options
interface FetchPostsOptions {
  userId?: string
  page?: number
  limit?: number
}

// Main fetch function
export async function fetchPosts(options: FetchPostsOptions = {}): Promise<{
  posts: Post[]
  pagination: {
    total: number
    page: number
    limit: number
    hasMore: boolean
  }
}> {
  try {
    const { userId, page = 1, limit = 10 } = options
    const skip = (page - 1) * limit

    const db = (await connectToDatabase()).connection.db
    const postsCollection = db.collection("posts") as Collection<Post>

    const query: Record<string, any> = {}
    if (userId) query.userId = userId

    // Step 1: Fetch post content from MongoDB
    const mongoPosts = await postsCollection
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray()

    const totalCount = await postsCollection.countDocuments(query)
    const postIds = mongoPosts.map((post) => post._id.toString())

    if (postIds.length === 0) {
      return {
        posts: [],
        pagination: {
          total: totalCount,
          page,
          limit,
          hasMore: false,
        },
      }
    }

    // Step 2: Enrich with metadata and analytics from PostgreSQL
    const sqlPosts = await prismaSocial.posts_metadata.findMany({
      where: { id: { in: postIds } },
      include: {
        posts_analytics: true,
        users: {
          include: { user_profile: true },
        },
      },
    })

    // Step 3: Map PostgreSQL post data by ID
    const postMetaMap = new Map(
      sqlPosts.map((post) => [
        post.id,
        {
          visibility: post.visibility,
          created_at: post.created_at,
          analytics: post.posts_analytics ?? {
            likes_count: 0,
            comments_count: 0,
            views_count: 0,
            shares_count: 0,
          },
          user: {
            id: post.users.id,
            username: post.users.user_profile?.username ?? "user",
            avatar_url: post.users.user_profile?.avatar_url ?? "/placeholder.svg",
          },
        },
      ])
    )

    // Step 4: Merge MongoDB content with PostgreSQL metadata
    const posts = mongoPosts.map((post) => {
      const postId = post._id.toString()
      const meta = postMetaMap.get(postId)

      return {
        _id: postId,
        content: post.content ?? "",
        media: post.media ?? [],
        created_at: meta?.created_at ?? post.createdAt,
        visibility: meta?.visibility ?? true,
        analytics: meta?.analytics ?? null,
        user: meta?.user ?? null,
      }
    })

    return {
      posts,
      pagination: {
        total: totalCount,
        page,
        limit,
        hasMore: skip + posts.length < totalCount,
      },
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
