"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingHero({ videoUrls }) {
    const [videoIndex, setVideoIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setVideoIndex((prev) => (prev + 1) % videoUrls.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [videoUrls.length]);

    return (
        <section className="relative w-full h-[700px] overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.video
                        key={videoIndex}
                        src={videoUrls[videoIndex]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        className="absolute w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70 z-5" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Unleash Your Creativity
                        </span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8"
                    >
                        The ultimate platform for writers, creators, and innovators to share their vision with the world.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex gap-4 justify-center"
                    >
                        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </button>
                        <button className="px-8 py-3 border border-white hover:border-indigo-400 hover:text-indigo-400 text-white rounded-full transition-all duration-300">
                            Explore Features
                        </button>
                    </motion.div>
                </motion.div>

                {/* Video progress indicator */}
                <div className="absolute bottom-8 flex gap-2">
                    {videoUrls.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 w-8 rounded-full transition-all duration-500 ${
                                index === videoIndex 
                                ? 'bg-indigo-500 w-12' 
                                : 'bg-white/30'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}