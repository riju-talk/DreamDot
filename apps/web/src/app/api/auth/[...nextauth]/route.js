// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prismaUser } from "@/lib/db"

export const authOptions = {
  adapter: PrismaAdapter(prismaUser),
  session: {
    strategy: "jwt",
  },

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
          include: { user_profile: true },
        })
        if (!user || !user.password_hash) return null
        const valid = await bcrypt.compare(credentials.password, user.password_hash)
        if (!valid) return null

        // Return exactly what you want in session.user
        return {
          id: user.id,
          email: user.email,
          name: user.user_profile?.display_name ?? "",
          image: user.user_profile?.avatar_url ?? "/placeholder.svg",
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

  // === Custom Pages ===
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    newUser: "/auth/register",
  },

  // Use JWT session (no database sessions table)
  session: {
    strategy: "jwt",
  },

  // Encrypt & sign cookies / JWTs
  secret: process.env.NEXTAUTH_SECRET,

  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production"
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
