"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Eye, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const trendingContent = [
  {
    id: "1",
    title: "Cyberpunk City Nights",
    creator: "NeonArtist",
    category: "Digital Art",
    views: "45.2K",
    likes: "3.1K",
    image: "/placeholder.svg?height=300&width=400",
    trending: true,
  },
  {
    id: "2",
    title: "Lo-Fi Hip Hop Collection",
    creator: "BeatMaker",
    category: "Music",
    views: "89.5K",
    likes: "7.2K",
    image: "/placeholder.svg?height=300&width=400",
    trending: true,
  },
  {
    id: "3",
    title: "Minimalist Photography Guide",
    creator: "LensArtist",
    category: "Course",
    views: "23.8K",
    likes: "1.9K",
    image: "/placeholder.svg?height=300&width=400",
    trending: true,
  },
  {
    id: "4",
    title: "Fantasy Short Stories",
    creator: "WordWeaver",
    category: "Writing",
    views: "67.3K",
    likes: "4.5K",
    image: "/placeholder.svg?height=300&width=400",
    trending: true,
  },
]

export function TrendingSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <Badge className="dream-badge text-primary-foreground">Hot</Badge>
        </div>
        <Button variant="outline" className="gap-2 rounded-full">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingContent.map((item, index) => (
          <Card key={item.id} className="dream-card group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="flex items-center gap-1 bg-primary/90 text-primary-foreground">
                    <TrendingUp className="h-3 w-3" />#{index + 1}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur">
                    {item.category}
                  </Badge>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <Link href={`/content/${item.id}`} className="block">
                  <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">by {item.creator}</p>
                </Link>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    <span>{item.likes}</span>
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
