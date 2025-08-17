import { MarketplaceHero } from "../../../components/marketplace-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, SlidersHorizontal, Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { fetchItems } from "@/lib/mongoose/items"
import { ItemDocument } from "@/lib/mongoose/models"

export default async function MarketplacePage() {
  const categories = ["All", "Art", "Writing", "Audio", "Video", "Courses"]

  const itemsByCategory: { items: any[] }[] = await Promise.all(
    categories.map((cat) =>
      fetchItems({
        page: 1,
        limit: 6,
        category: cat.toLowerCase() === "all" ? undefined : cat,
      })
    )
  )

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="container mx-auto px-4 py-6">
              <MarketplaceHero />
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search marketplace..."
                      className="pl-8 w-full md:w-[300px] rounded-full"
                    />
                  </div>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 rounded-full">
                  {categories.map((cat) => (
                    <TabsTrigger key={cat} value={cat.toLowerCase()} className="rounded-full">
                      {cat}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categories.map((cat, idx) => (
                  <TabsContent key={cat} value={cat.toLowerCase()} className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {itemsByCategory[idx].items.map((product: any) => (
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
                            </div>
                          </CardHeader>
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              <Link
                                href={`/product/${product.itemId}`}
                                className="font-medium hover:underline line-clamp-1 hover:text-primary transition-colors"
                              >
                                {product.itemId}
                              </Link>
                              <p className="text-sm text-muted-foreground">by {product.resourceUrl}</p>
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
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </main>
          <MobileNav />
        </div>
      </div>
    </SidebarProvider>
  )
}
