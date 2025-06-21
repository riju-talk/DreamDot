"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ImageIcon, Video, Music, FileText, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function CreatePostPrompt() {
  return (
    <Card className="dream-card mb-6">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-10 w-10 ring-2 ring-background">
            <AvatarImage src="/placeholder.svg" alt="Your avatar" />
            <AvatarFallback className="bg-primary text-primary-foreground">YU</AvatarFallback>
          </Avatar>
          <Link href="/create" className="flex-1">
            <div className="flex-1 bg-muted/50 rounded-full px-4 py-3 text-muted-foreground hover:bg-muted transition-colors cursor-pointer">
              What's your latest dream?
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="gap-2 rounded-full" asChild>
              <Link href="/create?type=image">
                <ImageIcon className="h-4 w-4 text-primary" />
                <span className="hidden sm:inline">Photo</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 rounded-full" asChild>
              <Link href="/create?type=video">
                <Video className="h-4 w-4 text-secondary" />
                <span className="hidden sm:inline">Video</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 rounded-full" asChild>
              <Link href="/create?type=audio">
                <Music className="h-4 w-4 text-accent" />
                <span className="hidden sm:inline">Audio</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 rounded-full" asChild>
              <Link href="/create?type=text">
                <FileText className="h-4 w-4 text-primary" />
                <span className="hidden sm:inline">Write</span>
              </Link>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="gap-2 rounded-full" asChild>
            <Link href="/create?type=sell">
              <ShoppingBag className="h-4 w-4 text-secondary" />
              <span className="hidden sm:inline">Sell</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
