"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export function useAuth() {
  const { data: session, status } = useSession()

  const isLoading = status === "loading"
  const isAuthenticated = status === "authenticated"
  const user = session?.user ?? null

  return {
    user,
    isLoading,
    isAuthenticated,
    signIn,
    signOut,
  }
}
