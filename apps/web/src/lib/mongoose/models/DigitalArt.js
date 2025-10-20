import mongoose from 'mongoose'
const { Schema } = mongoose

const DigitalArtSchema = new Schema({
  creatorId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  imageUrl: { type: String, required: true },
  thumbnailUrl: String,
  category: { type: String, enum: ["illustration", "photography", "3d-art", "digital-painting", "graphic-design", "other"], default: "illustration" },
  tags: [String],
  dimensions: {
    width: Number,
    height: Number,
  },
  fileSize: Number,
  price: { type: Number, default: 0 },
  monetizationType: { type: String, enum: ["free", "one-time", "subscription"], default: "free" },
  currency: { type: String, default: "USD" },
  views: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
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
})

export default mongoose.models.DigitalArt || mongoose.model("DigitalArt", DigitalArtSchema)
