import Link from "next/link";
import { Facebook, Twitter, Instagram, GitHub, LinkedIn, Pinterest, Reddit } from "@mui/icons-material";
import { getAllVideoLanding } from "../lib/media_fetching";
import CardContainer from "./(components)/card_container";
import LandingHero from "./(components)/landing_hero";
import {CommunityLanding, PublishingLanding} from "./(components)/pub_com_hero";
import { Button } from 'antd';

export default async function Home() {
  const videoUrls = await getAllVideoLanding();

  return (
    <>
      {/* Modern Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-3xl text-indigo-600">✍️</span>
            <h1 className="text-xl font-bold text-gray-800">DreamDOT</h1>
          </div>
          <div className="flex space-x-4">
            <Button 
              type="text" 
              className="text-gray-600 hover:text-indigo-600"
              href="/auth/signin"
            >
              Sign In
            </Button>
            <Button 
              type="primary" 
              className="bg-indigo-600 hover:bg-indigo-700"
              href="/auth/register"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="overflow-x-hidden">
        <section className="relative h-[700px] flex items-center justify-center">
          <LandingHero videoUrls={videoUrls} />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Craft Your Story, <br/>
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Share Your Vision
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              A unified platform for writers, creators, and artists to collaborate, 
              publish, and grow their audience.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="large" 
                type="primary" 
                className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 text-lg"
                href="/auth"
              >
                Start Creating
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              The Only Limit is your imagination.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2">Writing & Blogging</h3>
                <p className="text-gray-600">
                  Distraction-free editor with markdown support and seamless publishing.
                </p>
              </div>
              <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 text-4xl mb-4">🎧</div>
                <h3 className="text-xl font-semibold mb-2">Audio Production</h3>
                <p className="text-gray-600">
                  A market place for samples for your upcoming hit music or your upcoming viral video.
                </p>
              </div>
              <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
                <p className="text-gray-600">
                  Share your talent of video editing, sell special effects, brand marketing and your special exclusive content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Join Creative Circles
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  Connect with like-minded creators in specialized communities. 
                  Share feedback, collaborate on projects, and grow together.
                </p>
                <CommunityLanding />
              </div>
            </div>
          </div>
        </section>

        {/* Publishing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Publish with Purpose
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From draft to distribution - reach your audience across multiple 
                platforms with one click.
              </p>
            </div>
            <PublishingLanding />
            <CardContainer />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Unleash Your Creativity?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators already shaping the future of content.
            </p>
            <Button 
              size="large" 
              type="primary" 
              className="bg-white text-indigo-600 hover:bg-gray-100 h-14 px-12 text-lg"
              href="/auth"
            >
              Start Your Journey
            </Button>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span className="text-xl font-bold">DreamDOT</span>
              </div>
              <p className="text-sm max-w-xs">
                Empowering creators worldwide with intuitive tools and a supportive community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div>
                <h4 className="text-gray-400 font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/features" className="hover:text-white">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-400 font-semibold mb-4">Connect</h4>
                <div className="flex gap-4">
                  {[Facebook, GitHub, LinkedIn, Twitter, Instagram].map((Icon, index) => (
                    <Link 
                      key={index} 
                      href="#" 
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <Icon className="text-2xl" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
            © 2025 DreamDOT. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}