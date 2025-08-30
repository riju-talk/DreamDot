// @/lib/feed-logic/feed.ts
import { prismaSocial } from "@/lib/db"
import { prismaItem } from "@/lib/db"
import { prismaUser } from "@/lib/db"
import { connectToDatabase } from "../mongoose/connection"
import PostModel from "../mongoose/models/Post"
import ItemModel from "../mongoose/models/Item"
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
    return d instanceof Date ? d : new Date(d)
  } catch {
    return new Date(0)
  }
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
  const u = userById[String(post.userId)]
  const user = pickUserFromPrisma(u)
  return {
    id: String(post._id),
    type: "post" as const,
    created_at: safeDate(post.createdAt),
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
  const analyticsLikes =
    p.posts_analytics?.likes_count ??
    (p._count?.likes ? Number(p._count.likes) : 0)
  const analyticsComments =
    p.posts_analytics?.comments_count ??
    (p._count?.comments ? Number(p._count.comments) : 0)

  return {
    id: p.id,
    type: "post" as const,
    created_at: safeDate(p.created_at),
    user,
    content: {
      text: p.description ?? "",
      media: [], // posts_metadata has no media field in your Prisma schema
    },
    engagement: {
      likes: analyticsLikes || 0,
      comments: analyticsComments || 0,
      shares: 0,
      bookmarks: 0,
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
  const u = userById[String(item.userId)]
  const user = pickUserFromPrisma(u)

  return {
    id: String(item._id),
    type: "marketplace" as const,
    created_at: safeDate(item.createdAt),
    user,
    content: {
      text: item.description ?? "",
      media: item.fileUrl
        ? [
            {
              type:
                (item.fileType as "image" | "video" | "audio" | "file") ||
                "image",
              url: item.fileUrl,
              alt: item.title ?? "Media",
            },
          ]
        : [],
      product: {
        title: item.title ?? "Untitled",
        price: item.price ?? 0,
        originalPrice: item.originalPrice ?? undefined,
        category: item.category ?? undefined,
        rating: Number(item.rating ?? 0),
        students: Number(item.students ?? 0),
        tracks: Number(item.tracks ?? 0),
        courses: Number(item.courses ?? 0),
        hours: Number(item.hours ?? 0),
        discount: Number(item.discount ?? 0),
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

// Prisma Items → FeedItem (Item)
function mapPrismaItemToFeedItem(i: any): FeedItem {
  const user = pickUserFromPrisma(i.users)
  const ratings = (i.reviews ?? [])
    .map((r: { rating: number | null }) => (r.rating ? Number(r.rating) : 0))
    .filter((n: number) => n > 0)

  return {
    id: i.item_id,
    type: "marketplace" as const,
    created_at: safeDate(i.created_at),
    user,
    content: {
      text: i.description ?? "",
      media: [], // Prisma items schema doesn't define media here
      product: {
        title: i.title ?? "Untitled",
        price: i.price ? Number(i.price) : 0,
        originalPrice: undefined,
        category: i.category ?? undefined,
        rating: avg(ratings),
        students: 0,
        tracks: 0,
        courses: 0,
        hours: 0,
        discount: 0,
      },
    },
    engagement: {
      likes: 0,
      comments: i._count?.reviews ? Number(i._count.reviews) : 0,
      shares: 0,
      bookmarks: i._count?.favorites ? Number(i._count.favorites) : 0,
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

    // Mongo queries (guarded)
    const mongoPostPromise = wantPosts
      ? PostModel.find({ visibility: true })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(take)
          .lean<Post[]>()
      : Promise.resolve<Post[]>([])

    const mongoItemPromise = wantItems
      ? ItemModel.find({ visibility: true })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(take)
          .lean<Item[]>()
      : Promise.resolve<Item[]>([])

    // Prisma Social Posts (guarded)
    const pgSocialPromise = wantPosts
      ? prismaSocial.posts_metadata.findMany({
          where: { visibility: true },
          orderBy: { created_at: "desc" },
          skip,
          take,
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
            posts_analytics: true,
            _count: { select: { likes: true, comments: true } },
          },
        })
      : Promise.resolve<any[]>([])

    // Prisma Items (guarded)
    const pgItemsPromise = wantItems
      ? prismaItem.items.findMany({
          where: { availability: true },
          orderBy: { created_at: "desc" },
          skip,
          take,
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
            reviews: { select: { rating: true } },
            _count: { select: { favorites: true, reviews: true, transactions: true } },
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
    if (wantPosts) mongoPosts.forEach((p) => p?.userId && mongoUserIds.add(String(p.userId)))
    if (wantItems) mongoItems.forEach((i) => i?.userId && mongoUserIds.add(String(i.userId)))

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

    // 5) Merge-sort by created_at DESC and slice to page size
    //    We fetched per-source `limit` items, so mixed feeds can exceed `limit`.
    //    We sort then take the top `limit` for consistent paging surface.
    const sorted = mapped.sort(
      (a, b) => safeDate(b.created_at).getTime() - safeDate(a.created_at).getTime()
    )
    const pageSlice = sorted.slice(0, limit)

    // 6) Pagination totals (approximate but consistent)
    const [mongoPostCount, mongoItemCount, pgSocialCount, pgItemCount] = await Promise.all([
      wantPosts ? PostModel.countDocuments({ visibility: true }) : Promise.resolve(0),
      wantItems ? ItemModel.countDocuments({ visibility: true }) : Promise.resolve(0),
      wantPosts ? prismaSocial.posts_metadata.count({ where: { visibility: true } }) : 0,
      wantItems ? prismaItem.items.count({ where: { availability: true } }) : 0,
    ])

    const total =
      (wantPosts ? mongoPostCount + pgSocialCount : 0) +
      (wantItems ? mongoItemCount + pgItemCount : 0)

    // Heuristic hasMore: if we sliced anything off OR the total exceeds returned count for current page
    const expectedSoFar = page * limit
    const hasMore = total > expectedSoFar

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
    return {
      feed: [],
      pagination: { total: 0, page, limit, hasMore: false },
    }
  }
}

/* --------------------------------------------------------------
   OPTIONAL helpers if you want dedicated feeds elsewhere:
   (Your current UI calls fetchUnifiedFeed for the mixed feed.)
----------------------------------------------------------------- */

export async function fetchPostsFeed(opts: Omit<FetchOptions, "scope">) {
  return fetchUnifiedFeed({ ...opts, scope: "posts" })
}

export async function fetchItemsFeed(opts: Omit<FetchOptions, "scope">) {
  return fetchUnifiedFeed({ ...opts, scope: "items" })
}
