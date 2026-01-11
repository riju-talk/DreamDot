import mongoose, { Collection } from "mongoose";
import { connectToDatabase } from "./connection";
import { prismaSocial } from "../db";
import { Post } from "./types/Post";

// ------------------------------------
// Define Mongoose Schema
// ------------------------------------
const { Schema } = mongoose;

const CommentSchema = new Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const MediaSchema = new Schema({
  type: { type: String },
  url: { type: String },
  alt: { type: String },
});

const PostSchema = new Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  media: [MediaSchema],
  visibility: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: String }],
  comments: [CommentSchema],
});

// Prevent OverwriteModelError in Next.js dev mode
export const PostModel =
  mongoose.models?.Post || mongoose.model("Post", PostSchema);

// ------------------------------------
// Data Fetching Logic
// ------------------------------------

interface FetchPostsOptions {
  userId?: string;
  page?: number;
  limit?: number;
}

export async function fetchPosts(options: FetchPostsOptions = {}) {
  try {
    const { userId, page = 1, limit = 10 } = options;
    const skip = (page - 1) * limit;

  // FetchPosts called with options

    // Step 1: Fetch PostgreSQL metadata
    const sqlTimerLabel = `⏱ SQL Fetch Time (${Date.now()})`;
    console.time(sqlTimerLabel);
    const sqlPosts = await prismaSocial.posts_metadata.findMany({
      skip,
      take: limit,
      orderBy: { created_at: "desc" },
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
    });
    console.timeEnd(sqlTimerLabel);

    const totalCount = await prismaSocial.posts_metadata.count({
      where: userId ? { user_id: userId } : {},
    });
    if (sqlPosts.length === 0) {
      return {
        posts: [],
        pagination: { total: totalCount, page, limit, hasMore: false },
      };
    }

    // Step 2: Fetch MongoDB posts
    const mongoConnectLabel = `⏱ Mongo Connection Time (${Date.now()})`;
    console.time(mongoConnectLabel);
    const connection = await connectToDatabase();
    console.timeEnd(mongoConnectLabel);

    if (!connection) throw new Error("Failed to connect to MongoDB");

    const db = connection.connection.db;
    const postsCollection = db?.collection("posts") as Collection<Post>;

    const userIds = [...new Set(sqlPosts.map((p) => String(p.user_id)))];

    const mongoFetchLabel = `⏱ Mongo Fetch Time (${Date.now()})`;
    console.time(mongoFetchLabel);
    const allMongoPosts = await postsCollection
      .find({ userId: { $in: userIds } })
      .sort({ createdAt: -1 })
      .toArray();
    console.timeEnd(mongoFetchLabel);


    // Step 3: Map MongoDB posts by userId AND create a timestamp-based matcher
    const userPostsMap = new Map<string, Post[]>();
    for (const post of allMongoPosts) {
      if (!post.userId) continue;
      const id = String(post.userId);
      if (!userPostsMap.has(id)) userPostsMap.set(id, []);
      userPostsMap.get(id)!.push(post);
    }

    // Step 4: Merge SQL and Mongo data by matching timestamps
    // Since there's no explicit link between SQL and MongoDB posts,
    // we match them by userId and timestamp (within a 5-second window)
    const posts = sqlPosts.map((sqlPost) => {
      const uid = String(sqlPost.user_id);
      const userMongoPosts = userPostsMap.get(uid) || [];
      
      // Find MongoDB post with closest matching timestamp
      let mongoPost: Post | undefined;
      if (userMongoPosts.length > 0) {
        const sqlTime = new Date(sqlPost.created_at).getTime();
        let minDiff = Infinity;
        
        for (const mp of userMongoPosts) {
          const mongoTime = mp.createdAt ? new Date(mp.createdAt).getTime() : 0;
          const diff = Math.abs(sqlTime - mongoTime);
          
          // Match if within 5 seconds (posts created together should be very close)
          if (diff < 5000 && diff < minDiff) {
            minDiff = diff;
            mongoPost = mp;
          }
        }
      }

      return {
        id: sqlPost.id,
        userId: uid,
        content: mongoPost?.content ?? "",
        media: mongoPost?.media ?? [],
        visibility: mongoPost?.visibility ?? true,
        createdAt: mongoPost?.createdAt ?? sqlPost.created_at,
        likes: mongoPost?.likes ?? [],
        comments: mongoPost?.comments ?? [],
        analytics: sqlPost.posts_analytics ?? {
          likes_count: 0,
          comments_count: 0,
          views_count: 0,
          shares_count: 0,
        },
        user: {
          id: sqlPost.users.id,
          username: sqlPost.users.user_profile?.username || "user",
          display_name: sqlPost.users.user_profile?.display_name || null,
          avatar_url:
            sqlPost.users.user_profile?.avatar_url || "/placeholder.svg",
          verified: sqlPost.users.is_verified || false,
        },
        mongoId: mongoPost?._id?.toString(),
      };
    });

    // merged posts ready

    return {
      posts,
      pagination: {
        total: totalCount,
        page,
        limit,
        hasMore: skip + posts.length < totalCount,
      },
    };
  } catch (error) {
    console.error("🔥 Error fetching posts:", error);
    throw error;
  }
}
