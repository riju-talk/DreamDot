import { fetchPosts } from "@/lib/mongoose/posts"
import { SocialPost } from "./social-post"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export async function SocialFeed() {
  const { posts } = await fetchPosts({ page: 1, limit: 5 })
  //console.log('Fetched posts:', JSON.stringify(posts, null, 2))
  //console.log('First post structure:', posts[0] ? Object.keys(posts[0]) : 'No posts found')

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
        {posts.map((post) => {
          //console.log('Post data:', post); // Debug log
          return (
            <SocialPost
              key={post.id}
              post={{
                id: post.id,
                user: {
                  name: post.user?.display_name || post.user?.username || "Anonymous",
                  handle: post.user?.username || "user",
                  avatar: post.user?.avatar_url || "/placeholder.svg",
                  verified: post.user?.verified || false,
                },
                timestamp: new Date(post.created_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                content: {
                  text: post.content || "",
                  media: Array.isArray(post.media) ? post.media.map((m: any) => ({
                    type: m.type || "image",
                    url: m.url || "/placeholder.svg",
                    alt: m.alt || "Post media"
                  })) : []
                },
                engagement: {
                  likes: post.analytics?.likes_count || 0,
                  comments: post.analytics?.comments_count || 0,
                  shares: 0, // Not available in the analytics object
                  bookmarks: 0
                },
                isLiked: false,
                isBookmarked: false
              }}
            />
          )
        })}
      </div>

      <div className="text-center py-8">
        <Button variant="outline" className="rounded-full">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
