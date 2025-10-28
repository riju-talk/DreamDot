// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { prismaUser } from "@/lib/db";

export const authOptions = {
  adapter: PrismaAdapter(prismaUser),

  session: {
    strategy: "jwt",
  },

  providers: [
    // === Credentials Login ===
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw "Invalid credentials";
        }

        try {
          const user = await prismaUser.users.findUnique({
            where: { email: credentials.email },
            include: { user_profile: true },
          });

          if (!user || !user.password_hash) {
            throw "Invalid credentials";
          }

          const valid = await bcrypt.compare(credentials.password, user.password_hash);

          if (!valid) {
            throw "Invalid credentials";
          }

          const userObject = {
            id: user.id,
            email: user.email,
            name: user.user_profile?.display_name ?? "",
            image: user.user_profile?.avatar_url ?? "/placeholder.svg",
          };

          return userObject;
        } catch (error) {
          console.error("🔥 [authorize] Error during login:", error);
          throw "Something went wrong. Please try again.";
        }
      },
    }),

    // === Google OAuth (conditionally enabled) ===
    ...(process.env.GOOGLE_OAUTH_ENABLED === "true" && 
        process.env.GOOGLE_CLIENT_ID && 
        process.env.GOOGLE_CLIENT_SECRET
      ? [GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })]
      : []),

    // === GitHub OAuth (conditionally enabled) ===
    ...(process.env.GITHUB_OAUTH_ENABLED === "true" && 
        process.env.GITHUB_ID && 
        process.env.GITHUB_SECRET
      ? [GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        })]
      : []),
  ],

  callbacks: {
    async jwt({ token, user, account, profile, trigger }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.accessToken = token;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    newUser: "/auth/register",
  },

  secret: process.env.NEXTAUTH_SECRET,

  cookies: {
    sessionToken: {
      name:
        process.env.NODE_ENV === "production"
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
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
