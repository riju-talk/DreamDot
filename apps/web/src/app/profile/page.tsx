import { ProfileHeader } from "../../../components/profile-header"
import { ProfileTabs } from "../../../components/profile-tabs"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { ScrollableContent } from "@/components/scrollable-content"

export default function ProfilePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNav />
        <ScrollableContent>
          <main className="container mx-auto px-4 py-6">
            <div className="container mx-auto px-4 py-6">
              <ProfileHeader />
              <ProfileTabs />
            </div>
          </main>
        </ScrollableContent>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  )
}
