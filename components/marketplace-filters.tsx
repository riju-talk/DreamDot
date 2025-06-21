"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"
import { useState } from "react"

export function MarketplaceFilters() {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = [
    "Digital Art",
    "Photography",
    "Music & Audio",
    "Video & Animation",
    "Writing & Translation",
    "Online Courses",
    "Digital Assets",
    "Templates",
  ]

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <Card className="dream-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Active Filters */}
        {selectedCategories.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Active Filters</h4>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map((category) => (
                <Badge key={category} variant="secondary" className="gap-1">
                  {category}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => toggleCategory(category)} />
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Price Range */}
        <div className="space-y-3">
          <h4 className="font-medium">Price Range</h4>
          <div className="px-2">
            <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={5} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}+</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h4 className="font-medium">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <label
                  htmlFor={category}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="space-y-3">
          <h4 className="font-medium">Minimum Rating</h4>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <label
                  htmlFor={`rating-${rating}`}
                  className="text-sm font-medium leading-none cursor-pointer flex items-center gap-1"
                >
                  {rating}+ Stars
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button variant="outline" className="w-full">
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  )
}
