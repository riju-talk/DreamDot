import mongoose from 'mongoose'
const { Schema } = mongoose

const PostSchema = new Schema({
  userId: { type: String, required: true }, // UUID
  content: { type: String, required: true },
  mediaUrl: String,
  mediaType: { type: String, enum: ["image", "video", "text", "audio"], default: "text" },
  createdAt: { type: Date, default: Date.now },
  visibility: { type: String, enum: ["public", "followers", "private"], default: "public" },
  likes: [String], // UUIDs of users who liked
  comments: [
    {
      userId: String,
      text: String,
      timestamp: { type: Date, default: Date.now },
    }
  ]
})

export default mongoose.models.Post || mongoose.model("Post", PostSchema)
