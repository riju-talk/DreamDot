import { NextResponse } from "next/server"
import ImageKit from "imagekit"

// Only expose secret server-side
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,  // used on client
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,            // only used server-side
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
})

export async function GET() {
  try {
    const result = imagekit.getAuthenticationParameters()
    return NextResponse.json(result)
  } catch (err) {
    console.error("ImageKit Auth Error:", err)
    return NextResponse.json({ error: "Failed to generate auth parameters" }, { status: 500 })
  }
}
