import Link from "next/link"
import { Sparkles, Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react"

export function LandingFooter() {
  return (
    <footer className="bg-blue-aqua-900 text-blue-aqua-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative overflow-hidden rounded-lg p-1.5 bg-transparent">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DreamDOT</span>
            </div>
            <p className="text-sm text-background/70 max-w-xs">
              Empowering creators worldwide with intuitive tools and a supportive community.
            </p>
          </div>

          <div>
            <h4 className="text-background/90 font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#features" className="text-background/70 hover:text-background transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#questions" className="text-background/70 hover:text-background transition-colors">
                  Questions
                </Link>
              </li>
              <li>
                <Link href="" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-background/90 font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="text-background/70 hover:text-background transition-colors">
                  For Creators
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-background/70 hover:text-background transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-background/70 hover:text-background transition-colors">
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-background/90 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <Link key={index} href={href} className="p-2 hover:bg-background/10 rounded-full transition-colors">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/70">
          © 2025 DreamDOT. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
