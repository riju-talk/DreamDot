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
import { Upload, ImageIcon, FileText, Music } from "lucide-react"
import { ProtectedRoute } from "../../../components/protected-route"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"

export default function CreatePage() {
  const [writeContent, setWriteContent] = useState<string>("")
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      // cleanup preview URL when unmounting
      if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview)
    }
  }, [thumbnailPreview])

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <TopNav />
            <main className="flex-1">
              <div className="flex-1 p-10">
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid grid-cols-3 md:grid-cols-3 rounded-xl">
                  <TabsTrigger value="upload" className="rounded-l-xl">
                    Upload
                  </TabsTrigger>
                  <TabsTrigger value="write">Write</TabsTrigger>
                  <TabsTrigger value="bundle">Bundle</TabsTrigger>
                </TabsList>

                <TabsContent value="upload" className="mt-6">
                  <Card className="dream-card">
                    <CardHeader>
                      <CardTitle>Upload Dream</CardTitle>
                      <CardDescription>Upload images, videos, audio files, or other digital content</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid w-full gap-4">
                        <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-12 text-center bg-muted/50">
                          <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                          <div className="space-y-2">
                            <h3 className="font-medium">Drag files here or click to upload</h3>
                            <p className="text-sm text-muted-foreground">
                              Support for images, videos, audio, and documents up to 100MB
                            </p>
                          </div>
                          <Button className="mt-4 dream-button text-primary-foreground">Select Files</Button>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="title">Title</Label>
                          <Input id="title" placeholder="Enter a title for your dream" className="rounded-xl" />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea id="description" placeholder="Describe your dream" className="rounded-xl" />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="category">Category</Label>
                          <Select>
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
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="tags">Tags</Label>
                          <Input id="tags" placeholder="Add tags separated by commas" className="rounded-xl" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Monetization</h3>

                        <RadioGroup defaultValue="free">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="free" id="free" />
                            <Label htmlFor="free">Free</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="one-time" id="one-time" />
                            <Label htmlFor="one-time">One-time purchase</Label>
                          </div>
                        </RadioGroup>

                        <div className="grid gap-2">
                          <Label htmlFor="price">Price (if applicable)</Label>
                          <Input id="price" placeholder="0.00" type="number" className="rounded-xl" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="rounded-xl">
                        Save Draft
                      </Button>
                      <Button className="dream-button text-primary-foreground">Publish Dream</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="write" className="mt-6">
                  <Card className="dream-card">
                    <CardHeader>
                      <CardTitle>Write Dream</CardTitle>
                      <CardDescription>Create articles, stories, or other written content</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="write-title">Title</Label>
                          <Input id="write-title" placeholder="Enter a title for your dream" className="rounded-xl" />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="write-content">Content</Label>
                          <div>
                            <RichTextEditor
                              value={writeContent}
                              onChange={(html) => setWriteContent(html)}
                              thumbnailPreview={thumbnailPreview ?? null}
                              onThumbnailChange={(file) => {
                                // manage file and preview URL
                                setThumbnailFile(file ?? null)
                                if (file) {
                                  if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview)
                                  setThumbnailPreview(URL.createObjectURL(file))
                                } else {
                                  if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview)
                                  setThumbnailPreview(null)
                                }
                              }}
                            />
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="write-category">Category</Label>
                          <Select>
                            <SelectTrigger id="write-category" className="rounded-xl">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="article">Article</SelectItem>
                              <SelectItem value="story">Story</SelectItem>
                              <SelectItem value="poem">Poem</SelectItem>
                              <SelectItem value="tutorial">Tutorial</SelectItem>
                              <SelectItem value="review">Review</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="write-tags">Tags</Label>
                          <Input id="write-tags" placeholder="Add tags separated by commas" className="rounded-xl" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Monetization</h3>

                        <RadioGroup defaultValue="free">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="free" id="write-free" />
                            <Label htmlFor="write-free">Free</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="one-time" id="write-one-time" />
                            <Label htmlFor="write-one-time">One-time purchase</Label>
                          </div>
                        </RadioGroup>

                        <div className="grid gap-2">
                          <Label htmlFor="write-price">Price (if applicable)</Label>
                          <Input id="write-price" placeholder="0.00" type="number" className="rounded-xl" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="rounded-xl">
                        Save Draft
                      </Button>
                      <Button className="dream-button text-primary-foreground">Publish Dream</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="bundle" className="mt-6">
                  <Card className="dream-card">
                    <CardHeader>
                      <CardTitle>Create Dream Bundle</CardTitle>
                      <CardDescription>Group multiple dreams into a single package</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="bundle-title">Bundle Title</Label>
                          <Input id="bundle-title" placeholder="Enter a title for your bundle" className="rounded-xl" />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="bundle-description">Description</Label>
                          <Textarea id="bundle-description" placeholder="Describe your bundle" className="rounded-xl" />
                        </div>

                        <div className="grid gap-2">
                          <Label>Bundle Items</Label>
                          <div className="border rounded-xl p-4 space-y-4 bg-muted/50">
                            <p className="text-sm text-muted-foreground">Select dreams to include in this bundle</p>

                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Switch id="item-1" />
                                <Label htmlFor="item-1" className="flex items-center gap-2">
                                  <ImageIcon className="h-4 w-4" />
                                  <span>Digital Art Collection: Neon Dreams</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="item-2" />
                                <Label htmlFor="item-2" className="flex items-center gap-2">
                                  <FileText className="h-4 w-4" />
                                  <span>The Midnight Chronicles: Chapter 1</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="item-3" />
                                <Label htmlFor="item-3" className="flex items-center gap-2">
                                  <Music className="h-4 w-4" />
                                  <span>Ambient Soundscapes Vol. 3</span>
                                </Label>
                              </div>
                            </div>

                            <Button variant="outline" size="sm" className="rounded-xl">
                              Add More Dreams
                            </Button>
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="bundle-price">Bundle Price</Label>
                          <Input id="bundle-price" placeholder="0.00" type="number" className="rounded-xl" />
                          <p className="text-sm text-muted-foreground">
                            Set a price lower than the sum of individual items
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="rounded-xl">
                        Save Draft
                      </Button>
                      <Button className="dream-button text-primary-foreground">Create Bundle</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
              </div>
            </main>
            <MobileNav />
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  )
}
