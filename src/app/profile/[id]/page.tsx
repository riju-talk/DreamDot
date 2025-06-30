import { AccountHeader } from "../../../../components/account-header"
import { ProfileTabs } from "../../../../components/profile-tabs"
import { TopNav } from "../../../../components/top-nav"
import { MobileNav } from "../../../../components/mobile-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../../components/app-sidebar"

export default function ProfilePage({params}: {params: {id: string}}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="container mx-auto px-4 py-6">
              <AccountHeader user_id={params.id} />
              <ProfileTabs/>
            </div>
          </main>
          <MobileNav />
        </div>
      </div>
    </SidebarProvider>
  )
}
