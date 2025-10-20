"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { redirectToFeed } from "@/lib/route-protection"

export function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleExploreClick = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-md"
          : "relative bg-white"
      } backdrop-blur-md transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg p-1.5 bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-50" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-foreground">DreamDOT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["features", "questions", "explore"].map((item) => (
              <button
                key={item}
                onClick={() => handleExploreClick(item)}
                className="text-sm lg:text-base font-medium hover:text-emerald-600 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button variant="ghost" asChild className="text-sm lg:text-base">
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-emerald-50 hover:from-emerald-700 hover:to-teal-700 shadow-md text-sm lg:text-base"
              asChild
            >
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-emerald-200">
            <div className="flex flex-col space-y-3 pt-4">
              {["features", "questions", "explore"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleExploreClick(item)}
                  className="text-sm font-medium hover:text-emerald-600 transition-colors text-left px-2 py-1"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-emerald-50 hover:from-emerald-700 hover:to-teal-700 w-full"
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
