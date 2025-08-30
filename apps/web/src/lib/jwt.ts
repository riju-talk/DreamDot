import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!
const JWT_EXPIRES_IN = "7d"             // adjust as you like

export function signJwt<T extends object>(payload: T) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

export function verifyJwt<T extends object>(token: string): T | null {
  try {
    return jwt.verify(token, JWT_SECRET) as T
  } catch {
    return null
  }
}
  
import jwt from 'jsonwebtoken'

export function generateChatToken(userId: string, email: string): string {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined')
  }
  
  return jwt.sign(
    { sub: userId, email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export function verifyChatToken(token: string): { sub: string; email: string } | null {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined')
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { sub: string; email: string }
    return decoded
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}
