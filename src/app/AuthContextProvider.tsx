// contexts/AuthContext.tsx
"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import {
  User,
  getStoredUser,
  storeUser,
  clearStoredUser,
  signInApi,
  signUpApi,
} from "@/lib/Auth" // adjust path as needed

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
}

/**
 * Create the context.
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined)

/**
 * Provider component. Wrap your app (e.g., in layout.tsx or App.tsx) with <AuthProvider>.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // On mount, initialize from localStorage
  useEffect(() => {
    const existing = getStoredUser()
    if (existing) {
      setUser(existing)
    }
    setIsLoading(false)
  }, [])

  /**
   * signIn: calls API, stores user on success, updates context state.
   */
  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const u = await signInApi(email, password)
      setUser(u)
      storeUser(u)
    } catch (err) {
      // propagate error
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * signUp: calls API, stores new user
   */
  const signUp = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      const u = await signUpApi(name, email, password)
      setUser(u)
      storeUser(u)
    } catch (err) {
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * signOut: clear state and storage
   */
  const signOut = () => {
    setUser(null)
    clearStoredUser()
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * Hook to consume auth context.
 */
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (ctx === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return ctx
}
