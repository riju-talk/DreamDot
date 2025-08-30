import mongoose, { Types } from "mongoose";

const membershipSchema = new mongoose.Schema({
  conversationId: { type: Types.ObjectId, ref: "Conversation", required: true },
  userId: { type: Types.ObjectId, ref: "User", required: true },
  role: { type: String, enum: ["owner", "admin", "member", "banned"], required: true },
  joinedAt: { type: Date, default: Date.now }
});

membershipSchema.index({ conversationId: 1, userId: 1 }, { unique: true });

export const Membership = mongoose.model("Membership", membershipSchema);
