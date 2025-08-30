import mongoose, { Types } from "mongoose";

const messageSchema = new mongoose.Schema({
  conversationId: { type: Types.ObjectId, ref: "Conversation", required: true },
  senderId: { type: Types.ObjectId, ref: "User", required: true },
  ciphertext: { type: String, required: true },
  nonce: { type: String, required: true },
  keyId: { type: String, required: true },
  attachments: [{ type: Types.ObjectId, ref: "Attachment" }],
  createdAt: { type: Date, default: Date.now },
  editedAt: { type: Date },
  deletedAt: { type: Date },
  status: { type: String, enum: ["sent", "delivered", "seen"], default: "sent" }
});

messageSchema.index({ conversationId: 1, createdAt: -1 });

export const Message = mongoose.model("Message", messageSchema);
