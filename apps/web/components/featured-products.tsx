import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, ArrowRight } from "lucide-react"
import Image from "next/image"

const featuredProducts = [
  {
    id: "featured-1",
    title: "Complete Digital Art Masterclass",
    creator: "ArtMaster Pro",
    image: "/placeholder.svg?height=300&width=400",
    price: "$149",
    originalPrice: "$299",
    rating: 4.9,
    students: 2340,
    category: "Course",
    featured: true,
  },
  {
    id: "featured-2",
    title: "Premium UI/UX Design Kit",
    creator: "DesignStudio",
    image: "/placeholder.svg?height=300&width=400",
    price: "$89",
    originalPrice: "$149",
    rating: 4.8,
    downloads: 1560,
    category: "Design Assets",
    featured: true,
  },
]

export function FeaturedProducts() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Button variant="outline" className="gap-2 rounded-full">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="dream-card group overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <Badge variant="outline" className="w-fit">
                      {product.category}
                    </Badge>

                    <div>
                      <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">by {product.creator}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span>{product.rating}</span>
                      </div>
                      <span>
                        {product.students ? `${product.students} students` : `${product.downloads} downloads`}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-primary font-bold">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
