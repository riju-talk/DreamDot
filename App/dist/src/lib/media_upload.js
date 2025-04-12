// lib/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});
export async function uploadImageToCloudinary(filePath) {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: "image",
        });
        return result.secure_url;
    }
    catch (error) {
        console.error("Cloudinary upload error:", error);
        throw error;
    }
}
//# sourceMappingURL=media_upload.js.map