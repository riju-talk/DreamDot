import { LandingNav } from "../../components/landing-nav"
import { LandingHero } from "../../components/landing-hero"
import { LandingFeatures } from "../../components/landing-features"
import { LandingStats } from "../../components/landing-stats"
import { LandingTestimonials } from "../../components/landing-testimonials"
import { LandingCTA } from "../../components/landing-cta"
import { LandingFooter } from "../../components/landing-footer"

const videoUrls: string[] = [
  "https://res.cloudinary.com/diaoy8eua/video/upload/v1731766743/Pages/car_in_dessert.mp4",
  "https://res.cloudinary.com/diaoy8eua/video/upload/v1731766738/Pages/morning_cup_coffee.mp4",
  "https://res.cloudinary.com/diaoy8eua/video/upload/v1731766740/Pages/reading_in_library.mp4",
  "https://res.cloudinary.com/diaoy8eua/video/upload/v1731766738/Pages/code_on_desktop.mp4",
  "https://res.cloudinary.com/diaoy8eua/video/upload/v1731764920/samples/sea-turtle.mp4"
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <LandingHero videoUrls={videoUrls} />
      <LandingFeatures />
      <LandingStats />
      <LandingTestimonials />
      <LandingCTA />
      <LandingFooter />
    </div>
  )
}


  