"use client"
import { ContentCard } from "@/components/content-card"

const contentItems = [
  {
    id: "1",
    title: "Digital Art Collection: Neon Dreams",
    creator: "ArtisticVision",
    creatorImage: "/placeholder.svg",
    contentType: "Art",
    image: "/placeholder.svg?height=400&width=600",
    likes: 1243,
    comments: 89,
    price: "$45",
    description: "A collection of 10 digital art pieces exploring futuristic cityscapes with vibrant neon aesthetics.",
    isPremium: true,
  },
  {
    id: "2",
    title: "Urban Photography Masterclass",
    creator: "StreetLens",
    creatorImage: "/placeholder.svg",
    contentType: "Course",
    image: "/placeholder.svg?height=400&width=600",
    likes: 876,
    comments: 124,
    price: "$79",
    description: "Learn how to capture stunning urban landscapes and street photography with this comprehensive guide.",
    isPremium: true,
  },
  {
    id: "3",
    title: "The Midnight Chronicles: Chapter 1",
    creator: "StoryWeaver",
    creatorImage: "/placeholder.svg",
    contentType: "Writing",
    image: "/placeholder.svg?height=400&width=600",
    likes: 532,
    comments: 67,
    price: "Free",
    description:
      "The first chapter of an epic fantasy series following the journey of a reluctant hero in a world of magic.",
    isPremium: false,
  },
  {
    id: "4",
    title: "Ambient Soundscapes Vol. 3",
    creator: "SonicArtist",
    creatorImage: "/placeholder.svg",
    contentType: "Audio",
    image: "/placeholder.svg?height=400&width=600",
    likes: 987,
    comments: 45,
    price: "$12",
    description: "A collection of immersive ambient tracks perfect for focus, meditation, or creative work.",
    isPremium: true,
  },
]

export function HomeFeed() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">For You</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contentItems.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
