import { MarketplaceHero } from "@/components/marketplace-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, SlidersHorizontal, Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: "1",
    title: "Digital Art Collection: Neon Dreams",
    creator: "ArtisticVision",
    image: "/placeholder.svg?height=400&width=600",
    price: "$45",
    category: "Art",
    sales: 243,
    rating: 4.8,
  },
  {
    id: "2",
    title: "Urban Photography Masterclass",
    creator: "StreetLens",
    image: "/placeholder.svg?height=400&width=600",
    price: "$79",
    category: "Course",
    sales: 189,
    rating: 4.9,
  },
  {
    id: "3",
    title: "The Midnight Chronicles: Complete Series",
    creator: "StoryWeaver",
    image: "/placeholder.svg?height=400&width=600",
    price: "$24",
    category: "Writing",
    sales: 312,
    rating: 4.7,
  },
  {
    id: "4",
    title: "Ambient Soundscapes Collection",
    creator: "SonicArtist",
    image: "/placeholder.svg?height=400&width=600",
    price: "$35",
    category: "Audio",
    sales: 178,
    rating: 4.6,
  },
  {
    id: "5",
    title: "Cinematic Visual Effects Pack",
    creator: "VisualWizard",
    image: "/placeholder.svg?height=400&width=600",
    price: "$59",
    category: "Video",
    sales: 201,
    rating: 4.8,
  },
  {
    id: "6",
    title: "Illustrated Comic Series: Dystopia",
    creator: "ComicCreator",
    image: "/placeholder.svg?height=400&width=600",
    price: "$19",
    category: "Comics",
    sales: 156,
    rating: 4.5,
  },
]

export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <MarketplaceHero />

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search marketplace..."
              className="pl-8 w-full md:w-[300px] rounded-full"
            />
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 rounded-full">
          <TabsTrigger value="all" className="rounded-full">
            All
          </TabsTrigger>
          <TabsTrigger value="art" className="rounded-full">
            Art
          </TabsTrigger>
          <TabsTrigger value="writing" className="rounded-full">
            Writing
          </TabsTrigger>
          <TabsTrigger value="audio" className="rounded-full">
            Audio
          </TabsTrigger>
          <TabsTrigger value="video" className="rounded-full">
            Video
          </TabsTrigger>
          <TabsTrigger value="courses" className="rounded-full">
            Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="dream-card overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Link
                      href={`/product/${product.id}`}
                      className="font-medium hover:underline line-clamp-1 hover:text-primary transition-colors"
                    >
                      {product.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">by {product.creator}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-bold text-lg text-primary">{product.price}</div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{product.sales} sold</div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
