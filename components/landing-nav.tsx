"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { redirectToFeed } from "@/lib/route-protection"

export function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleExploreClick = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[teal-50]/95 backdrop-blur-md border-b border-[teal-200]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative overflow-hidden rounded-lg p-1.5 bg-emerald-500">
              <Sparkles className="h-6 w-6 text-emerald-50" />
            </div>
            <span className="font-bold text-xl">DreamDOT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["features", "community", "testimonials"].map((item) => (
              <button
                key={item}
                onClick={() => handleExploreClick(item)}
                className="text-sm font-medium hover:text-emerald-700 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => redirectToFeed()}
              className="text-sm font-medium hover:text-emerald-700 transition-colors"
            >
              Explore
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button
              className="bg-emerald-600 text-emerald-50 hover:bg-emerald-700"
              asChild
            >
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[teal-200]">
            <div className="flex flex-col space-y-4 pt-4">
              {["features", "community", "testimonials"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleExploreClick(item)}
                  className="text-sm font-medium hover:text-emerald-700 transition-colors text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button
                onClick={() => redirectToFeed()}
                className="text-sm font-medium hover:text-emerald-700 transition-colors text-left"
              >
                Explore
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button
                  className="bg-emerald-600 text-emerald-50 hover:bg-emerald-700"
                  asChild
                >
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
