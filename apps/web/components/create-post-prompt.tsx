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
import { ImageIcon, X, Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import {
  uploadMediaFile,
  validateMediaFile,
  formatFileSize,
  revokeObjectURL,
} from "@/lib/utils/media-upload"

export function CreatePostPrompt() {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState("")
  const [media, setMedia] = useState<File | null>(null)
  const [mediaPreview, setMediaPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [mediaError, setMediaError] = useState<string | null>(null)

  const { data: session } = useSession()
  const sessionUser = session?.user
  const accessToken = (session as any)?.accessToken

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
    if (mediaPreview) revokeObjectURL(mediaPreview)
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
      toast.error("Content Required: Please add some content or media")
      return
    }

    setIsLoading(true)

    try {
      let mediaUrl: string | undefined
      let mediaType = "text"

      if (media) {
        const uploadResult = await uploadMediaFile(media, "posts")
        if (!uploadResult.success) throw new Error(uploadResult.error || "Failed to upload media")
        mediaUrl = uploadResult.url
        mediaType = uploadResult.type || "image"
      }

      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content.trim(),
          mediaUrl,
          mediaType,
          visibility: true,
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        toast.error(data.message || "Failed to create post")
        return
      }

      toast.success("Post Created Successfully!")
      resetForm()
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
                <div className="flex-1 bg-muted/50 rounded-full px-4 py-3 text-muted-foreground hover:bg-muted transition-colors cursor-pointer">
                  What's on your mind?
                </div>
              </DialogTrigger>

              <DialogContent className="w-[95vw] max-w-3xl p-0 overflow-hidden flex flex-col">
                <DialogHeader className="border-b p-4">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-semibold">Create Post</DialogTitle>
                    <DialogClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </DialogClose>
                  </div>
                </DialogHeader>

                {/* Scrollable body */}
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12 mt-1">
                        <AvatarImage src={sessionUser?.image || ""} alt="Your avatar" />
                        <AvatarFallback className="bg-primary text-primary-foreground">YU</AvatarFallback>
                      </Avatar>

                      <textarea
                        value={content}
                        onChange={handleContentChange}
                        placeholder="What's on your mind?"
                        className="w-full h-full p-3 border-0 rounded-md resize-none focus:outline-none focus:ring-0 text-lg placeholder:text-muted-foreground min-h-[150px]"
                        required
                        autoFocus
                      />
                    </div>

                    {mediaError && (
                      <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                        <p className="text-sm text-destructive">{mediaError}</p>
                      </div>
                    )}

                    {media && (
                      <div className="p-2 bg-muted/20 rounded-md text-xs text-muted-foreground">
                        📎 {media.name} ({formatFileSize(media.size)})
                      </div>
                    )}

                    {mediaPreview && (
                      <div className="relative rounded-lg overflow-hidden border">
                        {media?.type.startsWith("video") ? (
                          <video src={mediaPreview} controls className="w-full max-h-[400px] object-contain bg-black" />
                        ) : (
                          <img src={mediaPreview} alt="preview" className="w-full max-h-[400px] object-contain" />
                        )}
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={(e) => {
                            e.preventDefault()
                            revokeObjectURL(mediaPreview)
                            setMedia(null)
                            setMediaPreview(null)
                            setMediaError(null)
                          }}
                          disabled={isLoading}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <DialogFooter className="border-t p-4 flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                      <ImageIcon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Add Media</span>
                      <input
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleMediaChange}
                        className="hidden"
                      />
                    </label>

                    <Button
                      type="submit"
                      disabled={isLoading || (!content.trim() && !media) || !!mediaError}
                      className="px-8 py-2 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground font-medium rounded-md transition-colors"
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
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
