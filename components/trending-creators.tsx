import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles } from "lucide-react"

const trendingCreators = [
  {
    name: "ArtisticVision",
    handle: "@artisticvision",
    avatar: "/placeholder.svg",
    followers: "24.5K",
    category: "Digital Art",
  },
  {
    name: "SonicArtist",
    handle: "@sonicartist",
    avatar: "/placeholder.svg",
    followers: "18.2K",
    category: "Music",
  },
  {
    name: "StoryWeaver",
    handle: "@storyweaver",
    avatar: "/placeholder.svg",
    followers: "32.1K",
    category: "Writing",
  },
  {
    name: "StreetLens",
    handle: "@streetlens",
    avatar: "/placeholder.svg",
    followers: "15.7K",
    category: "Photography",
  },
  {
    name: "CodeMaster",
    handle: "@codemaster",
    avatar: "/placeholder.svg",
    followers: "21.3K",
    category: "Courses",
  },
]

export function TrendingCreators() {
  return (
    <Card className="dream-card">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Trending Dreamers</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {trendingCreators.map((creator) => (
          <div key={creator.handle} className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar className="ring-2 ring-background">
                <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {creator.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <Link
                  href={`/creator/${creator.handle}`}
                  className="text-sm font-medium leading-none hover:underline hover:text-primary transition-colors"
                >
                  {creator.name}
                </Link>
                <p className="text-sm text-muted-foreground">{creator.handle}</p>
                <div className="flex items-center pt-1">
                  <span className="text-xs text-muted-foreground">
                    {creator.followers} followers • {creator.category}
                  </span>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              Follow
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
