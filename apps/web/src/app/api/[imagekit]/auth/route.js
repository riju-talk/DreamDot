import { NextResponse } from "next/server"
import ImageKit from "imagekit"

// On the server, never leak privateKey to the browser or frontend
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,  // safe to expose
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,            // server only!
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT, // safe to expose
})

/**
 * Returns signed authentication params for client-side ImageKit upload.
 * Never leaks privateKey.
 */
export async function GET() {
  try {
    const result = imagekit.getAuthenticationParameters();
    if (!result || !result.token || !result.signature || !result.expire) {
      return NextResponse.json({ error: "Failed to generate valid ImageKit auth parameters" }, { status: 500 });
    }
    return NextResponse.json(result);
  } catch (err) {
    console.error("ImageKit Auth Error:", err);
    return NextResponse.json({ error: "Failed to generate auth parameters" }, { status: 500 });
  }
}
