import { fetchPosts } from "../mongoose/posts"
import { fetchItems } from "../mongoose/items"

export async function fetchUnifiedFeed({ page = 1, limit = 10 }) {
  const [postRes, itemRes] = await Promise.all([
    fetchPosts({ page, limit }),
    fetchItems({ page, limit }),
  ])

  const postFeed = postRes.posts.map((post) => ({
    id: post._id,
    type: "post",
    created_at: new Date(post.created_at),
    user: {
      name: post.user?.username || "Anonymous",
      handle: `@${post.user?.username || "user"}`,
      avatar: post.user?.avatar_url || "/placeholder.svg",
      verified: true,
    },
    content: {
      text: post.content || "",
      media: post.media?.map((m: any) => ({
        type: m.type || "image",
        url: m.url,
        alt: m.alt || "Image",
      })) ?? [],
    },
    engagement: {
      likes: post.analytics?.likes_count ?? 0,
      comments: post.analytics?.comments_count ?? 0,
      shares: post.analytics?.shares_count ?? 0,
      bookmarks: 0,
    },
    isLiked: false,
    isBookmarked: false,
  }))

  const itemFeed = itemRes.items.map((item) => ({
    id: item._id,
    type: "marketplace",
    created_at: new Date(item.created_at),
    user: {
      name: item.user?.username || "Anonymous",
      handle: `@${item.user?.username || "user"}`,
      avatar: item.user?.avatar_url || "/placeholder.svg",
      verified: false,
    },
    content: {
      text: item.description || "",
      media: item.media?.map((m: any) => ({
        type: m.type || "image",
        url: m.url,
        alt: m.alt || "Product Image",
      })) ?? [],
      product: {
        title: item.title,
        price: item.price,
        originalPrice: item.originalPrice,
        category: item.category,
        rating: item.rating,
        students: item.students,
        tracks: item.tracks,
        courses: item.courses,
        hours: item.hours,
        discount: item.discount,
      },
    },
    engagement: {
      likes: item.analytics?.likes_count ?? 0,
      comments: item.analytics?.comments_count ?? 0,
      shares: item.analytics?.shares_count ?? 0,
      bookmarks: 0,
    },
    isLiked: false,
    isBookmarked: false,
  }))

  const feed = [...postFeed, ...itemFeed].sort(
    (a, b) => b.created_at.getTime() - a.created_at.getTime()
  )

  return {
    feed,
    pagination: {
      page,
      limit,
      hasMore: postRes.pagination.hasMore || itemRes.pagination.hasMore,
    },
  }
}
