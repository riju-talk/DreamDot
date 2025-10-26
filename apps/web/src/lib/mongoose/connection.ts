import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGO_CLUSTER || ""

if (!MONGODB_URI) {
  console.log(MONGODB_URI)
  throw new Error("Please define the MONGODB_URI environment variable inside .env")
}

let cached = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "dreamdot",
      serverApi: {
        version: "1" as const,
        strict: true,
        deprecationErrors: true,
      },
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      console.log('MongoDB connected successfully')
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}
