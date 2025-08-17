import mongoose from 'mongoose'
const { Schema } = mongoose

const ItemSchema = new Schema({
  creatorId: { type: String, required: true }, 
  title: { type: String, required: true },
  description: String,
  fileUrl: { type: String, required: true },
  fileType: { type: String, enum: ["image", "video", "audio", "text", "pdf", "other"], default: "other" },
  price: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  createdAt: { type: Date, default: Date.now },
  downloads: { type: Number, default: 0 },
  ratings: [
    {
      userId: String,
      rating: Number,
      review: String,
      timestamp: { type: Date, default: Date.now },
    }
  ]
})

export default mongoose.models.Item || mongoose.model("Item", ItemSchema)
