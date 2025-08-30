"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { ImageIcon, Video, X, Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import { uploadMediaFile, validateMediaFile, formatFileSize, revokeObjectURL } from "@/lib/utils/media-upload"

export function CreatePostPrompt() {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState("")
  const [media, setMedia] = useState<File | null>(null)
  const [mediaPreview, setMediaPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [mediaError, setMediaError] = useState<string | null>(null)

  const { data: session } = useSession()
  const sessionUser = session?.user
  const accessToken = session?.accessToken 
  console.log("Access Token:", accessToken)
  console.log("Session Data:", session)
  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value)
  }

  function handleMediaChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    setMediaError(null)
    
    if (!file) {
      setMedia(null)
      setMediaPreview(null)
      return
    }

    // Validate file before setting it
    const validation = validateMediaFile(file)
    if (!validation.isValid) {
      setMediaError(validation.error || "Invalid file")
      toast.error(`File Validation Error: ${validation.error}`)
      return
    }

    setMedia(file)
    const url = URL.createObjectURL(file)
    setMediaPreview(url)
  }

  const resetForm = () => {
    setContent("")
    setMedia(null)
    if (mediaPreview) {
      revokeObjectURL(mediaPreview)
    }
    setMediaPreview(null)
    setMediaError(null)
    setOpen(false)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    if (!session?.user) {
      toast.error("Authentication Required: Please sign in to create a post")
      return
    }

    if (!content.trim() && !media) {
      toast.error("Content Required: Please add some content or media to your post")
      return
    }

    setIsLoading(true)
    
    try {
      let mediaUrl: string | undefined
      let mediaType: string = "text"
      
      // Upload media first if present
      if (media) {
        const uploadResult = await uploadMediaFile(media, "posts")
        if (!uploadResult.success) {
          throw new Error(uploadResult.error || "Failed to upload media")
        }
        mediaUrl = uploadResult.url
        mediaType = uploadResult.type || "image"
      }

      // Create post via API
      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content.trim(),
          mediaUrl,
          mediaType,
          visibility: true // Default to public
        })
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.message || "Failed to create post")
        return
      }

      // Success
      toast.success("Post Created! Your post has been published successfully")

      resetForm()
      
      // Optionally trigger a refresh of the posts feed
      // You might want to use a context or callback here
      
    } catch (error) {
      console.error("Error creating post:", error)
      toast.error(error instanceof Error ? error.message : "Failed to create post")
    } finally {
      setIsLoading(false)
    }
  }

  

  return (
    <>
      <Card className="dream-card mb-6">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10 ring-2 ring-background">
              <AvatarImage src={sessionUser?.image || ""} alt="Your avatar" />
              <AvatarFallback className="bg-primary text-primary-foreground">YU</AvatarFallback>
            </Avatar>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <div
                  className="flex-1 bg-muted/50 rounded-full px-4 py-3 text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  What's on your mind?
                </div>
              </DialogTrigger>

              <DialogContent className="w-[95vw] max-w-3xl max-h-[80vh] overflow-hidden p-0">
                <DialogHeader className="border-b p-4">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-semibold">Create Post</DialogTitle>
                    <DialogClose asChild>
                    </DialogClose>
                  </div>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  <div className="flex items-start space-x-4 p-4 flex-grow min-h-[300px]">
                    <Avatar className="h-12 w-12 mt-1">
                      <AvatarImage src={sessionUser?.image || ""} alt="Your avatar" />
                      <AvatarFallback className="bg-primary text-primary-foreground">YU</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 flex flex-col h-full">
                      <textarea
                        value={content}
                        onChange={handleContentChange}
                        placeholder="What's on your mind?"
                        className="w-full h-full p-3 border-0 rounded-md resize-none focus:outline-none focus:ring-0 text-lg placeholder:text-muted-foreground min-h-[250px]"
                        required
                        autoFocus
                      />
                      <div className="mt-4">
                        {mediaError && (
                          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                            <p className="text-sm text-destructive">{mediaError}</p>
                          </div>
                        )}
                        {media && (
                          <div className="mb-4 p-2 bg-muted/20 rounded-md">
                            <p className="text-xs text-muted-foreground">
                              📎 {media.name} ({formatFileSize(media.size)})
                            </p>
                          </div>
                        )}
                        {mediaPreview && (
                          <div className="relative rounded-lg overflow-hidden border">
                            {media?.type.startsWith("video") ? (
                              <video 
                                src={mediaPreview} 
                                controls 
                                className="w-full max-h-[400px] object-contain bg-black" 
                              />
                            ) : (
                              <img 
                                src={mediaPreview} 
                                alt="preview" 
                                className="w-full max-h-[400px] object-contain" 
                              />
                            )}
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2"
                              onClick={(e) => {
                                e.preventDefault();
                                revokeObjectURL(mediaPreview);
                                setMedia(null);
                                setMediaPreview(null);
                                setMediaError(null);
                              }}
                              disabled={isLoading}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t p-4">
                    <div className="flex items-center justify-between bg-muted/20 rounded-lg px-4 py-3 mb-4">
                      <span className="text-sm font-medium text-muted-foreground">Add to your post</span>
                      <div className="flex space-x-2">
                        <label className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:bg-muted/30 p-2 rounded transition-colors">
                          <ImageIcon className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Photo</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleMediaChange}
                            className="hidden"
                          />
                        </label>
                        <label className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:bg-muted/30 p-2 rounded transition-colors">
                          <Video className="h-5 w-5 text-blue-600" />
                          <span className="text-sm">Video</span>
                          <input
                            type="file"
                            accept="video/*"
                            onChange={handleMediaChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                    <DialogFooter className="sm:justify-end">
                      <Button 
                        type="submit" 
                        disabled={isLoading || (!content.trim() && !media) || !!mediaError}
                        className="px-8 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-muted disabled:text-muted-foreground text-white font-medium rounded-md transition-colors"
                        size="lg"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            {media ? "Uploading..." : "Posting..."}
                          </>
                        ) : (
                          "Post"
                        )}
                      </Button>
                    </DialogFooter>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </>
  )
}