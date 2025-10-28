"use client";
import { Github, User } from "lucide-react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "../../../components/app-sidebar";
import { TopNav } from "../../../components/top-nav";
import { MobileNav } from "../../../components/mobile-nav";
import { ScrollableContent } from "@/components/scrollable-content";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNav />
        <ScrollableContent>
          <main className="container mx-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="py-16 px-4 sm:px-6 lg:px-8 bg-background"
            >
              {/* Container */}
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Heading */}
                <div className="text-center">
                  <h2 className="text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 animate-fade-in">
                    About DreamDot
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    A creative home for dreamers to <span className="font-semibold text-foreground">share, collaborate, and inspire</span>.
                  </p>
                </div>

                {/* Community Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  {[
                    { label: "Founded", value: "2023" },
                    { label: "Interactions", value: "2.4M+" },
                    { label: "Dreamers", value: "180K+" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-xl shadow-md bg-card"
                    >
                      <p className="text-2xl font-bold text-teal-500">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Sections */}
                <div className="space-y-8">
                  <Card className="rounded-xl shadow-md hover:shadow-lg transition">
                    <CardHeader>
                      <CardTitle className="text-2xl text-teal-500">Why DreamDot?</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-foreground/90">
                      DreamDot was created to give <span className="font-semibold">creators a voice</span>. 
                      It’s a platform where ideas flourish and dreamers come together to collaborate, inspire, and grow.
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl shadow-md hover:shadow-lg transition">
                    <CardHeader>
                      <CardTitle className="text-2xl text-emerald-500">Our Story</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-foreground/90">
                      Born from a small group of creators in 2023, DreamDot has become a 
                      <span className="font-semibold"> thriving creative hub</span>—empowering artists, writers, musicians, and storytellers across the globe.
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl shadow-md hover:shadow-lg transition">
                    <CardHeader>
                      <CardTitle className="text-2xl text-green-500">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-foreground/90">
                      To spark <span className="font-semibold">creativity and connection</span>. Every story matters, and together, 
                      we’re weaving a global tapestry of innovation and artistry.
                    </CardContent>
                  </Card>
                </div>

                {/* Join Us CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-500 text-white p-8 text-center shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-2">Join the Dream</h3>
                  <p className="mb-4 text-lg">Showcase your work, explore talent, and connect with dreamers worldwide.</p>
                  <div className="flex justify-center gap-4">
                    <Button asChild className="bg-white text-teal-600 hover:bg-gray-100">
                      <a href="/create">Create Your First Dream</a>
                    </Button>
                    <Button asChild variant="secondary">
                      <a href="/about-creator">Know the Creator</a>
                    </Button>
                  </div>
                </motion.div>

                {/* Footer CTAs */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                  <Button asChild className="flex items-center gap-2 bg-primary hover:bg-teal-500 text-primary-foreground">
                    <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                      Visit GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex items-center gap-2 border-primary hover:border-teal-500">
                    <a href="/about-creator">
                      <User className="w-5 h-5" />
                      About the Creator
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </main>
        </ScrollableContent>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  );
}
