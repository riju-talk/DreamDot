import { Card, CardContent } from "@/components/ui/card"
import { PenTool, Music, Video, Camera, BookOpen, Palette } from "lucide-react"

const features = [
  {
    icon: PenTool,
    title: "Writing & Blogging",
    description: "Distraction-free editor with markdown support and seamless publishing.",
    color: "text-emerald-600",
    bgColor: "bg-gradient-to-br from-emerald-100 to-green-100",
    borderColor: "border-emerald-200 hover:border-emerald-400"
  },
  {
    icon: Music,
    title: "Audio Production",
    description: "A marketplace for samples for your upcoming hit music or your upcoming viral video.",
    color: "text-teal-600",
    bgColor: "bg-gradient-to-br from-teal-100 to-emerald-100",
    borderColor: "border-teal-200 hover:border-teal-400"
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Share your talent of video editing, sell special effects, brand marketing and your special exclusive content.",
    color: "text-green-600",
    bgColor: "bg-gradient-to-br from-green-100 to-teal-100",
    borderColor: "border-green-200 hover:border-green-400"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Showcase your photography portfolio and sell high-resolution images to clients worldwide.",
    color: "text-emerald-600",
    bgColor: "bg-gradient-to-br from-emerald-100 to-teal-100",
    borderColor: "border-emerald-200 hover:border-emerald-400"
  },
  {
    icon: BookOpen,
    title: "Publishing",
    description: "From draft to distribution - reach your audience across multiple platforms with one click.",
    color: "text-teal-600",
    bgColor: "bg-gradient-to-br from-teal-100 to-green-100",
    borderColor: "border-teal-200 hover:border-teal-400"
  },
  {
    icon: Palette,
    title: "Digital Art",
    description: "Upload and showcase your digital artwork, illustrations, and creative designs to a global audience.",
    color: "text-green-600",
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-100",
    borderColor: "border-green-200 hover:border-green-400"
  },
]

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            The Only Limit is Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Imagination</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, collaborate, and monetize your creative work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card 
                key={index} 
                className={`dream-card group hover:shadow-2xl transition-all duration-300 border-2 ${feature.borderColor} overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.bgColor} mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
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
