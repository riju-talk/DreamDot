"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Check, CreditCard, Loader2, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const CREDIT_PACKAGES = [
    {
        id: "starter",
        credits: 100,
        price: 10,
        label: "Starter",
        description: "Perfect for getting started",
        popular: false,
    },
    {
        id: "popular",
        credits: 500,
        price: 45,
        label: "Pro",
        description: "Best value for creators",
        popular: true,
    },
    {
        id: "elite",
        credits: 1000,
        price: 85,
        label: "Elite",
        description: "For serious power users",
        popular: false,
    },
]

export default function PaymentPage() {
    const { data: session } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState<string | null>(null)

    const handlePurchase = async (pkg: typeof CREDIT_PACKAGES[0]) => {
        try {
            setLoading(pkg.id)

            if (!session?.user?.id) {
                toast.error("Please sign in to purchase credits")
                router.push("/login")
                return
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/api/payment/create-checkout-session`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${session.accessToken || ''}` // Ensure token is sent if needed
                },
                body: JSON.stringify({
                    userId: session.user.id,
                    amount: pkg.price,
                    type: "replenish", // or 'credits' if backend updated
                    metadata: {
                        credits: pkg.credits
                    }
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to create checkout session")
            }

            const { url } = await response.json()
            if (url) {
                window.location.href = url
            }
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong. Please try again.")
        } finally {
            setLoading(null)
        }
    }

    return (
        <div className="container mx-auto py-10 px-4 max-w-5xl">
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif text-primary tracking-tight">
                    Purchase Credits
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Unlock premium features and support creators with DreamDot credits.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CREDIT_PACKAGES.map((pkg) => (
                    <Card
                        key={pkg.id}
                        className={`relative flex flex-col border-2 transition-all duration-300 hover:shadow-xl ${pkg.popular
                                ? "border-primary shadow-md scale-105 z-10"
                                : "border-border hover:border-primary/50"
                            }`}
                    >
                        {pkg.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-1 text-sm font-medium">
                                    Most Popular
                                </Badge>
                            </div>
                        )}

                        <CardHeader>
                            <CardTitle className="flex justify-between items-baseline">
                                <span className="text-2xl font-serif">{pkg.label}</span>
                                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
                                    ${pkg.price}
                                </span>
                            </CardTitle>
                            <CardDescription>{pkg.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="flex-1 space-y-4">
                            <div className="flex items-center justify-center p-6 bg-secondary/20 rounded-lg mb-6">
                                <Wallet className="w-8 h-8 text-primary mr-3" />
                                <span className="text-3xl font-bold text-foreground">
                                    {pkg.credits} <span className="text-sm font-normal text-muted-foreground">Credits</span>
                                </span>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center text-sm">
                                    <Check className="w-4 h-4 text-primary mr-2" />
                                    <span>Instant delivery</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Check className="w-4 h-4 text-primary mr-2" />
                                    <span>Secure payment via Stripe</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Check className="w-4 h-4 text-primary mr-2" />
                                    <span>Support your favorite creators</span>
                                </div>
                            </div>
                        </CardContent>

                        <Separator />

                        <CardFooter className="pt-6">
                            <Button
                                className={`w-full text-lg h-12 ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                                variant={pkg.popular ? "default" : "outline"}
                                onClick={() => handlePurchase(pkg)}
                                disabled={!!loading}
                            >
                                {loading === pkg.id ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <CreditCard className="mr-2 h-5 w-5" />
                                        Buy {pkg.credits} Credits
                                    </>
                                )}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center bg-secondary/30 p-8 rounded-xl">
                <h3 className="text-2xl font-serif mb-4">Enterprise or Bulk Needs?</h3>
                <p className="text-muted-foreground mb-6">
                    Contact our sales team for custom packages and volume discounts.
                </p>
                <Button variant="link" className="text-primary text-lg">
                    Contact Sales &rarr;
                </Button>
            </div>
        </div>
    )
}
