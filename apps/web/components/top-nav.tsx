"use client"

import { useState, useEffect, useRef } from "react"
import { ModeToggle } from "./mode-toggle"
import { UserNav } from "./user-nav"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, PointerIcon as SidebarTrigger, User, Users, MessageSquare, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { searchUsers } from "@/lib/search"
import Link from "next/link"

interface SearchResult {
  type: 'user' | 'post' | 'marketplace'
  id: string
  title: string
  subtitle?: string
  avatar?: string
  searchScore?: number
}

function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Perform search when debounced query changes
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResults([])
      return
    }

    performSearch(debouncedQuery)
  }, [debouncedQuery])

  // Close search on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const performSearch = async (query: string) => {
    setIsLoading(true)
    try {
      // Search users (profiles)
      const users = await searchUsers(query)
      const userResults: SearchResult[] = users.slice(0, 5).map(user => ({
        type: 'user',
        id: user.user_id,
        title: user.display_name || user.username,
        subtitle: `@${user.username}`,
        avatar: user.avatar_url,
        searchScore: user.searchScore
      }))

      setSearchResults(userResults)
    } catch (error) {
      console.error('Search error:', error)
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearchFocus = () => {
    setIsSearchOpen(true)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
    setIsSearchOpen(false)
  }

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'user': return <User className="h-4 w-4" />
      case 'post': return <MessageSquare className="h-4 w-4" />
      case 'marketplace': return <Search className="h-4 w-4" />
      default: return <Search className="h-4 w-4" />
    }
  }

  const getResultLink = (result: SearchResult) => {
    switch (result.type) {
      case 'user': return `/profile/${result.id}`
      case 'post': return `/post/${result.id}`
      case 'marketplace': return `/product/${result.id}`
      default: return '#'
    }
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search people, posts, products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={handleSearchFocus}
        className="pl-8 pr-8 rounded-full"
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
          onClick={handleClearSearch}
        >
          <X className="h-3 w-3" />
        </Button>
      )}

      {/* Search Results Dropdown */}
      {isSearchOpen && (debouncedQuery.trim() || searchResults.length > 0) && (
        <Card className="absolute top-12 left-0 right-0 z-50 max-h-96 overflow-hidden shadow-lg">
          <CardContent className="p-2">
            {isLoading ? (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent" />
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-1">
                <div className="px-2 py-1 text-xs font-medium text-muted-foreground border-b">
                  Search Results
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {searchResults.map((result) => (
                    <Link
                      key={`${result.type}-${result.id}`}
                      href={getResultLink(result)}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors w-full"
                    >
                      {result.avatar ? (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={result.avatar} />
                          <AvatarFallback>{result.title.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          {getResultIcon(result.type)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{result.title}</p>
                        {result.subtitle && (
                          <p className="text-xs text-muted-foreground truncate">{result.subtitle}</p>
                        )}
                      </div>
                      {result.searchScore && (
                        <Badge variant="secondary" className="text-xs">
                          {Math.round((1 - result.searchScore) * 100)}%
                        </Badge>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ) : debouncedQuery.trim() ? (
              <div className="text-center py-4 text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No results found for "{debouncedQuery}"</p>
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

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
              pathname === "/feed" ? "text-primary" : "text-muted-foreground",
            )}
            asChild
          >
            <a href="/feed">Home</a>
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
        <div className="hidden md:flex">
          <GlobalSearch />
        </div>
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  )
}
