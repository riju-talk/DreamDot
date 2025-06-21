"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const categories = [
  { name: "All", active: true },
  { name: "Art", active: false },
  { name: "Writing", active: false },
  { name: "Music", active: false },
  { name: "Video", active: false },
  { name: "Photography", active: false },
  { name: "Courses", active: false },
  { name: "Digital Assets", active: false },
  { name: "Podcasts", active: false },
  { name: "Comics", active: false },
  { name: "Research", active: false },
]

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  return (
    <div className="my-6">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-2 p-1">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              className={cn(
                "rounded-full border-none",
                activeCategory === category.name
                  ? "dream-button text-primary-foreground"
                  : "bg-muted/50 hover:bg-muted",
              )}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}
