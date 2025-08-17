import { Card, CardContent } from "@/components/ui/card"
import { Palette, Music, PenTool, Camera, Video, BookOpen, Layers, Code } from "lucide-react"

const categories = [
  {
    name: "Digital Art",
    icon: Palette,
    count: "12.5K",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Music & Audio",
    icon: Music,
    count: "8.2K",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Writing",
    icon: PenTool,
    count: "6.8K",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Photography",
    icon: Camera,
    count: "15.3K",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Video",
    icon: Video,
    count: "4.7K",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Courses",
    icon: BookOpen,
    count: "3.2K",
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Design Assets",
    icon: Layers,
    count: "9.1K",
    color: "from-teal-500 to-green-600",
  },
  {
    name: "Code & Tech",
    icon: Code,
    count: "2.8K",
    color: "from-violet-500 to-purple-600",
  },
]

export function ProductCategories() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Browse by Category</h2>
        <p className="text-muted-foreground">Find exactly what you're looking for</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Card
              key={category.name}
              className="dream-card group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mb-3`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} products</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
