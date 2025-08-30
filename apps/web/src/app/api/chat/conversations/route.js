import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { getServerSession } from "next-auth"
import { fetchConversations, createConversation, markConversationAsRead } from "@/lib/mongoose/conversations"

const JWT_SECRET = process.env.NEXTAUTH_SECRET || "your-secret"

export async function GET(req) {
  try {
    const session = await getServerSession()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { conversations } = await fetchConversations(session.user.id)
    return NextResponse.json(conversations)
  } catch (error) {
    console.error("Error fetching conversations:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const { type, name, participantIds } = body

    const allParticipants = [session.user.id, ...participantIds]
    
    const { conversation } = await createConversation({
      type,
      name,
      participantIds: allParticipants,
      isPrivate: body.isPrivate || false
    })

    return NextResponse.json(conversation)
  } catch (error) {
    console.error("Error creating conversation:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
