// models/Message.js
import mongoose from 'mongoose'
const { Schema } = mongoose

const MessageSchema = new Schema({
  conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation', required: true },
  senderId: { type: String, required: true }, // UUID
  senderName: String,
  senderAvatar: String,
  content: String,
  type: { type: String, enum: ['text', 'image', 'file', 'audio'], default: 'text' },
  fileName: String,
  timestamp: { type: Date, default: Date.now },
  readBy: [String] // UUIDs of users who have read it
})

export default mongoose.models.Message || mongoose.model("Message", MessageSchema)
