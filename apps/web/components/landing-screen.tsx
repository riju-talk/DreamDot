"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, PenTool, Music, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingScreen() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="dark min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground relative">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <span className="text-lg font-serif tracking-tight font-bold">DreamDOT</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#" className="hover:text-foreground transition-colors">Manifesto</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Creators</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Pricing</Link>
                </div>

                <div className="flex gap-4">
                    <Link href="/api/auth/signin">
                        <Button variant="ghost" className="rounded-full hover:bg-white/5">Login</Button>
                    </Link>
                    <Link href="/api/auth/signin">
                        <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 shadow-[0_0_20px_-5px_rgba(140,221,129,0.5)]">
                            Start Creating
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
                {/* Abstract 3D Fluid Background (Simulated with CSS & Generated Image) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-blob" />
                    <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-[#8CDD81]/20 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-blob animation-delay-2000" />

                    {/* Real 3D Fluid Asset */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.8, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-overlay"
                    >
                        <img
                            src="/dreamdot_hero.png"
                            alt="Fluid Form"
                            className="w-full h-full object-cover grayscale-[20%] contrast-[110%]"
                        />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="inline-block mb-8"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase backdrop-blur-md">
                            The Operating System for Creativity
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 relative">
                        Craft Your <br className="hidden md:block" />
                        <span className="italic block mt-2 text-white">Story.</span>

                        {/* Custom display type overlay */}
                        <div className="absolute -top-12 -left-12 opacity-10 pointer-events-none select-none hidden lg:block">
                            <span className="text-[200px] font-serif italic text-primary">D.</span>
                        </div>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        A weightless digital atelier for writers, artists, and musicians.
                        Focus on the craft. We handle the gravity.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <Button size="lg" className="h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] group transition-all duration-300">
                            <span className="mr-2">Get Started</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <span className="text-sm text-muted-foreground">Free for first 100 creators</span>
                    </motion.div>
                </div>

                {/* Floating Elements / Parallax */}
                <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[5%] md:left-[10%] z-20 hidden lg:block">
                    <FloatingCard icon={PenTool} label="Drafting" delay={0.2} />
                </motion.div>
                <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[5%] md:right-[10%] z-20 hidden lg:block">
                    <FloatingCard icon={Music} label="Composition" delay={1.5} />
                </motion.div>
                <motion.div style={{ y: y1 }} className="absolute bottom-[20%] left-[15%] z-20 hidden lg:block">
                    <FloatingCard icon={ImageIcon} label="Visuals" delay={2.5} />
                </motion.div>

            </section>
        </div>
    )
}

function FloatingCard({ icon: Icon, label, delay }: { icon: any, label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-4 w-48"
        >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center border border-white/5">
                <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="h-2 w-16 bg-white/10 rounded-full" />
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(140,221,129,0.8)] border-2 border-background" />
        </motion.div>
    )
}
