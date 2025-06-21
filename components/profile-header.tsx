"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Share2, MessageSquare, Sparkles, MapPin, Calendar, LinkIcon } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="relative mb-8">
      {/* Cover Image */}
      <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-primary/10">
        <div className="absolute inset-0 bg-primary/5"></div>

        {/* Floating Elements */}
        <div className="absolute top-8 left-8 floating-animation">
          <div className="w-12 h-12 rounded-full bg-primary/20"></div>
        </div>
        <div className="absolute top-16 right-16 floating-animation">
          <div className="w-8 h-8 rounded-full bg-secondary/20"></div>
        </div>
        <div className="absolute bottom-12 right-8 floating-animation">
          <div className="w-16 h-16 rounded-full bg-accent/20"></div>
        </div>
      </div>

      {/* Profile Content */}
      <Card className="dream-card -mt-16 mx-4 relative z-10">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                <AvatarImage src="/placeholder.svg" alt="@janedoe" />
                <AvatarFallback className="bg-primary text-primary-foreground text-4xl">JD</AvatarFallback>
              </Avatar>

              <div className="text-center md:text-left md:mb-2">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <h1 className="text-3xl font-bold">Jane Doe</h1>
                  <Badge className="bg-primary text-primary-foreground">
                    <Sparkles className="h-3 w-3 mr-1" /> Pro Creator
                  </Badge>
                </div>
                <p className="text-muted-foreground text-lg mb-3">@janedoe</p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined March 2022</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LinkIcon className="h-4 w-4" />
                    <a href="#" className="hover:text-primary transition-colors">
                      janedoe.com
                    </a>
                  </div>
                </div>

                <p className="max-w-2xl text-muted-foreground">
                  Digital artist and storyteller creating immersive worlds through art, writing, and music. Passionate
                  about bringing dreams to life through creative expression.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 justify-center md:justify-end mb-2">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
              <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center md:justify-start space-x-8 text-center mt-6 pt-6 border-t">
            <div>
              <div className="text-2xl text-primary font-bold">245</div>
              <div className="text-sm text-muted-foreground">Dreams</div>
            </div>
            <div>
              <div className="text-2xl text-primary font-bold">15.3K</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div>
              <div className="text-2xl text-primary font-bold">128</div>
              <div className="text-sm text-muted-foreground">Following</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
