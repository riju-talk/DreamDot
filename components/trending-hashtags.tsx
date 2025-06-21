import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hash, TrendingUp } from "lucide-react"

const trendingHashtags = [
  { name: "digitalart", posts: "45.2K", trending: true },
  { name: "cyberpunk", posts: "32.1K", trending: true },
  { name: "fantasy", posts: "28.9K", trending: false },
  { name: "photography", posts: "24.7K", trending: true },
  { name: "storytelling", posts: "19.3K", trending: false },
  { name: "musicproduction", posts: "17.8K", trending: false },
  { name: "abstract", posts: "15.6K", trending: true },
  { name: "portrait", posts: "14.2K", trending: false },
  { name: "neonvibes", posts: "12.9K", trending: true },
  { name: "WIP", posts: "11.4K", trending: false },
]

export function TrendingHashtags() {
  return (
    <Card className="dream-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Hash className="h-4 w-4 text-primary" />
          <span>Trending Tags</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-2">
          {trendingHashtags.map((tag, index) => (
            <div
              key={tag.name}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">#{index + 1}</span>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">#{tag.name}</span>
                    {tag.trending && <TrendingUp className="h-3 w-3 text-primary" />}
                  </div>
                  <span className="text-xs text-muted-foreground">{tag.posts} posts</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
