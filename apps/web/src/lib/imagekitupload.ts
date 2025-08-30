import { upload as ikUpload } from "@imagekit/next"

/**
 * Upload a file to ImageKit via frontend logic, using signed params from API route.
 * Returns the image/file URL on success, or null on error.
 */
export async function uploadImageToImageKit(file: File, folder: string): Promise<string | null> {
  try {
    // Serverless API route to get signature params (never exposes private key!)
    const res = await fetch("/api/imagekit/auth")
    if (!res.ok) {
      console.error("Failed to retrieve ImageKit auth parameters.");
      return null;
    }
    const { token, signature, expire } = await res.json();
    if (!token || !signature || !expire) {
      console.error("Incomplete ImageKit auth parameters:", { token, signature, expire });
      return null;
    }

    // ImageKit upload
    const response = await ikUpload({
      file,
      fileName: file.name,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!, // Must be exposed in env
      signature,
      token,
      expire,
      folder: folder || undefined,
    })

    if (!response || !response.url) {
      console.error("ImageKit did not return a URL:", response)
      return null;
    }

    return response.url
  } catch (error) {
    // This error is caught in any fetch or upload failure
    if (error instanceof Error) {
      console.error("ImageKit Upload Error:", error.message);
    } else {
      console.error("ImageKit Upload Failed:", error);
    }
    return null;
  }
}
