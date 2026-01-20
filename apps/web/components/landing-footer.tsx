import Link from "next/link"
import { Sparkles, Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react"

export function LandingFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#216869] to-[#1f2421] dark:from-[#1f2421] dark:to-[#216869] text-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="relative overflow-hidden rounded-lg p-1.5 bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">DreamDOT</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xs leading-relaxed">
              Empowering creators worldwide with intuitive tools and a supportive community.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 text-base sm:text-lg">Platform</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#questions" className="text-muted-foreground hover:text-primary transition-colors">
                  Questions
                </Link>
              </li>
              <li>
                <Link href="" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 text-base sm:text-lg">Community</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/account" className="text-muted-foreground hover:text-primary transition-colors">
                  For Creators
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-muted-foreground hover:text-primary transition-colors">
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 text-base sm:text-lg">Connect</h4>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <Link 
                  key={index} 
                  href={href} 
                  className="p-2 hover:bg-primary/20 rounded-full transition-all border border-primary/20 hover:border-primary/40"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-emerald-300">
          © 2025 DreamDOT. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
