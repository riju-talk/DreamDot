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
                  <h2 className="text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-fade-in">
                    About the Author
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    A vision by <span className="font-semibold text-foreground italic">Rijusmit</span>. Architecting the future of digital expression.
                  </p>
                </div>

                {/* Author sections */}
                <div className="space-y-8">
                  <Card className="rounded-xl shadow-md hover:shadow-lg transition bg-card border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">The Visionary</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-foreground/90">
                      Rijusmit is a dreamer, designer, and developer focused on breaking the barriers of traditional digital interaction.
                      DreamDot is the culmination of a desire to create a weightless, organic space for creativity to flourish.
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl shadow-md hover:shadow-lg transition bg-card border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-accent">The Philosophy</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-foreground/90">
                      Believing that minimalism is the bridge to inspiration, the creator has woven "Organic Futurism" into every pixel—
                      balancing high-tech functionality with the fluid grace of nature.
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl shadow-md hover:shadow-lg transition bg-card border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-emerald-500">The Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-foreground/90">
                      To empower every visionary with tools that feel like an extension of thought.
                      DreamDot isn't just a platform; it's a creative atelier for the next generation of storytellers.
                    </CardContent>
                  </Card>
                </div>

                {/* Join Us CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground p-8 text-center shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-2">Connect with the Voice</h3>
                  <p className="mb-4 text-lg">Follow the journey and contribute to the evolution of DreamDot.</p>
                  <div className="flex justify-center gap-4">
                    <Button asChild className="bg-background text-foreground hover:bg-accent/20">
                      <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">Collaborate on GitHub</a>
                    </Button>
                  </div>
                </motion.div>

                {/* Footer CTAs */}
                <div className="flex justify-center gap-4 mt-6">
                  <Button asChild className="flex items-center gap-2 bg-primary hover:opacity-90 text-primary-foreground">
                    <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                      Visit GitHub
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
