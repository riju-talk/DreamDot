import mongoose from "mongoose";

export async function connectDb() {
  if (mongoose.connection.readyState === 1) return;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI environment variable not set");
  await mongoose.connect(uri);
}
