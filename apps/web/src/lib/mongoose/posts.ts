import mongoose, { Collection } from 'mongoose'
import { connectToDatabase } from "./connection"
import { Post } from "./types/Post"
import { prismaSocial, prismaUser } from "../db" 

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

interface FetchPostsOptions {
  userId?: string
  page?: number
  limit?: number
}

export async function fetchPosts(options: FetchPostsOptions = {}) {
  try {
    const { userId, page = 1, limit = 10 } = options
    const skip = (page - 1) * limit

    // Step 1: First, get the PostgreSQL posts with pagination
    const sqlPosts = await prismaSocial.posts_metadata.findMany({
      skip,
      take: limit,
      orderBy: { created_at: 'desc' },
      include: {
        posts_analytics: true,
        users: {
          select: {
            id: true,
            is_verified: true,
            user_profile: {
              select: {
                display_name: true,
                username: true,
                avatar_url: true,
              },
            },
          },
        },
      },
      where: userId ? { user_id: userId } : {},
    })

    const totalCount = await prismaSocial.posts_metadata.count({
      where: userId ? { user_id: userId } : {},
    })

    if (sqlPosts.length === 0) {
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

    // Step 2: Connect to MongoDB and get posts collection
    let postsCollection: Collection<Post> | null = null;
    let allMongoPosts: any[] = [];
    
    try {
      const connection = await connectToDatabase();
      if (!connection) {
        throw new Error('Failed to connect to MongoDB');
      }
      
      // Ensure connection is established
      await connection.connection.asPromise();
      const db = connection.connection.db;
      
      // List all collections and check if 'posts' exists
      interface CollectionInfo {
        name: string;
        type?: string;
        options?: Record<string, unknown>;
        info?: {
          readOnly?: boolean;
          uuid?: any;
        };
        idIndex?: {
          v: number;
          key: Record<string, number>;
          name: string;
        };
      }
      
      const collections: CollectionInfo[] = await db.listCollections().toArray();
      //console.log('Available collections:', collections.map((c: CollectionInfo) => c.name));
            
    
      
      postsCollection = db.collection("posts") as Collection<Post>;
      
      // Get only the posts from users whose posts we have in PostgreSQL
      const userIds = [...new Set(sqlPosts.map(post => post.user_id))];
      //console.log('Fetching MongoDB posts for user IDs:', userIds);
      
      allMongoPosts = await postsCollection.find({
        userId: { $in: userIds.map(id => String(id)) }
      }).sort({ createdAt: -1 }).toArray();
      
      //console.log(`Found ${allMongoPosts.length} matching posts in MongoDB`);
      
    } catch (error) {
      console.error('Error accessing MongoDB:', error);
      return {
        posts: [],
        pagination: {
          total: 0,
          page,
          limit,
          hasMore: false,
        },
      };
    }
    
    // Step 3: Process posts
    //console.log('Processing posts...');
    
    // If no posts in MongoDB, return empty result
    if (allMongoPosts.length === 0) {
      console.warn('No posts found in MongoDB');
      return {
        posts: [],
        pagination: {
          total: 0,
          page,
          limit,
          hasMore: false,
        },
      };
    }
    
    // Create a map of user IDs to their MongoDB posts, sorted by creation date (newest first)
    const userPostsMap = new Map<string, any[]>();
    
    // Sort all MongoDB posts by createdAt in descending order (newest first)
    const sortedMongoPosts = [...allMongoPosts].sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );

    // Group posts by userId
    sortedMongoPosts.forEach((post: any) => {
      if (post.userId) {
        const userId = String(post.userId);
        if (!userPostsMap.has(userId)) {
          userPostsMap.set(userId, []);
        }
        userPostsMap.get(userId)?.push(post);
      }
    });
    
    //console.log(`Found posts for ${userPostsMap.size} unique users`);
    //console.log('User posts map sample:', Array.from(userPostsMap.entries()).slice(0, 3));

    // Step 4: Combine data from PostgreSQL and MongoDB
    const posts = sqlPosts.map((sqlPost: any) => {
      const userId = String(sqlPost.user_id);
      const userPosts = userPostsMap.get(userId) || [];
      
      // Find the MongoDB post that best matches the PostgreSQL post
      // For now, we'll take the most recent post for this user
      const mongoPost = userPosts[0];
      return {
        id: sqlPost.id,
        content: mongoPost?.content || '',
        media: mongoPost?.media || [],
        visibility: sqlPost.visibility,
        created_at: sqlPost.created_at,
        analytics: sqlPost.posts_analytics ?? {
          likes_count: 0,
          comments_count: 0,
          views_count: 0,
          shares_count: 0,
        },
        user: {
          id: sqlPost.users.id,
          username: sqlPost.users.user_profile?.username || 'user',
          display_name: sqlPost.users.user_profile?.display_name || null,
          avatar_url: sqlPost.users.user_profile?.avatar_url || '/placeholder.svg',
          verified: sqlPost.users.is_verified || false,
        },
        // Include any additional fields from MongoDB if needed
        ...(mongoPost ? {
          // Add any additional fields from MongoDB here
          mongoId: mongoPost._id.toString(),
          // ...mongoPost
        } : {})
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
    console.error("Error fetching posts:", error)
    throw error
  }
}
