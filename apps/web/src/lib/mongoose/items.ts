import mongoose, { Collection } from 'mongoose'
import { connectToDatabase } from "./connection"
import { Item } from "./types/Item"
import { prismaItem } from "../db"

const { Schema } = mongoose

// Define the schema
const ItemSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number },
  sales: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

// Create model if it doesn't exist
export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema)

// TypeScript interface for fetch options
interface FetchItemsOptions {
  userId?: string
  page?: number
  limit?: number
  category?: string
}

// Main fetch function
export async function fetchItems(options: FetchItemsOptions = {}): Promise<{
  items: Item[]
  pagination: {
    total: number
    page: number
    limit: number
    hasMore: boolean
  }
}> {
  try {
    const { userId, page = 1, limit = 10, category } = options
    const skip = (page - 1) * limit

    // Mongo Connection
    const db = (await connectToDatabase()).connection.db
    const itemsCollection = db.collection("items") as Collection<Item>

    // Query construction
    const query: any = {} 
    if (userId) query.userId = userId
    if (category) query.category = category 
    // Fetch items from MongoDB
    const mongoItems = await itemsCollection
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray()

    const totalCount = await itemsCollection.countDocuments(query)

    // Prepare list of item _ids from Mongo
    const mongoIds = mongoItems.map((item) => item._id.toString())

    // Fetch corresponding PostgreSQL items
    const sqlItems = await prismaItem.items.findMany({
      where: {
        item_id: { in: mongoIds },
      },
      select: {
        item_id: true,
        price: true,
        category: true,
        reviews: {
          select: {
            rating: true,
          },
        },
        transactions: true,
      },
    })

    // Map PostgreSQL data for merging
    const itemDataMap = new Map(
      sqlItems.map((sqlItem) => {
        const ratings = sqlItem.reviews.map(r => r.rating ?? 0)
        const averageRating =
          ratings.length > 0
            ? ratings.reduce((a, b) => a + b, 0) / ratings.length
            : null

        return [
          sqlItem.item_id,
          {
            price: parseFloat(sqlItem.price?.toString() ?? "0"),
            rating: averageRating,
            sales: sqlItem.transactions.length,
          },
        ]
      })
    )

    // Merge both Mongo + PostgreSQL into final item object
    const items = mongoItems.map((mongoItem) => {
      const mongoId = mongoItem._id.toString()
      const sqlData = itemDataMap.get(mongoId)

      return {
        ...mongoItem,
        _id: mongoId,
        price: sqlData?.price ?? 0,
        rating: sqlData?.rating ?? null,
        sales: sqlData?.sales ?? 0,
      }
    })

    return {
      items,
      pagination: {
        total: totalCount,
        page,
        limit,
        hasMore: skip + items.length < totalCount,
      },
    }
  } catch (error) {
    console.error('Error fetching items:', error)
    throw error
  }
}
