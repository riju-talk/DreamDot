import mongoose from 'mongoose'
const { Schema } = mongoose

const WritingSchema = new Schema({
  creatorId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  thumbnailUrl: String,
  category: { type: String, enum: ["article", "blog", "story", "poem", "tutorial", "review", "other"], default: "blog" },
  tags: [String],
  seoDescription: String,
  readingTime: Number,
  price: { type: Number, default: 0 },
  monetizationType: { type: String, enum: ["free", "one-time", "subscription"], default: "free" },
  currency: { type: String, default: "USD" },
  wordCount: Number,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: [
    {
      userId: String,
      username: String,
      comment: String,
      timestamp: { type: Date, default: Date.now },
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: true },
})

export default mongoose.models.Writing || mongoose.model("Writing", WritingSchema)
