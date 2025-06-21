"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, TrendingUp, Heart, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SocialDiscoverHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 mb-8">
      <div className="relative z-10">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-8 w-8 text-primary animate-pulse-soft" />
            <h1 className="text-4xl font-bold text-primary">Discover Dreams</h1>
            <MessageCircle className="h-8 w-8 text-secondary animate-pulse-soft" />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore creative posts, connect with dreamers, and discover inspiring content from around the world
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search posts, creators, or hashtags..."
                className="pl-12 pr-4 py-3 text-lg rounded-full border-none bg-background/80 backdrop-blur"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Card className="bg-background/50 backdrop-blur border-none">
              <CardContent className="p-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">50K+</p>
                  <p className="text-xs text-muted-foreground">Daily Posts</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur border-none">
              <CardContent className="p-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-secondary" />
                <div className="text-left">
                  <p className="font-semibold">2.4M+</p>
                  <p className="text-xs text-muted-foreground">Interactions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur border-none">
              <CardContent className="p-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <div className="text-left">
                  <p className="font-semibold">180K+</p>
                  <p className="text-xs text-muted-foreground">Active Dreamers</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 animate-pulse-soft"></div>
    </div>
  )
}
