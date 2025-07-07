import { FeedPost } from "./feed-post"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { fetchUnifiedFeed } from "@/lib/feed-logic/feed"

export async function UnifiedFeed() {
  const { feed, pagination } = await fetchUnifiedFeed({ page: 1, limit: 10 })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Dreams</h2>
        <Button variant="outline" size="sm" className="gap-2 rounded-full">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="space-y-6">
        {feed.map((item) => (
          <FeedPost key={item.id} post={item} />
        ))}
      </div>

      {pagination.hasMore && (
        <div className="text-center py-8">
          <Button variant="outline" className="rounded-full">
            Load More Dreams
          </Button>
        </div>
      )}
    </div>
  )
}
