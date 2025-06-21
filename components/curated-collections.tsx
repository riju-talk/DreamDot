"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

const collections = [
  {
    id: "1",
    title: "Best of Digital Art 2024",
    description: "Handpicked digital artworks that defined the year",
    curator: "DreamDot Team",
    curatorAvatar: "/placeholder.svg",
    itemCount: 24,
    followers: "12.3K",
    coverImage: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: "2",
    title: "Chill Vibes Music Collection",
    description: "Perfect tracks for focus and relaxation",
    curator: "MusicCurator",
    curatorAvatar: "/placeholder.svg",
    itemCount: 18,
    followers: "8.7K",
    coverImage: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: "3",
    title: "Photography Masterpieces",
    description: "Stunning photographs from around the world",
    curator: "LensExpert",
    curatorAvatar: "/placeholder.svg",
    itemCount: 32,
    followers: "15.2K",
    coverImage: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
]

export function CuratedCollections() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Curated Collections</h2>
        </div>
        <Button variant="outline" className="gap-2 rounded-full">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Card key={collection.id} className="dream-card group overflow-hidden cursor-pointer">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {collection.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="flex items-center gap-1 dream-badge text-primary-foreground">
                      <Star className="h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{collection.title}</h3>
                  <p className="text-sm text-white/90 line-clamp-2 mb-2">{collection.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={collection.curatorAvatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">{collection.curator.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{collection.curator}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <span>{collection.itemCount} items</span>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{collection.followers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
