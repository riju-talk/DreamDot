import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahartist",
    avatar: "/placeholder.svg",
    role: "Digital Artist",
    content:
      "DreamDOT changed my life! I went from struggling freelancer to earning $5K/month selling my art. The community is incredibly supportive.",
    rating: 5,
    earnings: "$5,200/mo",
  },
  {
    name: "Marcus Johnson",
    handle: "@beatsbymarcus",
    avatar: "/placeholder.svg",
    role: "Music Producer",
    content:
      "The platform makes it so easy to sell beats and connect with artists. I've built a loyal fanbase and steady income stream.",
    rating: 5,
    earnings: "$3,800/mo",
  },
  {
    name: "Elena Rodriguez",
    handle: "@storybyelena",
    avatar: "/placeholder.svg",
    role: "Writer",
    content:
      "Finally, a platform that values writers! My subscribers love my stories, and I love the freedom to create on my own terms.",
    rating: 5,
    earnings: "$2,400/mo",
  },
]

export function LandingTestimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">Real creators, real results, real dreams achieved</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="dream-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">{testimonial.earnings}</p>
                    <p className="text-xs text-muted-foreground">Monthly earnings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
