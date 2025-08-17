"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Music, PenTool, Camera, Video, BookOpen, ArrowRight } from "lucide-react"
import Image from "next/image"

const categories = [
  {
    name: "Digital Art",
    icon: Palette,
    count: "245K",
    color: "from-pink-500 to-purple-600",
    image: "/placeholder.svg?height=200&width=300",
    description: "Stunning digital artwork and illustrations",
  },
  {
    name: "Music",
    icon: Music,
    count: "189K",
    color: "from-blue-500 to-cyan-600",
    image: "/placeholder.svg?height=200&width=300",
    description: "Original tracks, beats, and compositions",
  },
  {
    name: "Writing",
    icon: PenTool,
    count: "156K",
    color: "from-green-500 to-emerald-600",
    image: "/placeholder.svg?height=200&width=300",
    description: "Stories, articles, and creative writing",
  },
  {
    name: "Photography",
    icon: Camera,
    count: "298K",
    color: "from-orange-500 to-red-600",
    image: "/placeholder.svg?height=200&width=300",
    description: "Breathtaking photos and visual stories",
  },
  {
    name: "Video",
    icon: Video,
    count: "134K",
    color: "from-purple-500 to-pink-600",
    image: "/placeholder.svg?height=200&width=300",
    description: "Creative videos and animations",
  },
  {
    name: "Courses",
    icon: BookOpen,
    count: "67K",
    color: "from-indigo-500 to-blue-600",
    image: "/placeholder.svg?height=200&width=300",
    description: "Educational content and tutorials",
  },
]

export function CategoryShowcase() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Explore Categories</h2>
        <Button variant="outline" className="gap-2 rounded-full">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Card key={category.name} className="dream-card group overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`} />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-full bg-white/20 backdrop-blur">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge className="bg-white/20 backdrop-blur text-white border-white/30">
                        {category.count} dreams
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm text-white/90">{category.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
