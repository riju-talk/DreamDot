import mongoose, { Types } from "mongoose";

const conversationSchema = new mongoose.Schema({
  type: { type: String, enum: ["dm", "community"], required: true },
  title: { type: String },
  members: [{ type: Types.ObjectId, ref: "User" }],
  adminIds: [{ type: Types.ObjectId, ref: "User" }],
  ownerId: { type: Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

export const Conversation = mongoose.model("Conversation", conversationSchema);
