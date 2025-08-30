import { uploadImageToImageKit } from '@/lib/imagekitupload'

export interface MediaUploadResult {
  success: boolean
  url?: string
  error?: string
  type?: 'image' | 'video' | 'audio'
}

export interface MediaValidationResult {
  isValid: boolean
  error?: string
  type?: 'image' | 'video' | 'audio'
  size?: number
}

// Configuration constants
export const MEDIA_CONFIG = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'],
  ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/webm', 'video/quicktime', 'video/avi'],
  ALLOWED_AUDIO_TYPES: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp3'],
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB for images
  MAX_VIDEO_SIZE: 10 * 1024 * 1024, // 10MB for videos
  MAX_AUDIO_SIZE: 5 * 1024 * 1024, // 5MB for audio
}

/**
 * Validates media file before upload
 */
export function validateMediaFile(file: File): MediaValidationResult {
  // Check file size
  if (file.size > MEDIA_CONFIG.MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: `File size exceeds ${Math.round(MEDIA_CONFIG.MAX_FILE_SIZE / (1024 * 1024))}MB limit`
    }
  }

  // Determine file type and validate
  let type: 'image' | 'video' | 'audio'
  let maxSize: number

  if (MEDIA_CONFIG.ALLOWED_IMAGE_TYPES.includes(file.type)) {
    type = 'image'
    maxSize = MEDIA_CONFIG.MAX_IMAGE_SIZE
  } else if (MEDIA_CONFIG.ALLOWED_VIDEO_TYPES.includes(file.type)) {
    type = 'video'
    maxSize = MEDIA_CONFIG.MAX_VIDEO_SIZE
  } else if (MEDIA_CONFIG.ALLOWED_AUDIO_TYPES.includes(file.type)) {
    type = 'audio'
    maxSize = MEDIA_CONFIG.MAX_AUDIO_SIZE
  } else {
    return {
      isValid: false,
      error: 'Unsupported file type. Please use supported image, video, or audio formats.'
    }
  }

  // Check type-specific size limits
  if (file.size > maxSize) {
    return {
      isValid: false,
      error: `${type} files cannot exceed ${Math.round(maxSize / (1024 * 1024))}MB`
    }
  }

  return {
    isValid: true,
    type,
    size: file.size
  }
}

/**
 * Uploads media file using ImageKit (for images) or fallback for other media types
 */
export async function uploadMediaFile(file: File, folder: string = 'posts'): Promise<MediaUploadResult> {
  try {
    // Validate file first
    const validation = validateMediaFile(file)
    if (!validation.isValid) {
      return {
        success: false,
        error: validation.error
      }
    }

    // Use ImageKit for images
    if (validation.type === 'image') {
      const imageUrl = await uploadImageToImageKit(file, folder)
      
      if (!imageUrl) {
        return {
          success: false,
          error: 'Failed to upload image to ImageKit'
        }
      }

      return {
        success: true,
        url: imageUrl,
        type: 'image'
      }
    }

    // For videos and audio, you might want to use a different service
    // For now, we'll return an error since ImageKit primarily handles images
    return {
      success: false,
      error: `${validation.type} upload not yet supported. Please use images for now.`
    }

  } catch (error) {
    console.error('Media upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred during upload'
    }
  }
}

/**
 * Converts file to base64 data URL for preview
 */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

/**
 * Get file type icon/emoji
 */
export function getFileTypeIcon(type: string): string {
  if (type.startsWith('image/')) return '🖼️'
  if (type.startsWith('video/')) return '🎥'
  if (type.startsWith('audio/')) return '🎵'
  return '📎'
}

/**
 * Create a thumbnail/preview URL for images
 */
export function createImagePreview(file: File): string {
  if (file.type.startsWith('image/')) {
    return URL.createObjectURL(file)
  }
  return ''
}

/**
 * Clean up object URLs to prevent memory leaks
 */
export function revokeObjectURL(url: string | null): void {
  if (url && url.startsWith('blob:')) {
    URL.revokeObjectURL(url)
  }
}

/**
 * Generate a unique filename for uploads
 */
export function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now()
  const randomStr = Math.random().toString(36).substring(2, 15)
  const extension = originalName.split('.').pop()
  const baseName = originalName.split('.').slice(0, -1).join('.')
  
  return `${baseName}_${timestamp}_${randomStr}.${extension}`
}
