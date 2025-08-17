import { upload as ikUpload } from "@imagekit/next"

export async function uploadImageToImageKit(file: File, folder: string): Promise<string | null> {
  try {
    const res = await fetch("/api/imagekit/auth")
    const { token, signature, expire } = await res.json()

    const response = await ikUpload({
      file,
      fileName: file.name,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      signature,
      token,
      expire,
      folder: folder || undefined,
    })

    return response.url || null
  } catch (error) {
    console.error("ImageKit Upload Failed:", error)
    return null
  }
}