// lib/Auth.ts

export interface User {
  id: string
  name: string
  email: string
  handle: string
  avatar: string
  verified: boolean
}

/**
 * Key used in localStorage to persist user session.
 */
const STORAGE_KEY = "dreamdot_user"

/**
 * Retrieve stored user from localStorage.
 */
export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as User
  } catch {
    return null
  }
}

/**
 * Store user in localStorage.
 */
export function storeUser(user: User): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

/**
 * Clear stored user from localStorage.
 */
export function clearStoredUser(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}

/**
 * Mock sign-in function.
 * Replace this with real API call as needed.
 */
export async function signInApi(email: string, password: string): Promise<User> {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 800))
  // Mock response: you can validate email/password format here or call real endpoint
  if (!email || !password) {
    throw new Error("Email and password are required")
  }
  // Return a mock user
  return {
    id: "1",
    name: "Jane Doe",
    email,
    handle: "@janedoe",
    avatar: "/placeholder.svg",
    verified: true,
  }
}

/**
 * Mock sign-up function.
 * Replace with real API call.
 */
export async function signUpApi(name: string, email: string, password: string): Promise<User> {
  await new Promise((res) => setTimeout(res, 800))
  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required")
  }
  // Return a mock new user
  const handle = `@${name.trim().toLowerCase().replace(/\s+/g, "")}`
  return {
    id: Date.now().toString(),
    name: name.trim(),
    email,
    handle,
    avatar: "/placeholder.svg",
    verified: false,
  }
}
