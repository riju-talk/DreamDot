import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ContentItem {
  id: string
  title: string
  creator: string
  creatorImage: string
  contentType: string
  image: string
  likes: number
  comments: number
  price: string
  description: string
  isPremium: boolean
}

interface ContentCardProps {
  item: ContentItem
}

export function ContentCard({ item }: ContentCardProps) {
  return (
    <Card className="dream-card group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8 ring-2 ring-background">
              <AvatarImage src={item.creatorImage || "/placeholder.svg"} alt={item.creator} />
              <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                {item.creator.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <Link href={`/creator/${item.creator}`} className="text-sm font-medium hover:underline">
                {item.creator}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-muted/50 hover:bg-muted">
              {item.contentType}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Save</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Report</DropdownMenuItem>
                <DropdownMenuItem>Not interested</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Link href={`/content/${item.id}`} className="block mt-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-3">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {item.isPremium && (
              <div className="absolute top-2 right-2">
                <Badge className="flex items-center gap-1 dream-badge text-primary-foreground">
                  <Sparkles className="h-3 w-3" /> Premium
                </Badge>
              </div>
            )}
          </div>
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
        </Link>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {item.price}
          </div>
          <Button variant="outline" size="sm" className="rounded-full">
            {item.isPremium ? "Subscribe" : "View"}
          </Button>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-3 border-t mt-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center space-x-1 px-2 rounded-full">
              <Heart className="h-4 w-4" />
              <span>{item.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-1 px-2 rounded-full">
              <MessageCircle className="h-4 w-4" />
              <span>{item.comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center px-2 rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="px-2 rounded-full">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
