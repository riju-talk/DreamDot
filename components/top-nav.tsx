"use client"

import { ModeToggle } from "./mode-toggle"
import { UserNav } from "./user-nav"
import { Input } from "@/components/ui/input"
import { Search, PointerIcon as SidebarTrigger } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function TopNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarTrigger className="md:hidden h-8 w-8" />

      <div className="hidden md:flex md:flex-1">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Button
            variant="link"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
            asChild
          >
            <a href="/">Home</a>
          </Button>
          <Button
            variant="link"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/discover" ? "text-primary" : "text-muted-foreground",
            )}
            asChild
          >
            <a href="/discover">Discover</a>
          </Button>
          <Button
            variant="link"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/marketplace" ? "text-primary" : "text-muted-foreground",
            )}
            asChild
          >
            <a href="/marketplace">Marketplace</a>
          </Button>
        </nav>
      </div>

      <div className="flex flex-1 items-center justify-end space-x-4">
        <div className="relative w-full max-w-sm hidden md:flex">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search dreams..." className="pl-8 rounded-full" />
        </div>
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  )
}
