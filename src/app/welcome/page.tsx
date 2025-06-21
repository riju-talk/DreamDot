import { LandingHero } from "@/components/landing-hero"
import { LandingFeatures } from "@/components/landing-features"
import { LandingStats } from "@/components/landing-stats"
import { LandingTestimonials } from "@/components/landing-testimonials"
import { LandingCTAButtons } from "@/components/landing-cta-buttons"
import { LandingNav } from "@/components/landing-nav"

export default function WelcomePage() {
  return (
    <div className="min-h-screen">
      <LandingNav />
      <LandingHero />
      <LandingStats />
      <LandingFeatures />
      <LandingTestimonials />
      <LandingCTAButtons />
    </div>
  )
}
