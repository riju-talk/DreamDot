import { ProfileHeader } from "../../../components/profile-header"
import { ProfileTabs } from "../../../components/profile-tabs"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"

const contentItems = [
  {
    id: "1",
    title: "Digital Art Collection: Neon Dreams",
    creator: "JaneDoe",
    creatorImage: "/placeholder.svg",
    contentType: "Art",
    image: "/placeholder.svg?height=400&width=600",
    likes: 1243,
    comments: 89,
    price: "$45",
    description: "A collection of 10 digital art pieces exploring futuristic cityscapes with vibrant neon aesthetics.",
    isPremium: true,
  },
  {
    id: "2",
    title: "Urban Photography Masterclass",
    creator: "JaneDoe",
    creatorImage: "/placeholder.svg",
    contentType: "Course",
    image: "/placeholder.svg?height=400&width=600",
    likes: 876,
    comments: 124,
    price: "$79",
    description: "Learn how to capture stunning urban landscapes and street photography with this comprehensive guide.",
    isPremium: true,
  },
  {
    id: "3",
    title: "The Midnight Chronicles: Chapter 1",
    creator: "JaneDoe",
    creatorImage: "/placeholder.svg",
    contentType: "Writing",
    image: "/placeholder.svg?height=400&width=600",
    likes: 532,
    comments: 67,
    price: "Free",
    description:
      "The first chapter of an epic fantasy series following the journey of a reluctant hero in a world of magic.",
    isPremium: false,
  },
]

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
