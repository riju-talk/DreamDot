import { SocialDiscoverHero } from "../../../components/social-discover-hero"
import { SocialFeed } from "../../../components/social-feed"
import { TrendingHashtags } from "../../../components/trending-hashtags"
import { SuggestedCreators } from "../../../components/suggested-creators"
import { SearchFilters } from "../../../components/search-filters"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"

export default function DiscoverPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNav />
        <main className="flex-1 container mx-auto px-4 py-6">
          <div className="container mx-auto px-4 py-6">
            <SocialDiscoverHero />

            <SearchFilters />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
              <div className="lg:col-span-3">
                <SocialFeed />
              </div>

              <div className="space-y-8">
                <TrendingHashtags />
                <SuggestedCreators />
              </div>
            </div>
          </div>
        </main>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  )
}
