import { prismaItem } from "@/generated/item"
import { connectMongo } from "@/lib/mongodb"
import ItemContent from "@/generated/item/ItemContent"

const prisma = new prismaItem()

export async function POST(req) {
  try {
    const body = await req.json()
    const {
      user_id,
      item_type = "digital",
      title,
      description,
      price = 0,
      currency = "USD",
      content,
      media = [],
      mediaType = "document"
    } = body

    // Step 1: PostgreSQL metadata
    const itemMeta = await prisma.items.create({
      data: {
        user_id,
        item_type,
        title,
        description: description || content?.slice(0, 100) || "",
        price,
        currency,
        visibility: true
      }
    })

    // Step 2: MongoDB content
    await connectMongo()
    const itemContent = await ItemContent.create({
      item_id: itemMeta.id,
      content,
      media,
      mediaType
    })

    return Response.json({
      success: true,
      item_id: itemMeta.id,
      mongo_id: itemContent._id
    })
  } catch (error) {
    console.error("Error creating item:", error)
    return Response.json(
      { success: false, message: "Failed to create item." },
      { status: 500 }
    )
  }
}
