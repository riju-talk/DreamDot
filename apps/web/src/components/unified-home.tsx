"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Plus, Mic, Image as ImageIcon, FileText, MoreHorizontal,
    ArrowRight, PenTool, Music
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { TopNav } from "../../components/top-nav";
import Link from "next/link";

const MOCK_ITEMS = [
    {
        id: 1,
        type: "audio",
        title: "Synthwave Explorations",
        date: "2h ago",
        image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2574&auto=format&fit=crop",
        height: "h-64",
    },
    {
        id: 2,
        type: "article",
        title: "The Future of Digital Ownership",
        excerpt: "Exploring how NFTs and blockchain are reshaping the creator economy...",
        date: "5h ago",
        height: "h-auto",
    },
    {
        id: 3,
        type: "image",
        title: "Neon Nights",
        date: "1d ago",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2670&auto=format&fit=crop",
        height: "h-96",
    },
    {
        id: 4,
        type: "image",
        title: "Abstract Fluids",
        date: "2d ago",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        height: "h-72",
    },
    {
        id: 5,
        type: "audio",
        title: "Midnight Jazz",
        date: "3d ago",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop",
        height: "h-64",
    },
    {
        id: 6,
        type: "article",
        title: "Visual Design Systems",
        excerpt: "Why consistency is key to building a scalable brand identity in 2026.",
        date: "4d ago",
        height: "h-auto",
    },
];

export function UnifiedHome({ session }: { session: any }) {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <SidebarProvider defaultOpen>
            <div className="flex w-full h-screen overflow-hidden bg-background">
                <AppSidebar />
                <SidebarInset className="flex-1 overflow-auto relative">
                    <TopNav />

                    {/* Persistent Background Ambient Glows */}
                    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen opacity-30 animate-pulse" />
                        <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-20" />
                        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] opacity-10 animate-blob" />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={session ? "dashboard" : "landing"}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 min-h-full"
                        >
                            {!session ? (
                                /* --- LANDING MODE: THE DREAM --- */
                                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
                                    <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                                        <img
                                            src="/dreamdot_hero.png"
                                            alt="DreamDOT Fluid"
                                            className="w-full h-full object-cover scale-110 motion-safe:animate-[pulse_10s_infinite]"
                                        />
                                    </div>

                                    <div className="relative z-10 text-center max-w-6xl">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1 }}
                                            className="inline-block mb-12"
                                        >
                                            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-[10px] md:text-xs font-mono tracking-[0.4em] uppercase backdrop-blur-2xl">
                                                The Architecture of Imagination
                                            </span>
                                        </motion.div>

                                        <motion.h1
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            className="text-7xl md:text-9xl lg:text-[12rem] font-serif tracking-tighter leading-[0.85] mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20 select-none"
                                        >
                                            Unbind <br />
                                            <span className="italic opacity-60">Thought.</span>
                                        </motion.h1>

                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.7 }}
                                            transition={{ delay: 0.5, duration: 1.5 }}
                                            className="text-xl md:text-3xl text-foreground font-light max-w-3xl mx-auto mb-16 leading-relaxed"
                                        >
                                            A weightless digital atelier for the visionaries. <br className="hidden md:block" />
                                            Escape gravity. Craft with light and sound.
                                        </motion.p>

                                        <div className="flex flex-col items-center gap-8">
                                            <Link href="/api/auth/signin">
                                                <Button size="lg" className="h-20 px-12 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary text-sm font-mono tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_0_50px_-10px_rgba(140,221,129,0.5)] hover:shadow-[0_0_80px_-5px_rgba(140,221,129,0.7)] hover:scale-105 border border-white/20 backdrop-blur-3xl">
                                                    Get Started
                                                </Button>
                                            </Link>
                                            <p className="text-[10px] font-mono text-foreground/30 tracking-widest uppercase animate-pulse">
                                                Transmission established / 2026
                                            </p>
                                        </div>
                                    </div>

                                    {/* Cinematic Overlays */}
                                    <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0A0D0A] to-transparent z-10" />

                                    <motion.div style={{ y: y1 }} className="absolute top-[15%] left-[8%] z-20 hidden xl:block">
                                        <FloatingCard icon={PenTool} label="Drafting" delay={0.2} />
                                    </motion.div>
                                    <motion.div style={{ y: y2 }} className="absolute top-[25%] right-[8%] z-20 hidden xl:block">
                                        <FloatingCard icon={Music} label="composition" delay={1.4} />
                                    </motion.div>
                                    <motion.div style={{ y: y1 }} className="absolute bottom-[15%] left-[12%] z-20 hidden xl:block">
                                        <FloatingCard icon={ImageIcon} label="visuals" delay={2.6} />
                                    </motion.div>
                                </section>
                            ) : (
                                /* --- DASHBOARD MODE: THE ATELIER --- */
                                <div className="p-8 md:p-20 max-w-[1600px] mx-auto space-y-24">
                                    <header className="relative py-20 border-b border-foreground/5 overflow-hidden rounded-[64px] bg-foreground/[0.02] backdrop-blur-3xl px-12 md:px-24">
                                        {/* Sub-bg for header */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
                                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(140,221,129,0.8)] animate-pulse" />
                                                    <span className="text-[10px] font-mono text-primary tracking-[0.4em] uppercase">Status: Creative Node Active</span>
                                                </div>
                                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground tracking-tighter leading-[0.8] mb-8">
                                                    Welcome, <br />
                                                    <span className="text-foreground/30 italic">{session.user.name?.split(' ')[0] || 'Visionary'}.</span>
                                                </h1>
                                                <p className="text-xl md:text-2xl text-muted-foreground/60 font-light max-w-xl">
                                                    Your workspace is primed for creation. <br />
                                                    Minimalism is the bridge to inspiration.
                                                </p>
                                            </div>

                                            <div className="flex flex-col items-center md:items-end gap-6">
                                                <Link href="/feed">
                                                    <Button size="lg" className="h-24 px-12 rounded-[32px] bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/10 hover:border-primary/50 transition-all duration-700 backdrop-blur-2xl group flex flex-col items-start justify-center gap-1 min-w-[300px]">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xl font-serif">Enter the Stream</span>
                                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 text-primary" />
                                                        </div>
                                                        <span className="text-[10px] font-mono text-foreground/40 tracking-[0.2em] uppercase">Join the Collective Flow</span>
                                                    </Button>
                                                </Link>
                                                <div className="flex gap-4">
                                                    <div className="px-4 py-2 rounded-full border border-foreground/5 bg-foreground/5 backdrop-blur-md">
                                                        <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">3 New Inspirations</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </header>

                                    {/* Masonry: Curated Exhibition */}
                                    <div className="space-y-12">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-3xl font-serif italic text-foreground/40">Recent Artifacts.</h2>
                                            <div className="h-[1px] flex-1 mx-12 bg-foreground/5" />
                                            <Button variant="link" className="text-primary font-mono text-xs tracking-widest uppercase hover:opacity-100 opacity-60">View Archive</Button>
                                        </div>

                                        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                                            {MOCK_ITEMS.map((item, i) => (
                                                <motion.div
                                                    key={item.id}
                                                    initial={{ opacity: 0, y: 40 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                                    className="break-inside-avoid"
                                                >
                                                    <div className="group relative bg-card backdrop-blur-3xl border border-foreground/[0.03] rounded-[48px] overflow-hidden hover:border-primary/20 transition-all duration-1000">
                                                        {item.image && (
                                                            <div className={cn("relative w-full overflow-hidden", item.height)}>
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.title}
                                                                    className="object-cover w-full h-full transition-all duration-[2s] group-hover:scale-110 filter saturate-[0.8] brightness-[0.9] group-hover:saturate-[1.1] group-hover:brightness-100"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                                            </div>
                                                        )}

                                                        <div className="p-10 relative">
                                                            <div className="flex items-center justify-between mb-8">
                                                                <div className="w-12 h-12 bg-foreground/[0.02] rounded-[20px] flex items-center justify-center backdrop-blur-md border border-foreground/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-700">
                                                                    {item.type === 'audio' && <Mic className="w-5 h-5 text-primary/70" />}
                                                                    {item.type === 'image' && <ImageIcon className="w-5 h-5 text-primary/70" />}
                                                                    {item.type === 'article' && <FileText className="w-5 h-5 text-primary/70" />}
                                                                </div>
                                                                <span className="text-[10px] font-mono text-foreground/10 uppercase tracking-[0.3em] group-hover:text-primary/40 transition-colors">{item.type}</span>
                                                            </div>

                                                            <h3 className="font-serif text-3xl lg:text-4xl mb-4 text-foreground/90 group-hover:text-foreground transition-colors duration-700 leading-tight">
                                                                {item.title}
                                                            </h3>

                                                            {item.excerpt && (
                                                                <p className="text-foreground/30 leading-relaxed mb-10 font-light text-base md:text-lg">
                                                                    {item.excerpt}
                                                                </p>
                                                            )}

                                                            <div className="flex items-center justify-between pt-8 border-t border-foreground/5 opacity-40 group-hover:opacity-100 transition-opacity">
                                                                <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-[0.2em]">
                                                                    {item.date}
                                                                </span>
                                                                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20 hover:text-primary text-foreground/20">
                                                                    <Plus className="w-5 h-5" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="fixed bottom-10 right-10 z-50 group flex items-center gap-5 bg-primary text-primary-foreground px-10 py-6 rounded-full shadow-[0_20px_50px_-10px_rgba(140,221,129,0.5)] border border-foreground/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(140,221,129,0.7)] hover:bg-primary/90"
                            >
                                <span className="font-mono text-xs font-bold tracking-[0.4em] uppercase">Get Started</span>
                                <div className="w-10 h-10 rounded-2xl bg-foreground/20 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground/30 transition-colors">
                                    <Plus className="w-6 h-6 transition-transform duration-700 group-hover:rotate-90" />
                                </div>
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </SidebarInset>
            </div>
        </SidebarProvider >
    );
}

function FloatingCard({ icon: Icon, label, delay }: { icon: any, label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl flex items-center gap-6 w-64 group hover:border-primary/30 transition-colors duration-700 hover:bg-white/[0.05]"
        >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center border border-white/5 transition-transform duration-700 group-hover:scale-110">
                <Icon className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-3 flex-1">
                <div className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.3em] group-hover:text-primary/60 transition-colors">{label}</div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ delay: delay + 0.5, duration: 1.5 }}
                        className="h-full w-full bg-gradient-to-r from-primary/40 to-transparent"
                    />
                </div>
                <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
            </div>
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(140,221,129,1)] border-2 border-[#0A0D0A]" />
        </motion.div>
    );
}
