"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { RichTextEditor } from "@/components/rich-text-editor"
import { Switch } from "@/components/ui/switch"
import { Upload, ImageIcon, FileText, Music, X, Loader2 } from "lucide-react"
import { ProtectedRoute } from "../../../components/protected-route"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { createItem } from "@/app/actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function CreatePage() {
  const router = useRouter()
  const [writeContent, setWriteContent] = useState<string>("")
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form states
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    return () => {
      if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview)
    }
  }, [thumbnailPreview])

  const handlePublish = async () => {
    if (!title || !description) {
      toast.error("Please fill in title and description")
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("price", price)
      if (writeContent) formData.append("content", writeContent)
      if (thumbnailFile) formData.append("thumbnail", thumbnailFile)

      const result = await createItem(formData)

      if (result.success) {
        toast.success("Dream published successfully!")
        router.push("/marketplace")
      } else {
        toast.error(result.error || "Failed to publish")
      }
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <TopNav />
          <div className="flex-1 min-h-[calc(100vh-4rem)] relative">
            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
              <main className="container mx-auto px-6 py-8">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-10">
                    <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Create New Dream</h1>
                    <p className="text-lg text-muted-foreground">Professional content creation studio for dreamers and creators.</p>
                  </div>

                  <Tabs defaultValue="upload" className="w-full">
                    <TabsList className="grid grid-cols-3 md:grid-cols-3 rounded-xl">
                      <TabsTrigger value="upload" className="rounded-l-xl">
                        Upload
                      </TabsTrigger>
                      <TabsTrigger value="write">Write</TabsTrigger>
                      <TabsTrigger value="bundle">Bundle</TabsTrigger>
                    </TabsList>

                    <TabsContent value="upload" className="mt-6">
                      <Card className="border-border/60 shadow-md">
                        <CardHeader>
                          <CardTitle>Upload Dream</CardTitle>
                          <CardDescription>Upload images, videos, audio files, or other digital content</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid lg:grid-cols-3 gap-6">
                            {/* Main Upload Column */}
                            <div className="lg:col-span-2 space-y-4">
                              <div className="grid gap-2">
                                <Label htmlFor="upload-title">Title</Label>
                                <Input
                                  id="upload-title"
                                  placeholder="Enter a compelling title"
                                  className="rounded-xl"
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                />
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="upload-description">Description</Label>
                                <Textarea
                                  id="upload-description"
                                  placeholder="Describe your creation in detail"
                                  className="rounded-xl resize-none"
                                  rows={4}
                                  value={description}
                                  onChange={(e) => setDescription(e.target.value)}
                                />
                              </div>

                              <div className="grid gap-2">
                                <Label>Upload Files</Label>
                                <div className="flex flex-col items-center justify-center border-2 border-dashed border-border/50 rounded-xl p-16 text-center bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer">
                                  <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                                  <div className="space-y-2">
                                    <h3 className="font-medium text-lg">Drag files here or click to upload</h3>
                                    <p className="text-sm text-muted-foreground">
                                      Support for images, videos, audio, and documents up to 100MB
                                    </p>
                                  </div>
                                  <Button className="mt-6" variant="outline" size="lg">Select Files</Button>
                                </div>
                              </div>
                            </div>

                            {/* Sidebar Column */}
                            <div className="space-y-4">
                              <div className="grid gap-2">
                                <Label>Thumbnail</Label>
                                <div className="border-2 border-dashed border-border/50 rounded-xl overflow-hidden">
                                  {thumbnailPreview ? (
                                    <div className="relative aspect-video">
                                      <img
                                        src={thumbnailPreview}
                                        alt="Thumbnail preview"
                                        className="w-full h-full object-cover"
                                      />
                                      <Button
                                        type="button"
                                        variant="destructive"
                                        size="icon"
                                        className="absolute top-2 right-2 h-8 w-8 rounded-full"
                                        onClick={() => {
                                          setThumbnailFile(null)
                                          setThumbnailPreview(null)
                                        }}
                                      >
                                        <X className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  ) : (
                                    <label className="flex flex-col items-center justify-center aspect-video cursor-pointer hover:bg-muted/30 transition-colors">
                                      <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
                                      <span className="text-sm text-muted-foreground">Upload thumbnail</span>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0]
                                          if (file) {
                                            setThumbnailFile(file)
                                            setThumbnailPreview(URL.createObjectURL(file))
                                          }
                                        }}
                                      />
                                    </label>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground">Recommended: 16:9 ratio</p>
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="category">Category</Label>
                                <Select value={category} onValueChange={setCategory}>
                                  <SelectTrigger id="category" className="rounded-xl">
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="art">Art</SelectItem>
                                    <SelectItem value="photography">Photography</SelectItem>
                                    <SelectItem value="music">Music</SelectItem>
                                    <SelectItem value="video">Video</SelectItem>
                                    <SelectItem value="course">Course</SelectItem>
                                    <SelectItem value="digital-asset">Digital Asset</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="tags">Tags</Label>
                                <Input
                                  id="tags"
                                  placeholder="e.g. art, digital, abstract"
                                  className="rounded-xl"
                                />
                                <p className="text-xs text-muted-foreground">Separate with commas</p>
                              </div>

                              <div className="space-y-3">
                                <Label>Monetization</Label>
                                <RadioGroup defaultValue="free">
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="free" id="free" />
                                    <Label htmlFor="free" className="font-normal cursor-pointer">Free</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="one-time" id="one-time" />
                                    <Label htmlFor="one-time" className="font-normal cursor-pointer">One-time purchase</Label>
                                  </div>
                                </RadioGroup>
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="price">Price</Label>
                                <div className="relative">
                                  <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                                  <Input
                                    id="price"
                                    placeholder="0.00"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    className="rounded-xl pl-8"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between rounded-xl border border-border p-3">
                                <Label htmlFor="upload-visibility" className="font-normal">Make private</Label>
                                <Switch id="upload-visibility" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t border-border/50 pt-6">
                          <Button variant="outline" className="rounded-xl" size="lg">
                            Save Draft
                          </Button>
                          <Button
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10"
                            onClick={handlePublish}
                            disabled={isSubmitting}
                            size="lg"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Publishing...
                              </>
                            ) : "Publish Dream"}
                          </Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>

                    <TabsContent value="write" className="mt-6">
                      <Card className="border-border/60 shadow-md">
                        <CardHeader>
                          <CardTitle>Write Your Dream</CardTitle>
                          <CardDescription>Create written content with our rich text editor</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid lg:grid-cols-3 gap-6">
                            {/* Main Content Column */}
                            <div className="lg:col-span-2 space-y-4">
                              <div className="grid gap-2">
                                <Label htmlFor="write-title">Title</Label>
                                <Input
                                  id="write-title"
                                  placeholder="Enter a compelling title"
                                  className="rounded-xl"
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                />
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="write-description">Short Description</Label>
                                <Textarea
                                  id="write-description"
                                  placeholder="A brief description to appear in previews (max 200 characters)"
                                  className="rounded-xl resize-none"
                                  rows={3}
                                  maxLength={200}
                                  value={description}
                                  onChange={(e) => setDescription(e.target.value)}
                                />
                                <p className="text-xs text-muted-foreground text-right">
                                  {description.length}/200
                                </p>
                              </div>

                              <div className="grid gap-2">
                                <Label>Content</Label>
                                <RichTextEditor
                                  content={writeContent}
                                  onChange={setWriteContent}
                                  placeholder="Start writing your dream..."
                                />
                              </div>
                            </div>

                            {/* Sidebar Column */}
                            <div className="space-y-4">
                              <div className="grid gap-2">
                                <Label>Thumbnail</Label>
                                <div className="border-2 border-dashed border-border/50 rounded-xl overflow-hidden">
                                  {thumbnailPreview ? (
                                    <div className="relative aspect-video">
                                      <img
                                        src={thumbnailPreview}
                                        alt="Thumbnail preview"
                                        className="w-full h-full object-cover"
                                      />
                                      <Button
                                        type="button"
                                        variant="destructive"
                                        size="icon"
                                        className="absolute top-2 right-2 h-8 w-8 rounded-full"
                                        onClick={() => {
                                          setThumbnailFile(null)
                                          setThumbnailPreview(null)
                                        }}
                                      >
                                        <X className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  ) : (
                                    <label className="flex flex-col items-center justify-center aspect-video cursor-pointer hover:bg-muted/30 transition-colors">
                                      <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
                                      <span className="text-sm text-muted-foreground">Upload thumbnail</span>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0]
                                          if (file) {
                                            setThumbnailFile(file)
                                            setThumbnailPreview(URL.createObjectURL(file))
                                          }
                                        }}
                                      />
                                    </label>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground">Recommended: 16:9 ratio</p>
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="write-category">Category</Label>
                                <Select value={category} onValueChange={setCategory}>
                                  <SelectTrigger id="write-category" className="rounded-xl">
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="story">Story</SelectItem>
                                    <SelectItem value="article">Article</SelectItem>
                                    <SelectItem value="poetry">Poetry</SelectItem>
                                    <SelectItem value="tutorial">Tutorial</SelectItem>
                                    <SelectItem value="essay">Essay</SelectItem>
                                    <SelectItem value="guide">Guide</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="write-tags">Tags</Label>
                                <Input
                                  id="write-tags"
                                  placeholder="e.g. fiction, sci-fi, adventure"
                                  className="rounded-xl"
                                />
                                <p className="text-xs text-muted-foreground">Separate with commas</p>
                              </div>

                              <div className="space-y-3">
                                <Label>Monetization</Label>
                                <RadioGroup defaultValue="free">
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="free" id="write-free" />
                                    <Label htmlFor="write-free" className="font-normal cursor-pointer">Free</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="paid" id="write-paid" />
                                    <Label htmlFor="write-paid" className="font-normal cursor-pointer">Paid</Label>
                                  </div>
                                </RadioGroup>
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="write-price">Price</Label>
                                <div className="relative">
                                  <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                                  <Input
                                    id="write-price"
                                    placeholder="0.00"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    className="rounded-xl pl-8"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between rounded-xl border border-border p-3">
                                <Label htmlFor="write-visibility" className="font-normal">Make private</Label>
                                <Switch id="write-visibility" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t border-border/50 pt-6">
                          <Button variant="outline" className="rounded-xl" size="lg">
                            Save Draft
                          </Button>
                          <Button
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10"
                            onClick={handlePublish}
                            disabled={isSubmitting}
                            size="lg"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Publishing...
                              </>
                            ) : "Publish Dream"}
                          </Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>

                    <TabsContent value="bundle" className="mt-6">
                      <div className="text-center py-12 text-muted-foreground">
                        Bundles coming soon...
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </main>
            </div>
          </div>
          <MobileNav />
        </SidebarInset>
      </SidebarProvider>
    </ProtectedRoute>
  )
}
