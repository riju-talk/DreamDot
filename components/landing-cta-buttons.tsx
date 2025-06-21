import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, BookOpen, Users, Zap, Heart } from "lucide-react"
import Link from "next/link"

const ctaButtons = [
  {
    icon: Play,
    title: "Watch Demo",
    description: "See how creators are building their dreams",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverColor: "hover:bg-primary/20",
    href: "/demo",
  },
  {
    icon: BookOpen,
    title: "Creator Guide",
    description: "Learn how to maximize your earnings",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    hoverColor: "hover:bg-secondary/20",
    href: "/guide",
  },
  {
    icon: Users,
    title: "Join Community",
    description: "Connect with 2M+ creators worldwide",
    color: "text-accent",
    bgColor: "bg-accent/10",
    hoverColor: "hover:bg-accent/20",
    href: "/community",
  },
  {
    icon: Zap,
    title: "Success Stories",
    description: "Read how creators earn $10K+ monthly",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverColor: "hover:bg-primary/20",
    href: "/stories",
  },
]

export function LandingCTAButtons() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your <span className="text-primary">Creative Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore everything DreamDot has to offer and join thousands of successful creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ctaButtons.map((button, index) => {
            const IconComponent = button.icon
            return (
              <Card
                key={index}
                className={`dream-card group cursor-pointer transition-all duration-300 ${button.hoverColor} border-0`}
                asChild
              >
                <Link href={button.href}>
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${button.bgColor} mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className={`h-6 w-6 ${button.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {button.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{button.description}</p>
                    <ArrowRight className="h-4 w-4 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </CardContent>
                </Link>
              </Card>
            )
          })}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8" asChild>
              <Link href="/signup">
                <Heart className="mr-2 h-5 w-5" />
                Start Creating Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="/discover">Explore Dreams</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Free forever • No setup fees • 95% revenue share</p>
        </div>
      </div>
    </section>
  )
}
