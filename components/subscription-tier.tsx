import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Users } from "lucide-react"

interface SubscriptionTierProps {
  tier: {
    id: string
    name: string
    price: string
    description: string
    benefits: string[]
    subscribers: number
  }
}

export function SubscriptionTier({ tier }: SubscriptionTierProps) {
  return (
    <Card className="dream-card relative">
      {tier.id === "premium" && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{tier.name}</CardTitle>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl text-primary font-bold">{tier.price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <p className="text-muted-foreground">{tier.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{tier.subscribers} subscribers</span>
        </div>
        <ul className="space-y-2">
          {tier.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
      </CardFooter>
    </Card>
  )
}
