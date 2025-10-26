"use client"

import { fetchPosts } from "@/lib/mongoose/posts"
import { SocialPost } from "./social-post"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { DatabaseErrorFallback } from "./database-error-fallback"
import { useState, useEffect } from "react"

interface PostData {
  id: string
  user?: {
    display_name?: string
    username?: string
    avatar_url?: string
    verified?: boolean
  }
  created_at: string
  content?: string
  media?: Array<{
    type?: string
    url?: string
    alt?: string
  }>
  analytics?: {
    likes_count?: number
    comments_count?: number
  }
}

interface PostsResponse {
  posts: PostData[]
}

export function SocialFeed() {
  const [postsData, setPostsData] = useState<PostsResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const loadPosts = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await fetchPosts({ page: 1, limit: 5 })
      setPostsData(data)
    } catch (err) {
      console.error("[SocialFeed] Error loading posts:", err)
      setError(err instanceof Error ? err : new Error("Unknown error occurred"))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  if (error) {
    return (
      <DatabaseErrorFallback
        error={error}
        component="SocialFeed"
        onRetry={loadPosts}
        showDebugInfo={process.env.NODE_ENV === "development"}
      />
    )
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Posts</h2>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 rounded-full"
          onClick={loadPosts}
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      <div className="space-y-6">
        {isLoading || !postsData ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div className="space-y-2">
                    <div className="w-32 h-4 bg-muted rounded"></div>
                    <div className="w-24 h-3 bg-muted rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-4 bg-muted rounded"></div>
                  <div className="w-3/4 h-4 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          ))
        ) : postsData.posts.length > 0 ? (
          postsData.posts.map((post) => {
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
                    shares: 0,
                    bookmarks: 0
                  },
                  isLiked: false,
                  isBookmarked: false
                }}
              />
            )
          })
        ) : (
          <div className="text-center py-12">
            <div className="space-y-2">
              <p className="text-muted-foreground">No posts found</p>
              <p className="text-sm text-muted-foreground">
                Be the first to share your thoughts with the community!
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="text-center py-8">
        <Button variant="outline" className="rounded-full">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
