import { TrendingUp, Users, Star, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "2.4M+",
    label: "Active Creators",
    description: "Building their dreams daily",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    value: "$50M+",
    label: "Creator Earnings",
    description: "Paid out this year",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Star,
    value: "15M+",
    label: "Dreams Shared",
    description: "Creative works published",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Heart,
    value: "95%",
    label: "Revenue Share",
    description: "Creators keep most earnings",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function LandingStats() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-primary">Millions</span>
          </h2>
          <p className="text-xl text-muted-foreground">Join the largest community of creative entrepreneurs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4`}>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
