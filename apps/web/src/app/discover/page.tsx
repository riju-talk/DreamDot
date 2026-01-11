import { SocialDiscoverHero } from "../../../components/social-discover-hero"
import { SocialFeedWrapper } from "../../../components/social-feed-wrapper"
import { TrendingHashtags } from "../../../components/trending-hashtags"
import { SuggestedCreators } from "../../../components/suggested-creators"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { ScrollableContent } from "@/components/scrollable-content"

export default async function DiscoverPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNav />
        <ScrollableContent>
          <main className="container mx-auto px-4 py-6">
            <div className="space-y-8">
              <SocialDiscoverHero />
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <SocialFeedWrapper />
                </div>
                <div className="space-y-8">
                  <TrendingHashtags />
                  <SuggestedCreators />
                </div>
              </div>
            </div>
          </main>
        </ScrollableContent>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  )

}
