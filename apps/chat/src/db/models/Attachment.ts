import mongoose, { Types } from "mongoose";

const attachmentSchema = new mongoose.Schema({
  uploaderId: { type: Types.ObjectId, ref: "User", required: true },
  conversationId: { type: Types.ObjectId, ref: "Conversation", required: true },
  filename: { type: String, required: true },
  size: { type: Number, required: true },
  mimeType: { type: String, required: true },
  cipherMeta: {
    algo: { type: String, required: true },
    nonce: { type: String, required: true },
    salt: { type: String },
  },
  createdAt: { type: Date, default: Date.now }
});

export const Attachment = mongoose.model("Attachment", attachmentSchema);
