import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Sparkles } from "lucide-react"
import Link from "next/link"

const newCreators = [
  {
    name: "Luna Dreams",
    handle: "@lunadreams",
    avatar: "/placeholder.svg",
    category: "Digital Art",
    joinedDays: 3,
    followers: "1.2K",
    isVerified: false,
  },
  {
    name: "Echo Sounds",
    handle: "@echosounds",
    avatar: "/placeholder.svg",
    category: "Music",
    joinedDays: 5,
    followers: "856",
    isVerified: false,
  },
  {
    name: "Pixel Poet",
    handle: "@pixelpoet",
    avatar: "/placeholder.svg",
    category: "Writing",
    joinedDays: 7,
    followers: "2.1K",
    isVerified: true,
  },
  {
    name: "Frame Walker",
    handle: "@framewalker",
    avatar: "/placeholder.svg",
    category: "Photography",
    joinedDays: 2,
    followers: "634",
    isVerified: false,
  },
  {
    name: "Code Canvas",
    handle: "@codecanvas",
    avatar: "/placeholder.svg",
    category: "Courses",
    joinedDays: 4,
    followers: "1.8K",
    isVerified: false,
  },
]

export function NewCreators() {
  return (
    <Card className="dream-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <UserPlus className="h-4 w-4 text-primary" />
          <span>New Dreamers</span>
          <Badge className="dream-badge text-primary-foreground text-xs">Fresh</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {newCreators.map((creator) => (
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
                <p className="text-xs text-muted-foreground">
                  {creator.followers} followers • {creator.joinedDays}d ago
                </p>
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
