"use client";


import { Github, User } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function AboutPage() {
    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <AppSidebar />
                <div className="flex-1 flex flex-col">
                    <TopNav />
                    <main className="flex-1 container mx-auto px-4 py-6">
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
                                        A home for creators to share dreams, collaborate, and inspire.
                                    </p>
                                </div>

                                {/* Sections: Why, Our Story, Our Mission, Join Us */}
                                <div className="space-y-8">
                                    {/* Why DreamDot? */}
                                    <Card className="border-l-4 border-teal-500 dark:border-teal-300 shadow-lg hover:shadow-xl transition-shadow duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-2xl text-teal-600 dark:text-teal-300">
                                                Why DreamDot?
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-base text-foreground/90">
                                            DreamDot was created to provide a platform for creators to share their dreams and connect with a community of like-minded individuals. Our mission is to inspire creativity and foster collaboration among artists, writers, musicians, and more, offering a space where imagination can thrive.
                                        </CardContent>
                                    </Card>

                                    {/* Our Story */}
                                    <Card className="border-l-4 border-emerald-500 dark:border-emerald-300 shadow-lg hover:shadow-xl transition-shadow duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-2xl text-emerald-600 dark:text-emerald-300">
                                                Our Story
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-base text-foreground/90">
                                            DreamDot was founded in 2023 by a group of passionate creators who wanted to build a space where imagination could flourish. Our platform is designed to empower artists, writers, musicians, and dreamers of all kinds to share their work, collaborate with others, and find inspiration in a supportive community.
                                        </CardContent>
                                    </Card>

                                    {/* Our Mission */}
                                    <Card className="border-l-4 border-green-500 dark:border-green-300 shadow-lg hover:shadow-xl transition-shadow duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-2xl text-green-600 dark:text-green-300">
                                                Our Mission
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-base text-foreground/90">
                                            Our mission is to foster creativity and connection. We believe that everyone has a unique story to tell and that by sharing our dreams, we can inspire others and create a ripple effect of innovation and artistry.
                                        </CardContent>
                                    </Card>

                                    {/* Join Us */}
                                    <Card className="border-l-4 border-blue-aqua-500 dark:border-blue-aqua-300 shadow-lg hover:shadow-xl transition-shadow duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-2xl text-blue-aqua-600 dark:text-blue-aqua-300">
                                                Join Us
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-base text-foreground/90">
                                            Join us on this journey to make the world a more creative place. Whether you’re here to showcase your work, discover new talent, or simply explore the boundless possibilities of human imagination, DreamDot is your home for all things creative.
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Buttons / CTAs */}
                                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                                    <Button
                                        asChild
                                        className="flex items-center justify-center space-x-2 bg-primary hover:bg-teal-500 text-primary-foreground"
                                    >
                                        <a
                                            href="https://github.com/your-repo" // replace with real repo
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-5 h-5" />
                                            <span>Visit Our GitHub</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="flex items-center justify-center space-x-2 text-primary hover:text-teal-500 border-primary hover:border-teal-500 hover:bg-transparent"
                                    >
                                        <a href="/about-creator">
                                            <User className="w-5 h-5" />
                                            <span>Know More About the Creator</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </main>
                    <MobileNav />
                </div>
            </div>
        </SidebarProvider>
    )
}