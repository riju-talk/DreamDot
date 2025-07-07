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
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { ImageIcon, Video, X } from "lucide-react"
import { useSession } from "next-auth/react"

export function CreatePostPrompt() {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState("")
  const [media, setMedia] = useState<File | null>(null)
  const [mediaPreview, setMediaPreview] = useState<string | null>(null)

  const { data: session } = useSession()
  const sessionUser = session?.user
  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value)
  }

  function handleMediaChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    setMedia(file)
    if (file) {
      const url = URL.createObjectURL(file)
      setMediaPreview(url)
    } else {
      setMediaPreview(null)
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // TODO: replace with actual API call to create post
    console.log({ content, media })
    // reset
    setContent("")
    setMedia(null)
    setMediaPreview(null)
    setOpen(false)
  }

  

  return (
    <>
      <Card className="dream-card mb-6">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10 ring-2 ring-background">
              <AvatarImage src={sessionUser?.image} alt="Your avatar" />
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
                      <AvatarImage src={sessionUser?.image} alt="Your avatar" />
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
                                setMedia(null);
                                setMediaPreview(null);
                              }}
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
                        disabled={!content && !media}
                        className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                        size="lg"
                      >
                        Post
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