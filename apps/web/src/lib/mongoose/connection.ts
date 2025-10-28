// src/lib/mongoose/connection.ts
import mongoose, { ConnectOptions, Mongoose } from "mongoose";

// Type definitions for our cache
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var _mongooseCache: MongooseCache | undefined;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  _mongooseCache?: MongooseCache;
};

// Initialize cache (without environment check)
const cached: MongooseCache = globalWithMongoose._mongooseCache || { 
  conn: null, 
  promise: null 
};

if (!globalWithMongoose._mongooseCache) {
  globalWithMongoose._mongooseCache = cached;
}

/**
 * Get MongoDB URI - called only when needed
 */
function getMongoDBUri(): string {
  const uri = 
    process.env.MONGODB_URI 

  if (!uri) {
    const errorMessage = [
      "❌ Missing MongoDB connection string.",
      "Please set MONGODB_URI in your .env.local file and restart the server.",
      "",
      "Current Node environment:", process.env.NODE_ENV
    ].join("\n");
    
    console.error(errorMessage);
    throw new Error("MONGODB_URI_NOT_FOUND");
  }

  console.log('✅ MongoDB URI found');
  return uri;
}

/**
 * Connection options
 */
function getConnectionOptions(): ConnectOptions {
  return {
    bufferCommands: true,
    dbName: process.env.MONGODB_DB_NAME || "dreamdot",
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  };
}

/**
 * Main connection function
 */
export async function connectToDatabase(): Promise<Mongoose> {
  // Get URI only when actually connecting
  const MONGODB_URI = getMongoDBUri();
  const connectionOptions = getConnectionOptions();

  console.log('🔄 connectToDatabase() called');

  // Return existing connection if available and healthy
  if (cached.conn) {
    try {
      await cached.conn.connection.db?.admin()?.ping();
      console.log("🟢 Reusing cached MongoDB connection");
      return cached.conn;
    } catch (error) {
      console.warn("⚠️ Cached connection is stale, creating new connection...");
      cached.conn = null;
      cached.promise = null;
    }
  }

  // Create new connection if no promise exists
  if (!cached.promise) {
    console.log("🔌 Establishing new MongoDB connection...");
    console.log("   Database:", connectionOptions.dbName);

    cached.promise = mongoose.connect(MONGODB_URI, connectionOptions)
      .then((mongooseInstance) => {
        console.log("✅ MongoDB connection established!");
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("❌ MongoDB connection failed:", error.message);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}

export async function closeDatabaseConnection(): Promise<void> {
  if (cached.conn) {
    await cached.conn.connection.close();
    cached.conn = null;
    cached.promise = null;
  }
}
