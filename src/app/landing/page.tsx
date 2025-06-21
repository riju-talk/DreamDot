import { LandingNav } from "@/components/landing-nav"
import { LandingHero } from "@/components/landing-hero"
import { LandingFeatures } from "@/components/landing-features"
import { LandingStats } from "@/components/landing-stats"
import { LandingTestimonials } from "@/components/landing-testimonials"
import { LandingCTA } from "@/components/landing-cta"
import { LandingFooter } from "@/components/landing-footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingStats />
      <LandingTestimonials />
      <LandingCTA />
      <LandingFooter />
    </div>
  )
}
