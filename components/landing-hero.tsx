"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { redirectToFeed } from "@/lib/route-protection"

export function LandingHero({ videoUrls }: { videoUrls: string[] }) {
  const handleGetStarted = () => redirectToFeed()
  const handleExploreFeatures = () => redirectToFeed()
  const handleStartCreating = () => redirectToFeed()

  // Select a random video on each render
  const randomVideoUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

  return (
    <div className="relative bg-[#0A0D13] text-white overflow-hidden h-max py-16"> {/* Fixed height of 20rem (320px) */}
      {/* Video Background */}
      {randomVideoUrl && (
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60"
          >
            <source src={randomVideoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D13]/10 to-[#0A0D13]/40"></div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6 relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-8 w-full text-center">
          {/* Hero Section */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Unleash Your <span className="text-green-400">Creativity</span>
            </h1>

            <p className="text-xl text-gray-300 mt-4">
              The ultimate platform for writers, creators, and innovators to share their vision with the world.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-400 text-black hover:bg-green-400/90 text-lg px-8 border-0"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-green-400 text-green-400 hover:bg-green-400/10"
                onClick={handleExploreFeatures}
              >
                Explore Features
              </Button>
            </div>

            <div className="mt-6 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">2kb+</span>
                <span className="text-gray-300">Creators</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">4.8G</span>
                <span className="text-gray-300">(12k reviews)</span>
              </div>
            </div>
          </div>

          {/* Craft Your Story Section */}
          <div className="bg-[#0D1117] rounded-xl p-6 md:p-8 flex items-center justify-center max-w-xl">
            <div className="text-center md:text-left w-full flex items-center justify-center flex-col">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Craft Your Story, <span className="text-blue-400">Share Your Vision</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                A unified platform for writers, creators, and artists to collaborate, publish, and grow their audience.
              </p>
              <Button
                size="lg"
                className="bg-blue-400 text-black hover:bg-blue-400/90 mt-6 text-lg px-8 align-middle"
                onClick={handleStartCreating}
              >
                Start Creating
              </Button>
              <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                <Card className="bg-[#0A0D13] text-white border-none">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">2.4M+</div>
                    <div className="text-white mt-2">Active Users</div>
                  </CardContent>
                </Card>
                <Card className="bg-[#0A0D13] text-white border-none">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">$50M+</div>
                    <div className="text-white mt-2">Creator Earnings</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}