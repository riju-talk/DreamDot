import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { prismaUser } from "@/lib/db"
import bcrypt from "bcryptjs" 

export default NextAuth({
  adapter: PrismaAdapter(prismaUser),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        const user = await prismaUser.users.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.password_hash) return null

        const isValid = await bcrypt.compare(credentials.password, user.password_hash)

        if (!isValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.user_profile?.display_name || "", // Optional
          avatar: user.user_profile?.avatar_url || "/placeholder.svg",
          handle: user.user_profile?.username || "",
          verified: user.is_verified,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
})
