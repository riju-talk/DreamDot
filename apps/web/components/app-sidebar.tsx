"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  Home,
  Compass,
  ShoppingBag,
  BarChart3,
  Bell,
  MessageSquare,
  PlusSquare,
  Wallet,
  Settings,
  HelpCircle,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function AppSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname?.startsWith("/feed") || pathname === "/"
  const isDiscover = pathname?.startsWith("/discover")
  const isMarketplace = pathname?.startsWith("/marketplace")
  return (
    <Sidebar className="h-screen flex flex-col overflow-hidden" variant="inset" collapsible="icon">
      <SidebarHeader className="p-4 overflow-hidden flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative overflow-hidden rounded-lg p-1.5 bg-primary">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-primary">
            DreamDOT
          </span>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="flex-1 overflow-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>Explore</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={Boolean(isHome)}>
                  <Link href="/feed">
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={Boolean(isDiscover)}>
                  <Link href="/discover">
                    <Compass />
                    <span>Discover</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={Boolean(isMarketplace)}>
                  <Link href="/marketplace">
                    <ShoppingBag />
                    <span>Marketplace</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/analytics">
                    <BarChart3 />
                    <span>Insights</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/notifications">
                    <Bell />
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/messages">
                    <MessageSquare />
                    <span>Messages</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Creator Studio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/create">
                    <PlusSquare />
                    <span>Create Dream</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/wallet">
                    <Wallet />
                    <span>Wallet</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/settings">
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/about">
                    <HelpCircle />
                    <span>About Author</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 overflow-hidden flex-shrink-0">
        <Button className="w-full dream-button" size="lg" onClick={() => router.push("/create")}>
          <PlusSquare className="mr-2 h-4 w-4" />
          Create New Dream
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}