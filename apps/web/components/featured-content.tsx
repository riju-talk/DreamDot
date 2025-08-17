"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function FeaturedContent() {
  return (
    <div className="mb-8">
      <Card className="overflow-hidden border-none bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <Badge className="dream-badge text-primary-foreground mb-2">Featured Creator</Badge>
                <h2 className="text-3xl font-bold">Ethereal Visions Collection</h2>
                <p className="text-muted-foreground mt-2">
                  Explore a breathtaking digital art collection that blends reality and imagination in stunning detail.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold">
                    AV
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-medium">ArtisticVision</p>
                  <p className="text-muted-foreground">24.5K followers</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="dream-button text-primary-foreground">View Collection</Button>
                <Button variant="outline">Follow Creator</Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 z-10 rounded-xl"></div>
              <Image src="/placeholder.svg?height=400&width=600" alt="Featured artwork" fill className="object-cover" />
              <div className="absolute bottom-3 right-3 z-20">
                <Button size="sm" variant="secondary" className="gap-1">
                  See more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
