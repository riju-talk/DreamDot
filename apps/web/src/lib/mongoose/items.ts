// src/lib/mongoose/items.ts

import mongoose, { Collection } from "mongoose";
import { connectToDatabase } from "./connection";
import { Item } from "./types/Item";
import { prismaItem } from "../db";

// Minimal schema to provide ItemModel for other modules (e.g., feed-logic)
// Use strict:false to accommodate varying document shapes
const { Schema } = mongoose;
const ItemSchema = new Schema({}, { strict: false, timestamps: true });
export const ItemModel = mongoose.models?.Item || mongoose.model("Item", ItemSchema);

interface FetchItemsOptions {
  userId?: string;
  page?: number;
  limit?: number;
  category?: string;
}

export async function fetchItems(
  options: FetchItemsOptions = {}
): Promise<{
  items: Item[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
  };
}> {
  const { userId, page = 1, limit = 10, category } = options;
  const skip = (page - 1) * limit;

  console.log("📦 fetchItems() called with:", { userId, page, limit, category });

  try {
    console.time("⏱️ fetchItems total duration");

    // --- 1. Connect to MongoDB ---
    console.time("⏱️ MongoDB connect");
    const conn = await connectToDatabase();
    console.timeEnd("⏱️ MongoDB connect");

    const db = conn.connection.db;
    const itemsCollection = db?.collection("items") as Collection<Item>;
    if (!itemsCollection) throw new Error("MongoDB collection 'items' not found");

    // --- 2. Construct Mongo query ---
    const query: Record<string, any> = {};
    if (userId) query.userId = userId;
    if (category) query.category = category;

    console.log("🔍 MongoDB query:", JSON.stringify(query));

    // --- 3. Fetch from Mongo ---
    console.time("⏱️ MongoDB fetch");
    const mongoItems = await itemsCollection
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalCount = await itemsCollection.countDocuments(query);
    console.timeEnd("⏱️ MongoDB fetch");

    console.log(`📊 MongoDB returned ${mongoItems.length} items (total count: ${totalCount})`);

    if (!mongoItems.length) {
      console.warn("⚠️ No MongoDB items found for query");
      return {
        items: [],
        pagination: { total: totalCount, page, limit, hasMore: false },
      };
    }

    // --- 4. Fetch from PostgreSQL (items_d schema) ---
    const mongoIds = mongoItems.map((it) => String(it._id));
    console.log(`🔗 Fetching ${mongoIds.length} corresponding SQL entries from Prisma...`);

    console.time("⏱️ Prisma fetch");
    const sqlItems = await prismaItem.items.findMany({
      where: { item_id: { in: mongoIds } },
      select: {
        item_id: true,
        price: true,
        category: true,
        monetization_type: true,
        reviews: { select: { rating: true } },
        transactions: { select: { transaction_id: true } },
      },
    });
    console.timeEnd("⏱️ Prisma fetch");

    console.log(`📊 Prisma returned ${sqlItems.length} matching records`);

    // --- 5. Normalize SQL results ---
    const sqlMap = new Map<
      string,
      { price: number; rating: number | null; sales: number; monetizationType: string | null }
    >();

    for (const s of sqlItems) {
      const ratings = s.reviews?.map((r) => r.rating ?? 0) ?? [];
      const avgRating = ratings.length
        ? ratings.reduce((a, b) => a + b, 0) / ratings.length
        : null;

      sqlMap.set(s.item_id, {
        price: parseFloat(s.price?.toString() ?? "0"),
        rating: avgRating,
        sales: s.transactions?.length ?? 0,
        monetizationType: s.monetization_type ?? null,
      });
    }

    console.log("🧩 SQL map keys:", [...sqlMap.keys()].slice(0, 5), "...");

    // --- 6. Merge Mongo + SQL ---
    const mergedItems: Item[] = mongoItems.map((mongo) => {
      const mongoId = String(mongo._id);
      const sql = sqlMap.get(mongoId);

      return {
        ...mongo,
        _id: mongoId,
        price: sql?.price ?? mongo.price ?? 0,
        rating: sql?.rating ?? mongo.ratings?.length ?? null,
        sales: sql?.sales ?? 0,
        monetizationType: sql?.monetizationType ?? mongo.monetizationType ?? "one-time",
      } as Item;
    });

    console.log(`🧠 Merged ${mergedItems.length} Mongo+SQL records`);
    console.timeEnd("⏱️ fetchItems total duration");

    // --- 7. Return merged result ---
    return {
      items: mergedItems,
      pagination: {
        total: totalCount,
        page,
        limit,
        hasMore: skip + mergedItems.length < totalCount,
      },
    };
  } catch (err) {
    console.error("💥 Error in fetchItems:", err);
    throw err;
  }
}

