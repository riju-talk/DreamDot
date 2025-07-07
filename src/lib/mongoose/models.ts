import mongoose, { Schema, Document, model } from "mongoose";
import { connectToDatabase } from "./connection"

// --- INTERFACES ---

export interface PostDocument extends Document {
  postId: string // matches posts_metadata.id
  content: string
  mediaUrls: string[]
  additionalData?: Record<string, any>
  createdAt: Date
}

export interface ItemDocument extends Document {
  itemId: string // matches items.item_id
  mediaType: "image" | "video" | "audio" | "blog"
  content: string // actual data (text/blog) or metadata of the media file
  resourceUrl?: string // S3 / CDN link if applicable
  additionalData?: Record<string, any>
  createdAt: Date
}

export interface ConversationDocument extends Document {
  conversationId: string
  participants: string[] // user ids
  isGroup: boolean
  groupName?: string
  messages: {
    senderId: string
    text: string
    sentAt: Date
  }[]
  createdAt: Date
}

// --- SCHEMAS ---

const PostSchema = new Schema<PostDocument>({
  postId: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  mediaUrls: [{ type: String }],
  additionalData: { type: Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
})

const ItemSchema = new Schema<ItemDocument>({
  itemId: { type: String, required: true, unique: true },
  mediaType: {
    type: String,
    enum: ["image", "video", "audio", "blog"],
    required: true,
  },
  content: { type: String, required: true },
  resourceUrl: { type: String },
  additionalData: { type: Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
})

const ConversationSchema = new Schema<ConversationDocument>({
  conversationId: { type: String, required: true, unique: true },
  participants: [{ type: String, required: true }],
  isGroup: { type: Boolean, required: true },
  groupName: { type: String },
  messages: [
    {
      senderId: { type: String, required: true },
      text: { type: String, required: true },
      sentAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
})

// --- MODELS ---

export const PostModel = mongoose.models.Post || model("Post", PostSchema)
export const ItemModel = mongoose.models.Item || model("Item", ItemSchema)
export const ConversationModel =
  mongoose.models.Conversation || model("Conversation", ConversationSchema)

// --- UTILITY FUNCTIONS ---

export async function savePost(post: PostDocument) {
  await connectToDatabase()
  return await new PostModel(post).save()
}

export async function saveItem(item: ItemDocument) {
  await connectToDatabase()
  return await new ItemModel(item).save()
}

export async function saveConversation(conv: ConversationDocument) {
  await connectToDatabase()
  return await new ConversationModel(conv).save()
}
