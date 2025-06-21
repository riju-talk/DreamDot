import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: string
    title: string
    image: string
    price: string
    category: string
    sales: number
    rating: number
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="dream-card overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{product.category}</Badge>
        </div>
        <div className="p-4">
          <div className="space-y-2">
            <Link
              href={`/product/${product.id}`}
              className="font-medium hover:underline line-clamp-1 hover:text-primary transition-colors"
            >
              {product.title}
            </Link>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="font-bold text-lg text-primary">{product.price}</div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">{product.sales} sold</div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          <ShoppingCart className="h-4 w-4" />
          View Product
        </Button>
      </CardFooter>
    </Card>
  )
}
