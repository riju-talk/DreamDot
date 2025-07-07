import { connectToDatabase } from "./connection"
import { ItemDocument } from "./models"
import { Collection } from "mongodb"
import { prismaItem } from "../db"

interface FetchItemsOptions {
  userId?: string
  page?: number
  limit?: number
  category?: string
}

export async function fetchItems(options: FetchItemsOptions = {}) {
  const { userId, page = 1, limit = 10, category } = options
  const skip = (page - 1) * limit

  // Mongo Connection
  const db = (await connectToDatabase()).connection.db
  const itemsCollection = db.collection("items") as Collection<ItemDocument>

  // Mongo Query Construction
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

  // Fetch corresponding PostgreSQL items (items table) using mongoId
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
      price: sqlData?.price ?? null,
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
}
