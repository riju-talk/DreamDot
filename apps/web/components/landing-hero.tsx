"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { redirectToFeed } from "@/lib/route-protection"
import { motion, AnimatePresence } from "framer-motion"

export function LandingHero({
  videoUrls,
  videoInterval = 10000,
}: {
  videoUrls: string[]
  videoInterval?: number
}) {
  const handleGetStarted = () => redirectToFeed()
  const handleExploreFeatures = () => redirectToFeed()
  const handleStartCreating = () => redirectToFeed()

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!videoUrls || videoUrls.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoUrls.length)
    }, videoInterval)
    return () => clearInterval(interval)
  }, [videoUrls, videoInterval])

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 },
    exit: { opacity: 0 },
  }

  return (
    <div className="relative bg-[#0A0D13] text-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Left: Video + Hero */}
        <div className="relative w-full md:w-2/3 flex-shrink-0">
          <div className="absolute inset-0">
            {videoUrls && videoUrls.length > 0 && (
              <AnimatePresence>
                <motion.video
                  key={videoUrls[currentIndex]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 1 }}
                >
                  <source src={videoUrls[currentIndex]} type="video/mp4" />
                </motion.video>
              </AnimatePresence>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D13]/10 to-[#0A0D13]/40"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full min-h-[60vh] py-16 px-4">
            <div className="flex flex-col items-center justify-center gap-8 w-full text-center max-w-xl mx-auto">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Unleash Your <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Creativity</span>
                </h1>
                <p className="text-xl text-gray-300 mt-4">
                  The ultimate platform for writers, creators, and innovators to share their vision with the world.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-400 to-emerald-500 text-black hover:from-green-500 hover:to-emerald-600 text-lg px-8 border-0 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all"
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg bg-transparent px-8 border-green-400 text-green-400 hover:bg-green-400/10 hover:border-green-300 transition-all"
                    onClick={handleExploreFeatures}
                  >
                    Explore Features
                  </Button>
                </div>
                <div className="mt-6 flex justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl text-green-400">2kb+</span>
                    <span className="text-gray-300">Creators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl text-emerald-400">4.8G</span>
                    <span className="text-gray-300">(12k reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Craft Your Story Section */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-[#11151f] to-[#1a202c] flex items-center justify-center p-6 md:p-8 border-l border-emerald-500/10">
          <div className="text-center md:text-left w-full flex items-center justify-center flex-col max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Craft Your Story, <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Share Your Vision</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              A unified platform for writers, creators, and artists to collaborate, publish, and grow their audience.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-400 to-emerald-500 text-black hover:from-teal-500 hover:to-emerald-600 mt-6 text-lg px-8 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all"
              onClick={handleStartCreating}
            >
              Start Creating
            </Button>
            <div className="mt-6 grid grid-cols-2 gap-4 w-full">
              <Card className="bg-gradient-to-br from-[#0A0D13] to-[#11151f] text-white border border-emerald-500/20 hover:bg-gradient-to-br hover:from-[#11151f] hover:to-[#1a202c] hover:border-emerald-400/40 transition-all hover:shadow-lg hover:shadow-emerald-500/20 group">
                <CardContent className="p-4 text-center">
                  <div className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                    Start Earning
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Be one of the of a bigger world and start earning on your creativity.
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-400 to-emerald-500 text-black hover:from-green-500 hover:to-emerald-600 text-sm px-4 py-1 shadow-md shadow-green-500/20 transition-all"
                    onClick={handleStartCreating}
                  >
                    Sign Up Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#0A0D13] to-[#11151f] text-white border border-teal-500/20 hover:bg-gradient-to-br hover:from-[#11151f] hover:to-[#1a202c] hover:border-teal-400/40 transition-all hover:shadow-lg hover:shadow-teal-500/20 group">
                <CardContent className="p-4 text-center">
                  <div className="text-lg font-semibold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors">
                    Share Feedback
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Help shape DreamDOT—tell us what features you'd love to see.
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-teal-400 to-green-500 text-black hover:from-teal-500 hover:to-green-600 text-sm px-4 py-1 shadow-md shadow-teal-500/20 transition-all"
                    onClick={() => {
                      console.log("Open feedback form");
                    }}
                  >
                    Give Feedback
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
