"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Upload, ImageIcon, FileText, Music, Sparkles } from "lucide-react"

import { useState } from "react"
import { uploadImageToImageKit } from "@/lib/imagekitupload"

export function CreateContent() {
  const [uploadLoading, setUploadLoading] = useState(false)
  const [uploadError, setUploadError] = useState("")
  const [uploadedUrl, setUploadedUrl] = useState("")
  
  async function handleContentUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadError("")
    const maxSizeMb = 100
    if (file.size > maxSizeMb * 1024 * 1024) {
      setUploadError("File is too large. Max 100MB.")
      return
    }
    setUploadLoading(true)
    const url = await uploadImageToImageKit(file, "content")
    setUploadLoading(false)
    if (url) {
      setUploadedUrl(url)
      setUploadError("")
    } else {
      setUploadError("Upload failed. Try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Create Dream
          </h1>
          <p className="text-muted-foreground">Share your creativity with the world and inspire others</p>
        </div>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 rounded-xl">
          <TabsTrigger value="upload" className="rounded-l-xl">
            Upload
          </TabsTrigger>
          <TabsTrigger value="write">Write</TabsTrigger>
          <TabsTrigger value="bundle">Bundle</TabsTrigger>
          <TabsTrigger value="subscription" className="rounded-r-xl">
            Subscription
          </TabsTrigger>
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
                  <input
                    type="file"
                    accept="image/*,video/*,audio/*,application/pdf"
                    onChange={(e) => handleContentUpload(e)}
                    className="hidden"
                    id="dream-content-upload"
                  />
                  <Label htmlFor="dream-content-upload">
                    <Button className="mt-4 dream-button text-primary-foreground">Select Files</Button>
                  </Label>
                  {uploadLoading && <div className="text-xs text-blue-500 mt-2">Uploading...</div>}
                  {uploadError && <div className="text-xs text-red-500 mt-2">{uploadError}</div>}
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
                      <SelectItem value="writing">Writing</SelectItem>
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
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="subscription" id="subscription" />
                    <Label htmlFor="subscription">Include in subscription</Label>
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
                  <Textarea id="write-content" placeholder="Start writing..." className="min-h-[300px] rounded-xl" />
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
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="subscription" id="write-subscription" />
                    <Label htmlFor="write-subscription">Include in subscription</Label>
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
                  <p className="text-sm text-muted-foreground">Set a price lower than the sum of individual items</p>
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

        <TabsContent value="subscription" className="mt-6">
          <Card className="dream-card">
            <CardHeader>
              <CardTitle>Create Subscription</CardTitle>
              <CardDescription>Set up a recurring subscription for your dreams</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="sub-title">Subscription Name</Label>
                  <Input id="sub-title" placeholder="Enter a name for your subscription" className="rounded-xl" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="sub-description">Description</Label>
                  <Textarea
                    id="sub-description"
                    placeholder="Describe what subscribers will get"
                    className="rounded-xl"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="sub-price">Monthly Price</Label>
                  <Input id="sub-price" placeholder="0.00" type="number" className="rounded-xl" />
                </div>

                <div className="grid gap-2">
                  <Label>Benefits</Label>
                  <div className="border rounded-xl p-4 space-y-2 bg-muted/50">
                    <div className="flex items-center space-x-2">
                      <Switch id="benefit-1" defaultChecked />
                      <Label htmlFor="benefit-1">Access to all premium dreams</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="benefit-2" defaultChecked />
                      <Label htmlFor="benefit-2">Early access to new releases</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="benefit-3" defaultChecked />
                      <Label htmlFor="benefit-3">Exclusive subscriber-only dreams</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="benefit-4" />
                      <Label htmlFor="benefit-4">Monthly live Q&A sessions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="benefit-5" />
                      <Label htmlFor="benefit-5">Direct messaging access</Label>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="rounded-xl">
                        Add Custom Benefit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-xl">
                Preview
              </Button>
              <Button className="dream-button text-primary-foreground">Launch Subscription</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
