import { Card, CardContent } from "@/components/ui/card"
import { PenTool, Music, Video, Camera, BookOpen, Palette } from "lucide-react"

const features = [
  {
    icon: PenTool,
    title: "Writing & Blogging",
    description: "Distraction-free editor with markdown support and seamless publishing.",
    color: "text-primary",
    bgColor: "bg-blue-cyan-100",
  },
  {
    icon: Music,
    title: "Audio Production",
    description: "A marketplace for samples for your upcoming hit music or your upcoming viral video.",
    color: "text-primary",
    bgColor: "bg-emerald-100",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Share your talent of video editing, sell special effects, brand marketing and your special exclusive content.",
    color: "text-primary",
    bgColor: "bg-teal-100",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Showcase your photography portfolio and sell high-resolution images to clients worldwide.",
    color: "text-primary",
    bgColor: "bg-blue-cyan-100",
  },
  {
    icon: BookOpen,
    title: "Publishing",
    description: "From draft to distribution - reach your audience across multiple platforms with one click.",
    color: "text-primary",
    bgColor: "bg-emerald-100",
  },
  {
    icon: Palette,
    title: "Digital Art",
    description: "Upload and showcase your digital artwork, illustrations, and creative designs to a global audience.",
    color: "text-primary",
    bgColor: "bg-teal-100",
  },
]

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            The Only Limit is Your <span className="text-primary">Imagination</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, collaborate, and monetize your creative work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="dream-card group hover:shadow-lg transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.bgColor} mb-4`}
                  >
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
