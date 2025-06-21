import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserPlus, Sparkles } from "lucide-react"
import Link from "next/link"

const suggestedCreators = [
  {
    name: "Luna Dreams",
    handle: "@lunadreams",
    avatar: "/placeholder.svg",
    category: "Digital Art",
    followers: "1.2K",
    isVerified: false,
    recentPost: "Amazing space artwork",
  },
  {
    name: "Echo Sounds",
    handle: "@echosounds",
    avatar: "/placeholder.svg",
    category: "Music",
    followers: "856",
    isVerified: false,
    recentPost: "New ambient track",
  },
  {
    name: "Pixel Poet",
    handle: "@pixelpoet",
    avatar: "/placeholder.svg",
    category: "Writing",
    followers: "2.1K",
    isVerified: true,
    recentPost: "Short story collection",
  },
  {
    name: "Frame Walker",
    handle: "@framewalker",
    avatar: "/placeholder.svg",
    category: "Photography",
    followers: "634",
    isVerified: false,
    recentPost: "Street photography tips",
  },
]

export function SuggestedCreators() {
  return (
    <Card className="dream-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <UserPlus className="h-4 w-4 text-primary" />
          <span>Suggested for You</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestedCreators.map((creator) => (
          <div key={creator.handle} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 ring-2 ring-background">
                <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs">
                  {creator.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <Link
                    href={`/creator/${creator.handle}`}
                    className="text-sm font-medium hover:underline hover:text-primary transition-colors truncate"
                  >
                    {creator.name}
                  </Link>
                  {creator.isVerified && <Sparkles className="h-3 w-3 text-primary flex-shrink-0" />}
                </div>
                <p className="text-xs text-muted-foreground">{creator.category}</p>
                <p className="text-xs text-muted-foreground truncate">{creator.recentPost}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="rounded-full text-xs">
              Follow
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
