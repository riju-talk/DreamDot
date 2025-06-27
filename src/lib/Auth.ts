"use client"

import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prismaUser } from "./prisma_user" // your custom generated Prisma client
import { getServerSession } from "next-auth"
import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
  useSession,
} from "next-auth/react"
import type { NextAuthOptions } from "next-auth"
import { useCallback } from "react"
import { PrismaAdapter } from "@next-auth/prisma-adapter"


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaUser),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prismaUser.users.findUnique({
          where: { email: credentials.email },
          include: { user_profile: true },
        })

        if (!user || !user.password_hash) return null

        const isValid = await bcrypt.compare(credentials.password, user.password_hash)
        if (!isValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.user_profile?.display_name ?? "",
          avatar: user.user_profile?.avatar_url ?? "/placeholder.svg",
          handle: user.user_profile?.username ?? "",
          verified: user.is_verified,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = {
          ...token.user,
          name: token.user.name,
          email: token.user.email,
          image: token.user.avatar,
        }
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

// Export handler for App Router (/api/auth/[...nextauth]/route.ts)
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

export const auth = () => getServerSession(authOptions)


export function useAuth() {
  const { data: session, status } = useSession()

  const isAuthenticated = !!session?.user
  const signIn = useCallback(
    async (email: string, password: string) => {
      const res = await nextAuthSignIn("credentials", {
        email,
        password,
        redirect: false,
      })
      if (!res?.ok) throw new Error("Invalid credentials")
      return res
    },
    []
  )
  const signUp = useCallback(
    async (name: string, email: string, password: string) => {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || "Failed to register")
      }

      return res.json()
    },
    []
  )
  const signOut = useCallback(() => nextAuthSignOut(), [])

  return {
    user: session?.user ?? null,
    isAuthenticated,
    isLoading: status === "loading",
    signIn,
    signUp,
    signOut,
  }
}
