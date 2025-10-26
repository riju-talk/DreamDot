"use client"

import { MarketplaceHero } from "../../../components/marketplace-hero"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { MarketplaceSearch } from "../../../components/marketplace-search"
import { DatabaseErrorFallback } from "../../../components/database-error-fallback"
import { fetchItems } from "@/lib/mongoose/items"
import { useState, useEffect } from "react"

interface ItemsByCategory {
  items: any[]
}

export default function MarketplacePage() {
  const [itemsByCategory, setItemsByCategory] = useState<ItemsByCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const categories = ["All", "Art", "Writing", "Audio", "Video", "Courses"]

  const loadItems = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data: ItemsByCategory[] = await Promise.all(
        categories.map((cat) =>
          fetchItems({
            page: 1,
            limit: 12,
            category: cat.toLowerCase() === "all" ? undefined : cat,
          })
        )
      )
      setItemsByCategory(data)
    } catch (err) {
      console.error("[MarketplacePage] Error loading items:", err)
      setError(err instanceof Error ? err : new Error("Unknown error occurred"))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadItems()
  }, [])

  if (error) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <TopNav />
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="space-y-8">
              <MarketplaceHero />
              <DatabaseErrorFallback
                error={error}
                component="Marketplace"
                onRetry={loadItems}
                showDebugInfo={process.env.NODE_ENV === "development"}
              />
            </div>
          </main>
          <MobileNav />
        </SidebarInset>
      </SidebarProvider>
    )
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNav />
        <main className="flex-1 container mx-auto px-4 py-6">
          <div className="space-y-8">
            <MarketplaceHero />
            {isLoading ? (
              <div className="space-y-6">
                <div className="animate-pulse">
                  <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-muted/50 rounded-lg p-4 space-y-3">
                        <div className="aspect-[4/3] bg-muted rounded"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-muted rounded w-3/4"></div>
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <MarketplaceSearch
                itemsByCategory={itemsByCategory}
                categories={categories}
              />
            )}
          </div>
        </main>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  )
}
