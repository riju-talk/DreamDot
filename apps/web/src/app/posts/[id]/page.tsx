"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../../../../components/app-sidebar";
import { TopNav } from "../../../../components/top-nav";
import { MobileNav } from "../../../../components/mobile-nav";
import { Textarea } from "@/components/ui/textarea";

export default function PostViewPage() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Post Section */}
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/user.jpg" />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        ArtisticVision ✨
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Posted 2 hours ago
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base">
                      Just finished this cyberpunk cityscape! Spent 12
                      hours on the neon reflections alone 🌃✨
                    </p>
                    <div className="aspect-video w-full rounded-xl bg-muted" />
                    <div className="flex flex-wrap gap-2">
                      {["#digitalart", "#cyberpunk", "#neonvibes"].map(
                        (tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        )
                      )}
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <div className="flex gap-6">
                        <span>💗 1,243</span>
                        <span>💬 89</span>
                        <span>🔁 34</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Bookmark
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Comments Section */}
              <div className="flex flex-col border rounded-xl p-4 max-h-[calc(100vh-150px)]">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                <div className="overflow-y-auto flex-1 space-y-4 pr-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start text-sm"
                    >
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">User{i + 1}</p>
                        <p className="text-muted-foreground">
                          This is awesome! Great work 🔥
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-3" />
                <div className="space-y-2">
                  <Textarea
                    placeholder="Add a comment..."
                    className="min-h-[80px]"
                  />
                  <Button className="w-full">Post Comment</Button>
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
