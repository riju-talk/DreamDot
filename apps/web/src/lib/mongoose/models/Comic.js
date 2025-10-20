import mongoose from 'mongoose'
const { Schema } = mongoose

const ComicSchema = new Schema({
  creatorId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  thumbnailUrl: String,
  category: { type: String, enum: ["manga", "webcomic", "graphic-novel", "comic-strip", "other"], default: "webcomic" },
  tags: [String],
  pages: [
    {
      pageNumber: Number,
      imageUrl: String,
      altText: String,
    }
  ],
  totalPages: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  monetizationType: { type: String, enum: ["free", "one-time", "subscription"], default: "free" },
  currency: { type: String, default: "USD" },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  ratings: [
    {
      userId: String,
      rating: Number,
      review: String,
      timestamp: { type: Date, default: Date.now },
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: true },
  isCompleted: { type: Boolean, default: false },
})

export default mongoose.models.Comic || mongoose.model("Comic", ComicSchema)
