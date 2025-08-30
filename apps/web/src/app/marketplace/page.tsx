import { MarketplaceHero } from "../../../components/marketplace-hero"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { MarketplaceSearch } from "../../../components/marketplace-search"

import { fetchItems } from "@/lib/mongoose/items"
import { ItemDocument } from "@/lib/mongoose/models"

export default async function MarketplacePage() {
  const categories = ["All", "Art", "Writing", "Audio", "Video", "Courses"]

  const itemsByCategory: { items: any[] }[] = await Promise.all(
    categories.map((cat) =>
      fetchItems({
        page: 1,
        limit: 12, // Increased limit for better search results
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
            <div className="space-y-8">
              <MarketplaceHero />
              <MarketplaceSearch 
                itemsByCategory={itemsByCategory} 
                categories={categories} 
              />
            </div>
          </main>
          <MobileNav />
        </div>
      </div>
    </SidebarProvider>
  )
}
