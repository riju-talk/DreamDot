import { NextResponse } from "next/server"
import { prismaUser } from "@/lib/db"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"

export async function POST(req) {
  const body = await req.json()
  const { name, email, password } = body

  if (!name || !email || !password) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const normalizedEmail = email.trim().toLowerCase()

  try {
    const result = await prismaUser.$transaction(async (tx) => {
      const existing = await tx.users.findUnique({ where: { email: normalizedEmail } })
      if (existing) {
        throw new Error("EMAIL_EXISTS")
      }

      const password_hash = await bcrypt.hash(password, 10)

      const user = await tx.users.create({
        data: {
          id: uuidv4(),
          email: normalizedEmail,
          password_hash,
          is_verified: false,
        },
      })

      const profile = await tx.user_profile.create({
        data: {
          user_id: user.id,
          display_name: name,
          username: normalizedEmail.split("@")[0],
          avatar_url: "",
          banner_url: "",
        },
      })

      return { user, profile }
    })

    return NextResponse.json(
      {
        message: "Signed up",
        user: {
          id: result.user.id,
          email: result.user.email,
          name: name,
        },
      },
      { status: 201 }
    )
  } catch (err) {
    if (err instanceof Error && err.message === "EMAIL_EXISTS") {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 })
    }
    console.error("Sign-up error:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
