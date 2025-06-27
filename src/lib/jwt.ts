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
  