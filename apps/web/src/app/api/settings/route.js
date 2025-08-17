import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prismaUser } from "@/lib/db"

export async function PATCH(req) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await prismaUser.users.findUnique({
    where: { email: session.user.email },
    include: { user_profile: true },
  })

  if (!user || !user.user_profile) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const body = await req.json()
  const { fields, data } = body

  if (!Array.isArray(fields) || typeof data !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const allowedFields = [
    "username", "display_name", "bio", "dob",
    "country", "website", "social_links",
    "avatar_url", "banner_url",
  ]

  const updates = {}

  for (const field of fields) {
    if (!allowedFields.includes(field)) {
      return NextResponse.json({ error: `Field not allowed: ${field}` }, { status: 400 })
    }

    // ✅ Convert "dob" to a valid Date object
    if (field === "dob") {
      try {
        const dateObj = new Date(data.dob)
        if (isNaN(dateObj.getTime())) {
          return NextResponse.json({ error: "Invalid date format for dob" }, { status: 400 })
        }
        updates.dob = dateObj
      } catch (err) {
        return NextResponse.json({ error: "Invalid dob format" }, { status: 400 })
      }
    } else {
      updates[field] = data[field]
    }
  }

  try {
    await prismaUser.user_profile.update({
      where: { user_id: user.id },
      data: updates,
    })

    return NextResponse.json({ success: true, updated: updates })
  } catch (err) {
    console.error("Update error:", err)
    return NextResponse.json({ error: "Update failed" }, { status: 500 })
  }
}


export async function GET(req) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await prismaUser.users.findUnique({
      where: { email: session.user.email },
      include: {
        user_profile: true,
      },
    })
    
    if (!user || !user.user_profile) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      profile: {
        email: user.email,
        username: user.user_profile.username,
        display_name: user.user_profile.display_name,
        bio: user.user_profile.bio,
        dob: user.user_profile.dob,
        country: user.user_profile.country,
        website: user.user_profile.website,
        social_links: user.user_profile.social_links || [],
        avatar_url: user.user_profile.avatar_url,
        banner_url: user.user_profile.banner_url,
      },
    })
  }