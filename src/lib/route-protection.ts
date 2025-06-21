"use client"

import { useAuth } from "@/app/AuthContextProvider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useRequireAuth() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/signin")
    }
  }, [isAuthenticated, isLoading, router])

  return { isAuthenticated, isLoading }
}

export function redirectToAuth(action: "signin" | "signup" = "signin") {
  if (typeof window !== "undefined") {
    window.location.href = `/auth/${action}`
  }
}

export function redirectToFeed() {
  if (typeof window !== "undefined") {
    window.location.href = "/feed"
  }
}
