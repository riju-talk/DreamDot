// app/api/auth/signin/route.ts
import { NextResponse } from "next/server"
import { prismaUser } from "@/lib/db"
import bcrypt from "bcryptjs"
import { signJwt } from "@/lib/jwt"

export async function POST(req) {
  const { email, password } = await req.json()
  // 1) Basic validation
  if (!email || !password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 })
  }

  // 2) Find user + profile
  const user = await prismaUser.users.findUnique({
    where: { email },
    include: { user_profile: true },
  })
  if (!user || !user.password_hash) {
    return NextResponse.json({ error: "User not found" }, { status: 401 })
  }

  // 3) Verify password
  const valid = await bcrypt.compare(password, user.password_hash)
  if (!valid) {
    return NextResponse.json({ error: "Password incorrect" }, { status: 401 })
  }

  // 4) Optional: block unverified accounts
  if (!user.is_verified) {
    return NextResponse.json({ error: "Please verify your email first" }, { status: 403 })
  }

  // 5) Sign a JWT with the data your frontend needs
  const token = signJwt({
    id: user.id,
    email: user.email,
    name: user.user_profile?.display_name ?? ""
  })

  // 6) Return token & minimal user info
  return NextResponse.json({
    message: "Sign-in successful",
    token,
    user: {
      id: user.user_profile.user_id,
      email: user.email,
      name: user.user_profile?.display_name,
    },
  })
}
