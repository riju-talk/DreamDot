"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import {
  Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaTimes, FaPlus, FaTrash } from "react-icons/fa"
import { Save } from "lucide-react"
import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectItem
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChangePassword } from "../../../components/change-passoword"
import { DeleteAccount } from "../../../components/delete-account"
import { uploadImageToImageKit } from "@/lib/imagekitupload"
import { COUNTRIES } from "@/lib/countries"

import { Toaster, toast } from "sonner"

export default function SettingsPage() {
  const [form, setForm] = useState({
    username: "",
    display_name: "",
    bio: "",
    dob: "",
    country: "",
    website: "",
  })

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [bannerUrl, setBannerUrl] = useState<string | null>(null)
  const [socialLinks, setSocialLinks] = useState<string[]>([])

  useEffect(() => {
    async function loadProfile() {
      const res = await fetch("/api/settings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (res.ok) {
        const data = await res.json()
        const profile = data.profile || {}

        setForm({
          username: profile.username || "",
          display_name: profile.display_name || "",
          bio: profile.bio || "",
          dob: profile.dob?.split("T")[0] || "",
          country: profile.country || "",
          website: profile.website || "",
        })
        setAvatarUrl(profile.avatar_url || null)
        setBannerUrl(profile.banner_url || null)
        setSocialLinks(Array.isArray(profile.social_links) ? profile.social_links : [])
      }
    }

    loadProfile()
  }, [])

  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>,
    folder: "avatar" | "banner"
  ) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = await uploadImageToImageKit(file, folder)
    if (url) {
      folder === "avatar" ? setAvatarUrl(url) : setBannerUrl(url)
    }
  }

  function addLink() {
    if (socialLinks.length < 4) {
      setSocialLinks([...socialLinks, ""])
    }
  }

  function updateLink(idx: number, val: string) {
    setSocialLinks(socialLinks.map((l, i) => (i === idx ? val : l)))
  }

  function removeLink(idx: number) {
    setSocialLinks(socialLinks.filter((_, i) => i !== idx))
  }

  async function handleSaveChanges() {
    const token = localStorage.getItem("token")
    const data: Record<string, any> = {}
    const fields: string[] = []

    // Collect updated fields
    Object.entries(form).forEach(([key, value]) => {
      if (value?.toString().trim() !== "") {
        data[key] = value
        fields.push(key)
      }
    })

    if (avatarUrl) {
      data.avatar_url = avatarUrl
      fields.push("avatar_url")
    }
    if (bannerUrl) {
      data.banner_url = bannerUrl
      fields.push("banner_url")
    }

    const filteredLinks = socialLinks.filter((l) => l.trim() !== "")
    if (filteredLinks.length) {
      data.social_links = filteredLinks
      fields.push("social_links")
    }

    const payload = { fields, data }

    const res = await fetch("/api/settings", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    const json = await res.json()
    if (res.ok) {
      toast.success("Profile updated!")
    } else {
      toast.error("Error: " + json.error)
    }
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 container mx-auto px-4 py-6">
            <Toaster position="top-center" richColors />
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Account Settings
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <Card className="sticky top-6">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
            {avatarUrl === 'loading' ? (
              <div className="w-full h-full flex items-center justify-center animate-pulse text-xs">Uploading...</div>
            ) : (
              <Image 
                src={avatarUrl || "/avatar.png"} 
                alt="Avatar" 
                width={56} 
                height={56} 
                className="object-cover w-full h-full"
              />
            )}
          </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{form.display_name}</h3>
                        <p className="text-xs text-gray-500">{form.username}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>
                      Manage your account details and preferences
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Field id="username" label="Username" value={form.username}
                        onChange={(v) => setForm({ ...form, username: v })} />
                      <Field id="display_name" label="Display Name" value={form.display_name}
                        onChange={(v) => setForm({ ...form, display_name: v })} />
                      <Field id="bio" label="Bio" textarea value={form.bio}
                        onChange={(v) => setForm({ ...form, bio: v })} />
                      <Field id="dob" label="Date of Birth" type="date" value={form.dob}
                        onChange={(v) => setForm({ ...form, dob: v })} />
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select
                          value={form.country}
                          onValueChange={(val) => setForm({ ...form, country: val })}
                        >
                          <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                          <SelectContent>
                            {COUNTRIES.map((c) => (
                              <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Field id="website" label="Website" type="url" value={form.website}
                        onChange={(v) => setForm({ ...form, website: v })} />
                      <AvatarUpload label="Upload Avatar" imageUrl={avatarUrl} onUpload={(e) => handleImageUpload(e, "avatar")} />
                      <BannerUpload label="Upload Banner" imageUrl={bannerUrl} onUpload={(e) => handleImageUpload(e, "banner")} />
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-2">Social Links</h3>
                      {socialLinks.map((link, idx) => (
                        <div key={idx} className="flex items-center gap-2 mb-2">
                          <Input
                            value={link}
                            placeholder="https://..."
                            onChange={(e) => updateLink(idx, e.target.value)}
                          />
                          <Button variant="outline" size="sm" onClick={() => removeLink(idx)}>
                            <FaTrash />
                          </Button>
                        </div>
                      ))}
                      {socialLinks.length < 4 && (
                        <Button variant="ghost" size="sm" onClick={addLink}>
                          <FaPlus /> Add link
                        </Button>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => window.location.reload()}>
                      <FaTimes className="mr-2" /> Cancel
                    </Button>
                    <Button onClick={handleSaveChanges}>
                      <Save className="mr-2" /> Save Changes
                    </Button>
                  </CardFooter>
                </Card>

                <ChangePassword />
                <DeleteAccount />
              </div>
            </div>
          </main>
          <MobileNav />
        </div>
      </div>
    </SidebarProvider>
  )
}

function Field({
  id, label, type = "text", textarea = false,
  value, onChange
}: {
  id: string, label: string, value: string,
  onChange: (val: string) => void,
  type?: string, textarea?: boolean
}) {
  return (
    <div className="space-y-2 md:col-span-1">
      <Label htmlFor={id}>{label}</Label>
      {textarea ? (
        <Textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <Input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  )
}

function BannerUpload({
  label, imageUrl, onUpload
}: {
  label: string, imageUrl: string | null,
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Image src={imageUrl || "/placeholder.png"} alt={label} width={400} height={400} />
      <input type="file" accept="image/*" onChange={onUpload} />
    </div>
  )
}

function AvatarUpload({
  label, imageUrl, onUpload
}: {
  label: string, imageUrl: string | null,
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Image src={imageUrl || "/placeholder.png"} alt={label} width={60} height={60} />
      <input type="file" accept="image/*" onChange={onUpload} />
    </div>
  )
}
