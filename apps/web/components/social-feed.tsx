import { fetchPosts } from "@/lib/mongoose/posts"
import { SocialPost } from "./social-post"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export async function SocialFeed() {
  const { posts } = await fetchPosts({ page: 1, limit: 5 })

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Posts</h2>
        <Button variant="outline" size="sm" className="gap-2 rounded-full">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          console.log(post),
          <SocialPost
            key={post._id}
            post={{
              id: post._id,
              user: {
                name: post.user?.name || "Anonymous",
                handle: `@${post.user?.username || "user"}`,
                avatar: post.user?.avatar_url || "/placeholder.svg",
                verified: true, // you can toggle based on some logic if needed
              },
              timestamp: new Date(post.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              content: {
                text: post.content || "",
                media: post.media?.map((mediaItem: any) => ({
                  type: mediaItem.type || "image",
                  url: mediaItem.url || "/placeholder.svg",
                  alt: mediaItem.alt || "Post media",
                })),
              },
              engagement: {
                likes: post.analytics?.likes_count ?? 0,
                comments: post.analytics?.comments_count ?? 0,
                shares: post.analytics?.shares_count ?? 0,
                bookmarks: 0, // assuming bookmarks not yet implemented
              },
              isLiked: false,
              isBookmarked: false,
            }}
          />
        ))}
      </div>

      <div className="text-center py-8">
        <Button variant="outline" className="rounded-full">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
