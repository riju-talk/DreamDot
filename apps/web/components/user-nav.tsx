"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useSession, signOut as nextAuthSignOut } from "next-auth/react"

export function UserNav() {
  const { data: session, status } = useSession()
  const sessionUser = session?.user

  const handleSignOut = async () => {
    await nextAuthSignOut({ callbackUrl: "/" })
  }

  // Show loading state
  if (status === "loading") {
    return (
      <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
    )
  }

  // Show sign in/up buttons when not authenticated
  if (status === "unauthenticated" || !session) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
          <Link href="/auth/signin">Sign In</Link>
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
          <Link href="/auth/register">
            <span className="hidden sm:inline">Sign Up</span>
            <span className="sm:hidden">Join</span>
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8 ring-2 ring-background">
            <AvatarImage src={sessionUser?.image || "/placeholder.svg"} alt={sessionUser?.name || ""} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {sessionUser?.name?.substring(0, 2).toUpperCase() || "user"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{sessionUser?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{sessionUser?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/create">Create</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
