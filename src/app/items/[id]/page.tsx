"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../../../../components/app-sidebar";
import { TopNav } from "../../../../components/top-nav";
import { MobileNav } from "../../../../components/mobile-nav";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

export default function ProductViewPage() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">
              {/* Artist Info */}
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/user.jpg" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-xl font-semibold">ArtisticVision ✨</h1>
                  <p className="text-sm text-muted-foreground">
                    Exploring the digital cosmos — one pixel at a time.
                  </p>
                </div>
              </div>

              {/* Product Card */}
              <Card className="p-0 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video w-full bg-muted rounded-none md:rounded-l-xl" />

                  <div className="p-6 space-y-4">
                    <CardTitle className="text-2xl font-bold">
                      Neon Dreamscape
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      A vivid cyberpunk digital painting capturing the
                      essence of a futuristic city night. Great for collectors,
                      designers, and sci-fi lovers.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["#digitalart", "#cyberpunk", "#premium"].map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-1">
                      <p className="text-muted-foreground text-sm">
                        Type: <span className="font-medium">One-Time Purchase</span>
                      </p>
                      <p className="text-xl font-bold">₹499</p>
                      <Button className="w-full text-lg font-semibold">
                        Buy Now
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center gap-2 pt-2">
                      {[1, 2, 3, 4].map((n) => (
                        <Star key={n} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
                      ))}
                      <Star className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      <span className="ml-2 text-sm text-muted-foreground">
                        4.2 • 89 Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Reviews */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Reviews</h2>

                {/* Review List */}
                {[...Array(2)].map((_, i) => (
                  <Card key={i}>
                    <CardHeader className="flex flex-row items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm">John Star</p>
                        <p className="text-muted-foreground text-xs">2 days ago</p>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 stroke-yellow-500" : "fill-muted stroke-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <p>
                        Absolutely stunning work! The neon effects look vibrant on my display.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Add Review */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Add a Review</h3>
                <div className="space-y-2">
                  <Input placeholder="Your name" />
                  <Textarea placeholder="Write your review..." rows={4} />
                  <Button className="mt-2">Submit Review</Button>
                </div>
              </div>
            </div>
          </main>
          <MobileNav />
        </div>
      </div>
    </SidebarProvider>
  );
}
