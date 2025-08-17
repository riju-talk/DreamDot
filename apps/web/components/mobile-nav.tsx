"use client"

import Link from "next/link"
import { Home, Compass, PlusSquare, MessageSquare, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <Link
        href="/feed"
        className={cn(
          "flex flex-col items-center justify-center text-muted-foreground",
          pathname === "/feed" && "text-primary",
        )}
      >
        <Home className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href="/discover"
        className={cn(
          "flex flex-col items-center justify-center text-muted-foreground",
          pathname === "/discover" && "text-primary",
        )}
      >
        <Compass className="h-6 w-6" />
        <span className="text-xs">Discover</span>
      </Link>
      <Link href="/create" className="flex flex-col items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <PlusSquare className="h-6 w-6" />
        </div>
      </Link>
      <Link
        href="/messages"
        className={cn(
          "flex flex-col items-center justify-center text-muted-foreground relative",
          pathname === "/messages" && "text-primary",
        )}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="text-xs">Messages</span>
        <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-primary text-primary-foreground">3</Badge>
      </Link>
      <Link
        href="/profile"
        className={cn(
          "flex flex-col items-center justify-center text-muted-foreground",
          pathname === "/profile" && "text-primary",
        )}
      >
        <User className="h-6 w-6" />
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  )
}
