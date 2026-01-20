"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Twitter, Globe, MoreHorizontal, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MOCK_PORTFOLIO = [
  {
    id: 1,
    title: "Ethereal Landscapes",
    type: "Photography",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: 2,
    title: "Minimal Objects",
    type: "3D Render",
    image: "https://images.unsplash.com/photo-1629814408992-06e0000a638b?q=80&w=2670&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 3,
    title: "Typography Studies",
    type: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 4,
    title: "Organic Forms",
    type: "Art Direction",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
];

export default function PublicProfile() {
  const params = useParams();
  const username = params?.id || "Visionary";

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0A0F0D] font-sans selection:bg-[#556B2F] selection:text-white pb-32">
      {/* Analog Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Top Navigation (Minimal) */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center mix-blend-difference text-[#FAFAF9]">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="group rounded-full hover:bg-white/10 text-[#0A0F0D]">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        <span className="text-xs font-mono tracking-widest uppercase opacity-60 text-[#0A0F0D]">DreamDOT Portfolio</span>
      </nav>

      {/* Hero Cover */}
      <header className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Cover"
            className="w-full h-full object-cover grayscale-[20%] contrast-[95%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAF9]" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif tracking-tighter text-[#0A0F0D]"
            >
              {username}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-light text-[#0A0F0D]/70 max-w-xl"
            >
              Digital Artist & Visual Storyteller. Exploring the intersection of nature and technology.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <SocialLink icon={Instagram} />
            <SocialLink icon={Twitter} />
            <SocialLink icon={Globe} />
          </motion.div>
        </div>
      </header>

      {/* Bento Grid Content */}
      <main className="relative z-10 px-4 md:px-12 py-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_PORTFOLIO.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease
              className={cn(
                "group relative bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_-20px_rgba(85,107,47,0.15)] transition-all duration-700",
                item.colSpan,
                item.rowSpan
              )}
            >
              {/* Image Container */}
              <div className="flex h-full min-h-[400px] w-full relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0A0F0D]/0 group-hover:bg-[#0A0F0D]/10 transition-colors duration-500" />

                {/* Floating Info (visible on hover or always visible but subtle) */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl flex justify-between items-center shadow-lg">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-[#556B2F] mb-1">{item.type}</p>
                      <h3 className="text-2xl font-serif text-[#0A0F0D]">{item.title}</h3>
                    </div>
                    <div className="bg-[#556B2F] text-white p-3 rounded-full">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Floating Nav Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
          className="flex items-center gap-2 bg-[#0A0F0D]/90 backdrop-blur-2xl text-[#FAFAF9] p-2 pl-6 pr-2 rounded-full border border-white/10 shadow-2xl"
        >
          <span className="text-sm font-medium mr-4">Get in touch</span>
          <Button size="sm" className="rounded-full bg-[#FAFAF9] text-[#0A0F0D] hover:bg-[#FAFAF9]/90 px-6 font-medium">
            Book Now
          </Button>
        </motion.div>
      </div>

    </div>
  );
}

function SocialLink({ icon: Icon }: { icon: any }) {
  return (
    <Button variant="outline" size="icon" className="rounded-full border-[#0A0F0D]/10 hover:bg-[#0A0F0D] hover:text-[#FAFAF9] transition-colors duration-300 w-12 h-12">
      <Icon className="w-5 h-5" />
    </Button>
  )
}
