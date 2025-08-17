import { prismaSocial } from "@/generated/social"
import { connectMongo } from "@/lib/mongodb"
import PostContent from "@/generated/social/PostContent"

const prisma = new prismaSocial()

export async function POST(req) {
  try {
    const body = await req.json()
    const {
      user_id,
      content,
      media = [],
      mediaType = "text"
    } = body

    // Step 1: PostgreSQL metadata
    const postMeta = await prisma.posts_metadata.create({
      data: {
        user_id,
        description: content?.slice(0, 100) || "",
        visibility: true
      }
    })

    // Step 2: MongoDB content
    await connectMongo()
    const postContent = await PostContent.create({
      post_id: postMeta.id,
      content,
      media,
      mediaType
    })

    return Response.json({
      success: true,
      post_id: postMeta.id,
      mongo_id: postContent._id
    })
  } catch (error) {
    console.error("Error creating post:", error)
    return Response.json(
      { success: false, message: "Failed to create post." },
      { status: 500 }
    )
  }
}
