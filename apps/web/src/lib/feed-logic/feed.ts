// @/lib/feed-logic/feed.ts
import { prismaSocial } from "@/lib/db"
import { prismaItem } from "@/lib/db"
import { prismaUser } from "@/lib/db"
import { connectToDatabase } from "../mongoose/connection"
import { PostModel } from "../mongoose/posts"
import { ItemModel } from "../mongoose/items"
import type { Post, Item, FeedItem } from "../types/feed"

type FeedScope = "mixed" | "posts" | "items"

interface FetchOptions {
  page?: number
  limit?: number
  userId?: string
  scope?: FeedScope // supports the 3 feeds: "mixed" (default), "posts", "items"
}

/** ---------- Utilities ---------- */

function safeDate(d?: Date | string | null): Date {
  if (!d) return new Date(0)
  try {
    if (d instanceof Date) return d
    const date = new Date(d)
    return isNaN(date.getTime()) ? new Date(0) : date
  } catch {
    return new Date(0)
  }
}

function formatTimestamp(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return "Just now"
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`

  return date.toLocaleDateString()
}

function pickUserFromPrisma(u?: {
  id: string
  is_verified: boolean | null
  user_profile?: {
    username: string | null
    display_name: string | null
    avatar_url: string | null
  } | null
}) {
  return {
    id: u?.id ?? "unknown",
    name: u?.user_profile?.display_name ?? "Unknown User",
    handle: u?.user_profile?.username ?? "unknown",
    avatar: u?.user_profile?.avatar_url ?? "/default-avatar.png",
    verified: Boolean(u?.is_verified),
  }
}

function avg(nums: number[]): number {
  if (!nums.length) return 0
  return nums.reduce((a, b) => a + b, 0) / nums.length
}

/** ---------- Mappers to FeedItem ---------- */

// Mongo → FeedItem (Post)
function mapMongoPostToFeedItem(
  post: Post,
  userById: Record<
    string,
    {
      id: string
      is_verified: boolean | null
      user_profile?: {
        username: string | null
        display_name: string | null
        avatar_url: string | null
      } | null
    }
  >
): FeedItem {
  const u = userById[String(post.creatorId)]
  const user = pickUserFromPrisma(u)
  return {
    id: String(post._id),
    type: "post" as const,
    created_at: safeDate(post.createdAt),
    timestamp: formatTimestamp(safeDate(post.createdAt)),
    user,
    content: {
      text: post.content ?? "",
      media: post.mediaUrl
        ? [
            {
              type: (post.mediaType as "image" | "video" | "audio") || "image",
              url: post.mediaUrl,
              alt: "Post media",
            },
          ]
        : [],
    },
    engagement: {
      likes: Number(post.likes ?? 0),
      comments: Number(post.comments ?? 0),
      shares: Number(post.shares ?? 0),
      bookmarks: Number(post.bookmarks ?? 0),
    },
    isLiked: false,
    isBookmarked: false,
  }
}

// Prisma Social → FeedItem (Post)
function mapPrismaSocialPostToFeedItem(p: any): FeedItem {
  const user = pickUserFromPrisma(p.users)
  
  // Use _count for analytics since posts_analytics might not exist
  const analyticsLikes = p._count?.likes ? Number(p._count.likes) : 0
  const analyticsComments = p._count?.comments ? Number(p._count.comments) : 0

  return {
    id: p.id,
    type: "post" as const,
    created_at: safeDate(p.created_at),
    timestamp: formatTimestamp(safeDate(p.created_at)),
    user,
    content: {
      text: p.description ?? "",
      media: [], // Prisma schema doesn't have media fields for posts_metadata
    },
    engagement: {
      likes: 0, // Not available without _count
      comments: 0, // Not available without _count
      shares: 0, // Not available in schema
      bookmarks: 0, // Not available in schema
    },
    isLiked: false,
    isBookmarked: false,
  }
}

// Prisma Items → FeedItem (Item) - FIXED
function mapPrismaItemToFeedItem(i: any): FeedItem {
  const user = pickUserFromPrisma(i.users)
  
  // Calculate average rating safely
  const ratings = (i.reviews ?? [])
    .map((r: { rating: number | null }) => (r.rating ? Number(r.rating) : 0))
    .filter((n: number) => n > 0)

  return {
    id: i.item_id,
    type: "marketplace" as const,
    created_at: safeDate(i.created_at),
    timestamp: formatTimestamp(safeDate(i.created_at)),
    user,
    content: {
      text: i.description ?? "",
      media: [], // Prisma schema doesn't have media fields for items
      product: {
        title: i.title ?? "Untitled",
        price: String(i.price ? Number(i.price) : 0),
        originalPrice: undefined, // Not available in schema
        category: i.category ?? "General",
        rating: 0, // Not available without reviews
        students: 0, // Not available in schema
        hours: 0, // Not available in schema
        discount: 0, // Not available in schema
      },
    },
    engagement: {
      likes: 0, // Not available in schema
      comments: 0, // Not available without _count
      shares: 0, // Not available in schema
      bookmarks: 0, // Not available without _count
    },
    isLiked: false,
    isBookmarked: false,
  }
}

// Mongo → FeedItem (Item)
function mapMongoItemToFeedItem(
  item: Item,
  userById: Record<
    string,
    {
      id: string
      is_verified: boolean | null
      user_profile?: {
        username: string | null
        display_name: string | null
        avatar_url: string | null
      } | null
    }
  >
): FeedItem {
  const u = userById[String(item.creatorId)]
  const user = pickUserFromPrisma(u)

  return {
    id: String(item._id),
    type: "marketplace" as const,
    created_at: safeDate(item.createdAt),
    timestamp: formatTimestamp(safeDate(item.createdAt)),
    user,
    content: {
      text: item.description ?? "",
      media: item.fileUrl && ["image", "video", "audio"].includes(item.fileType)
        ? [
            {
              type: (item.fileType as "image" | "video" | "audio"),
              url: item.fileUrl,
              alt: item.title ?? "Media",
            },
          ]
        : [],
      product: {
        title: item.title ?? "Untitled",
        price: String(item.price ?? 0),
        originalPrice: item.originalPrice ? String(item.originalPrice) : undefined,
        category: item.category ?? "General",
        rating: Number(item.rating ?? 0),
        students: Number(item.students ?? 0),
        tracks: Number(item.tracks?.length ?? 0),
        duration: undefined,
        courses: Number(item.courses?.length ?? 0),
        hours: item.hours ? String(item.hours) : undefined,
        discount: item.discount ? String(item.discount) : undefined,
      },
    },
    engagement: {
      likes: Number(item.likes ?? 0),
      comments: Number(item.comments ?? 0),
      shares: Number(item.shares ?? 0),
      bookmarks: Number(item.bookmarks ?? 0),
    },
    isLiked: false,
    isBookmarked: false,
  }
}


/** ---------- Main fetcher ---------- */

export async function fetchUnifiedFeed({
  page = 1,
  limit = 10,
  userId,
  scope = "mixed",
}: FetchOptions): Promise<{
  feed: FeedItem[]
  pagination: { total: number; page: number; limit: number; hasMore: boolean }
}> {
  try {
    // 1) Connect to Mongo once (idempotent)
    await connectToDatabase()

    const skip = (page - 1) * limit
    const take = limit

    // 2) Fetch raw data per scope
    const wantPosts = scope === "mixed" || scope === "posts"
    const wantItems = scope === "mixed" || scope === "items"

    // Calculate how many items to take from each source for mixed feed
    const getSourceLimit = (sourceCount: number) => {
      if (scope !== "mixed") return take
      // For mixed feed, divide limit among available sources
      return Math.ceil(take / sourceCount)
    }

    const sourceCount = [wantPosts, wantItems].filter(Boolean).length
    const sourceLimit = getSourceLimit(sourceCount)

    // Mongo queries (guarded)
    const mongoPostPromise = wantPosts
      ? PostModel.find({ visibility: true })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(sourceLimit)
          .lean<Post[]>()
      : Promise.resolve<Post[]>([])

    const mongoItemPromise = wantItems
      ? ItemModel.find({ visibility: true })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(sourceLimit)
          .lean<Item[]>()
      : Promise.resolve<Item[]>([])

    // Prisma Social Posts (guarded)
    const pgSocialPromise = wantPosts
      ? prismaSocial.posts_metadata.findMany({
          where: { visibility: true },
          orderBy: { created_at: "desc" },
          skip,
          take: sourceLimit,
          include: {
            // NOTE: users model doesn't have username/avatar directly; select via user_profile
            users: {
              select: {
                id: true,
                is_verified: true,
                user_profile: {
                  select: { username: true, display_name: true, avatar_url: true },
                },
              },
            },
          },
        })
      : Promise.resolve<any[]>([])

    // Prisma Items (guarded)
    const pgItemsPromise = wantItems
      ? prismaItem.items.findMany({
          where: { availability: true },
          orderBy: { created_at: "desc" },
          skip,
          take: sourceLimit,
          include: {
            users: {
              select: {
                id: true,
                is_verified: true,
                user_profile: {
                  select: { username: true, display_name: true, avatar_url: true },
                },
              },
            },
          },
        })
      : Promise.resolve<any[]>([])

    const [mongoPosts, mongoItems, pgSocialPosts, pgItems] = await Promise.all([
      mongoPostPromise,
      mongoItemPromise,
      pgSocialPromise,
      pgItemsPromise,
    ])

    // 3) Batch-load user profiles for Mongo docs from the User DB (Prisma)
    const mongoUserIds = new Set<string>()
    if (wantPosts) mongoPosts.forEach((p) => p?.creatorId && mongoUserIds.add(String(p.creatorId)))
    if (wantItems) mongoItems.forEach((i) => i?.creatorId && mongoUserIds.add(String(i.creatorId)))

    let prismaUsersById: Record<
      string,
      {
        id: string
        is_verified: boolean | null
        user_profile?: {
          username: string | null
          display_name: string | null
          avatar_url: string | null
        } | null
      }
    > = {}

    if (mongoUserIds.size) {
      const prismaUsers = await prismaUser.users.findMany({
        where: { id: { in: Array.from(mongoUserIds) } },
        select: {
          id: true,
          is_verified: true,
          user_profile: {
            select: { username: true, display_name: true, avatar_url: true },
          },
        },
      })
      prismaUsersById = Object.fromEntries(prismaUsers.map((u) => [u.id, u]))
    }

    // 4) Map to unified FeedItem[]
    const mapped: FeedItem[] = []

    if (wantPosts) {
      // Mongo posts
      for (const p of mongoPosts) {
        mapped.push(mapMongoPostToFeedItem(p, prismaUsersById))
      }
      // Prisma social posts
      for (const sp of pgSocialPosts) {
        mapped.push(mapPrismaSocialPostToFeedItem(sp))
      }
    }

    if (wantItems) {
      // Mongo items
      for (const i of mongoItems) {
        mapped.push(mapMongoItemToFeedItem(i, prismaUsersById))
      }
      // Prisma items
      for (const pi of pgItems) {
        mapped.push(mapPrismaItemToFeedItem(pi))
      }
    }

    // 5) Sort by created_at DESC and take exactly `limit` items
    const sorted = mapped.sort(
      (a, b) => safeDate(b.created_at).getTime() - safeDate(a.created_at).getTime()
    )
    const pageSlice = sorted.slice(0, limit)

    // 6) Get accurate counts for pagination
    const counts = await Promise.all([
      wantPosts ? PostModel.countDocuments({ visibility: true }) : 0,
      wantItems ? ItemModel.countDocuments({ visibility: true }) : 0,
      wantPosts ? prismaSocial.posts_metadata.count({ where: { visibility: true } }) : 0,
      wantItems ? prismaItem.items.count({ where: { availability: true } }) : 0,
    ])

    const total = counts.reduce((sum, count) => sum + count, 0)
    
    // Calculate hasMore based on whether we got fewer items than requested
    // OR if there are more items beyond what we've fetched
    const hasMore = pageSlice.length === limit || total > page * limit

    return {
      feed: pageSlice,
      pagination: {
        total,
        page,
        limit,
        hasMore,
      },
    }
  } catch (error) {
    console.error("[fetchUnifiedFeed] error:", error)
    // Re-throw the error so calling components can handle it properly
    throw error
  }
}

/* --------------------------------------------------------------
   OPTIONAL helpers if you want dedicated feeds elsewhere:
   (Your current UI calls fetchUnifiedFeed for the mixed feed.)
----------------------------------------------------------------- */

export async function fetchPostsFeed(opts: Omit<FetchOptions, "scope">) {
  try {
    return await fetchUnifiedFeed({ ...opts, scope: "posts" })
  } catch (error) {
    console.error("[fetchPostsFeed] error:", error)
    throw error
  }
}

export async function fetchItemsFeed(opts: Omit<FetchOptions, "scope">) {
  try {
    return await fetchUnifiedFeed({ ...opts, scope: "items" })
  } catch (error) {
    console.error("[fetchItemsFeed] error:", error)
    throw error
  }
}
