import { ProfileHeader } from "../../../components/profile-header"
import { ProfileTabs } from "../../../components/profile-tabs"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"

export default function ProfilePage() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="container mx-auto px-4 py-6">
              <ProfileHeader />
              <ProfileTabs />
            </div>
          </main>
          <MobileNav />
        </div>
      </div>
    </SidebarProvider>
  )
}
