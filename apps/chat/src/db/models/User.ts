import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  displayName: { type: String },
  avatarUrl: { type: String },
  pubKey: { type: String, required: true }, // X25519 public (base64)
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model("User", userSchema);
