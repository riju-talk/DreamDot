import mongoose from 'mongoose'
const { Schema } = mongoose

const ConversationSchema = new Schema({
  name: String,
  type: { type: String, enum: ['dm', 'group'], required: true },
  isPrivate: { type: Boolean, default: false },
  participants: [
    {
      userId: { type: String, required: true }, // UUID from Postgres
      role: { type: String, enum: ['admin', 'member'], default: 'member' },
    },
  ],
  avatar: String,
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Conversation || mongoose.model("Conversation", ConversationSchema)
