import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hash, TrendingUp } from "lucide-react"

const popularTags = [
  { name: "digitalart", count: "45.2K", trending: true },
  { name: "lofi", count: "32.1K", trending: true },
  { name: "photography", count: "28.9K", trending: false },
  { name: "cyberpunk", count: "24.7K", trending: true },
  { name: "minimalist", count: "19.3K", trending: false },
  { name: "fantasy", count: "17.8K", trending: false },
  { name: "abstract", count: "15.6K", trending: true },
  { name: "portrait", count: "14.2K", trending: false },
  { name: "ambient", count: "12.9K", trending: false },
  { name: "tutorial", count: "11.4K", trending: false },
  { name: "vintage", count: "10.8K", trending: false },
  { name: "experimental", count: "9.7K", trending: true },
]

export function PopularTags() {
  return (
    <Card className="dream-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Hash className="h-4 w-4 text-primary" />
          <span>Popular Tags</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Badge
              key={tag.name}
              variant="outline"
              className="cursor-pointer hover:bg-muted transition-colors flex items-center gap-1"
            >
              #{tag.name}
              {tag.trending && <TrendingUp className="h-3 w-3 text-primary" />}
              <span className="text-xs text-muted-foreground ml-1">{tag.count}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
