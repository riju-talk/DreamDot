import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { CreatePostPrompt } from "../../../components/create-post-prompt"
import { UnifiedFeed } from "../../../components/unified-feed"
import { TrendingCreators } from "../../../components/trending-creators"
import { PopularTags } from "../../../components/popular-tags"
import { ScrollableContent } from "../../../components/scrollable-content"
import { MobileNav } from "../../../components/mobile-nav"

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative font-sans overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="relative bg-transparent">
          <TopNav />
          <ScrollableContent>
            <main className="container mx-auto px-4 md:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3 space-y-12">
                  <header>
                    <h2 className="text-4xl font-serif tracking-tight text-foreground/90">Curated <span className="text-foreground/40 italic">Inspiration.</span></h2>
                    <p className="text-sm text-muted-foreground/60 mt-2 font-mono uppercase tracking-[0.2em]">Latest from the atelier</p>
                  </header>
                  <CreatePostPrompt />
                  <UnifiedFeed />
                </div>
                <div className="space-y-12 hidden lg:block">
                  <div className="bg-card/20 backdrop-blur-xl rounded-[32px] p-6 border border-border/50">
                    <TrendingCreators />
                  </div>
                  <div className="bg-card/20 backdrop-blur-xl rounded-[32px] p-6 border border-border/50">
                    <PopularTags />
                  </div>
                </div>
              </div>
            </main>
          </ScrollableContent>
          <MobileNav />
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
