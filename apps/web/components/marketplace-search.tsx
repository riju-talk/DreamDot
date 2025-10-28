"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, SlidersHorizontal, Star, ShoppingCart, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { searchMarketplace, highlightSearchMatch } from "@/lib/search-client"

interface MarketplaceSearchProps {
  itemsByCategory: { items: any[] }[]
  categories: string[]
}

export function MarketplaceSearch({ itemsByCategory, categories }: MarketplaceSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [debouncedQuery, setDebouncedQuery] = useState("")

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Memoized search results
  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return itemsByCategory
    }

    return itemsByCategory.map((categoryData, idx) => {
      const filteredItems = searchMarketplace(categoryData.items, debouncedQuery)
      return { items: filteredItems }
    })
  }, [itemsByCategory, debouncedQuery])

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const renderHighlightedText = (text: string) => {
    if (!debouncedQuery.trim()) return text
    return (
      <span 
        dangerouslySetInnerHTML={{
          __html: highlightSearchMatch(text, debouncedQuery)
        }}
      />
    )
  }

  const totalResults = searchResults.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search marketplace..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-8 w-full md:w-[300px] rounded-full"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
                onClick={handleClearSearch}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
        
        {debouncedQuery.trim() && (
          <div className="text-sm text-muted-foreground">
            Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{debouncedQuery}"
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <Tabs 
        value={activeCategory} 
        onValueChange={setActiveCategory} 
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 rounded-full">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat.toLowerCase()} className="rounded-full">
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat, idx) => (
          <TabsContent key={cat} value={cat.toLowerCase()} className="mt-6">
            {searchResults[idx].items.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No items found</h3>
                <p className="text-muted-foreground">
                  {debouncedQuery.trim() 
                    ? `No items match your search "${debouncedQuery}" in ${cat}`
                    : `No items available in ${cat}`
                  }
                </p>
                {debouncedQuery.trim() && (
                  <Button variant="outline" className="mt-4" onClick={handleClearSearch}>
                    Clear Search
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults[idx].items.map((product: any) => (
                  <Card key={product.itemId} className="dream-card overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={product.content || "/placeholder.svg"}
                          alt={product.itemId}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                          {product.mediaType}
                        </Badge>
                        {product.searchScore && (
                          <Badge 
                            variant="secondary" 
                            className="absolute top-2 left-2 text-xs"
                          >
                            {Math.round((1 - product.searchScore) * 100)}% match
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <Link
                          href={`/product/${product.itemId}`}
                          className="font-medium hover:underline line-clamp-1 hover:text-primary transition-colors"
                        >
                          {renderHighlightedText(product.itemId)}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          by {renderHighlightedText(product.resourceUrl)}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="font-bold text-lg text-primary">${product.price}</div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{product.sales} sold</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
