import { MarketplaceHero } from "../../../components/marketplace-hero"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { fetchItems } from "@/lib/mongoose/items"
import { MarketplaceSearch } from "../../../components/marketplace-search"
import { ScrollableContent } from "@/components/scrollable-content"

export const dynamic = "force-dynamic"

const CATEGORIES = ["Mixed", "Art", "Writing", "Audio", "Video", "Courses"]

export default async function MarketplacePage({ searchParams }: { searchParams?: { q?: string; cat?: string } }) {
  const query = (searchParams?.q ?? "").trim()
  const activeCategory = (searchParams?.cat ?? "mixed").toLowerCase()
  // Server-side fetch for initial render; searching happens client-side within the active category
  const results = await Promise.all(
    CATEGORIES.map((cat) =>
      fetchItems({ page: 1, limit: 12, category: cat.toLowerCase() === "mixed" ? undefined : cat })
    )
  )

  const itemsByCategory = results.map((r) => ({ items: r.items || [] }))

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNav />
        <ScrollableContent>
          <main className="container mx-auto px-4 py-6">
            <div className="space-y-8">
              <MarketplaceHero />
              <MarketplaceSearch
                itemsByCategory={itemsByCategory}
                categories={CATEGORIES}
                activeCategory={activeCategory}
                query={query}
              />
            </div>
          </main>
        </ScrollableContent>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  )
}
