import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { CreatePostPrompt } from "../../../components/create-post-prompt"
import { UnifiedFeed } from "../../../components/unified-feed"
import { TrendingCreators } from "../../../components/trending-creators"
import { PopularTags } from "../../../components/popular-tags"

export default function FeedPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNav />
        <main className="flex-1 container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <CreatePostPrompt />
              <UnifiedFeed />
            </div>
            <div className="space-y-6">
              <TrendingCreators />
              <PopularTags />
            </div>
          </div>
        </main>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  )
}
