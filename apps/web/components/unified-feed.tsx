"use client"

import { FeedPost } from "./feed-post"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { fetchUnifiedFeed } from "@/lib/feed-logic/feed"
import { DatabaseErrorFallback } from "./database-error-fallback"
import { useState, useEffect } from "react"

interface FeedData {
  feed: any[]
  pagination: { total: number; page: number; limit: number; hasMore: boolean }
}

export function UnifiedFeed() {
  const [feedData, setFeedData] = useState<FeedData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const loadFeed = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await fetchUnifiedFeed({ page: 1, limit: 10 })
      setFeedData(data)
    } catch (err) {
      console.error("[UnifiedFeed] Error loading feed:", err)
      setError(err instanceof Error ? err : new Error("Unknown error occurred"))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadFeed()
  }, [])

  if (error) {
    return (
      <DatabaseErrorFallback
        error={error}
        component="UnifiedFeed"
        onRetry={loadFeed}
        showDebugInfo={process.env.NODE_ENV === "development"}
      />
    )
  }

  if (isLoading || !feedData) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Latest Dreams</h2>
          <Button variant="outline" size="sm" className="gap-2 rounded-full" disabled>
            <RefreshCw className="h-4 w-4 animate-spin" />
            Loading...
          </Button>
        </div>
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
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
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Dreams</h2>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 rounded-full"
          onClick={loadFeed}
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      <div className="space-y-6">
        {feedData.feed.length > 0 ? (
          feedData.feed.map((item, idx) => (
            // IDs already have type prefixes (e.g., "post:abc123", "item:def456")
            // so we can use them directly without adding another prefix
            <FeedPost key={item.id ?? `fallback-${idx}`} post={item} />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="space-y-2">
              <p className="text-muted-foreground">No dreams found</p>
              <p className="text-sm text-muted-foreground">
                Be the first to share your dreams with the community!
              </p>
            </div>
          </div>
        )}
      </div>

      {feedData.pagination.hasMore && (
        <div className="text-center py-8">
          <Button variant="outline" className="rounded-full">
            Load More Dreams
          </Button>
        </div>
      )}
    </div>
  )
}
