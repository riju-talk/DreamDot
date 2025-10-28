import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { searchMarketplace, highlightSearchMatch } from "@/lib/search-client"

interface MarketplaceSearchProps {
  itemsByCategory: { items: any[] }[]
  categories: string[]
  activeCategory?: string
  query?: string
}

export function MarketplaceSearch({ itemsByCategory, categories, activeCategory = "mixed", query = "" }: MarketplaceSearchProps) {
  const active = (activeCategory || categories[0] || "mixed").toLowerCase()
  const activeIdx = Math.max(0, categories.findIndex((c) => c.toLowerCase() === active))
  const items = itemsByCategory[activeIdx]?.items ?? []
  const filtered = query.trim() ? searchMarketplace(items, query) : items

  const renderHighlightedText = (text: string) => {
    if (!query.trim()) return text
    return (
      <span
        dangerouslySetInnerHTML={{ __html: highlightSearchMatch(text, query) }}
      />
    )
  }

  // Build category links preserving current query
  const makeCatHref = (cat: string) => {
    const params = new URLSearchParams()
    if (query.trim()) params.set("q", query)
    params.set("cat", cat.toLowerCase())
    return `/marketplace?${params.toString()}`
  }

  return (
    <div className="space-y-6">
      {/* Search Bar (server-submitted via GET) */}
      <form className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between" action="/marketplace" method="get">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search marketplace..."
              name="q"
              defaultValue={query}
              className="pl-8 pr-8 w-full md:w-[300px] rounded-full"
            />
          </div>
          <input type="hidden" name="cat" value={active} />
          <Button type="submit" variant="outline" className="rounded-full">Search</Button>
        </div>
        {query.trim() && (
          <div className="text-sm text-muted-foreground">
            Found {filtered.length} result{filtered.length !== 1 ? 's' : ''} in {categories[activeIdx]}
          </div>
        )}
      </form>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = cat.toLowerCase() === active
          return (
            <Link
              key={cat}
              href={makeCatHref(cat)}
              className={`px-4 py-2 rounded-full border ${isActive ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted'}`}
            >
              {cat}
            </Link>
          )
        })}
      </div>

      {/* Items Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No items found</h3>
          <p className="text-muted-foreground">
            {query.trim() ? `No items match your search "${query}" in ${categories[activeIdx]}` : `No items available in ${categories[activeIdx]}`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product: any) => (
            <Card key={String(product._id)} className="dream-card overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={product.fileUrl || "/placeholder.svg"}
                    alt={product.title || ""}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  {product.fileType && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {product.fileType}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Link
                    href={`/product/${String(product._id)}`}
                    className="font-medium hover:underline line-clamp-1 hover:text-primary transition-colors"
                  >
                    {renderHighlightedText(product.title || "Untitled")}
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {renderHighlightedText(product.description || "")}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="font-bold text-lg text-primary">${(product.price ?? 0).toString()}</div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{product.rating ?? 0}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{product.sales ?? 0} sold</div>
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
    </div>
  )
}
