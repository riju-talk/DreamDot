"use client"

import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession, signIn as nextAuthSignIn } from "next-auth/react"
import { Sparkles, Loader2 } from "lucide-react"
import { FaGithub, FaGoogle } from "react-icons/fa"

import { useAuth } from "@/lib/auth"
import { Toaster, toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export default function RegisterPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { signUp } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // redirect if already authenticated
  useEffect(() => {
    if (session) {
      router.replace("/feed")
    }
  }, [session, router])

  const validatePassword = (pwd: string) => {
    if (pwd.length < 8) return false
    if (!/[0-9]/.test(pwd)) return false
    if (!/[A-Z]/.test(pwd)) return false
    if (!/[^A-Za-z0-9_]/.test(pwd)) return false
    return true
  }

  const pwdValid = useMemo(() => validatePassword(password), [password])
  const matchValid = useMemo(
    () => password.length > 0 && password === confirmPwd,
    [password, confirmPwd]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!pwdValid || !matchValid) return
    setIsLoading(true)

    try {
      // 1) Create account
      const res = await signUp(name, email, password)
      if (res.error) {
        toast.error("Sign up failed: " + res.error)
        return
      }

      // 2) Auto sign-in with new credentials
      const result = await nextAuthSignIn("credentials", {
        redirect: false,
        email,
        password,
      })
      if (result?.ok) {
        toast.success("Welcome to DreamDOT!\nYour account has been created and you are now signed in.")
        router.push("/feed")
      } else {
        throw new Error("Auto sign-in failed")
      }
    } catch (err: any) {
      toast.error("Error: " + err.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-6 h-6" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center rounded-xl overflow-hidden bg-white">
        {/* Image */}
        <div className="hidden lg:block">
          <Image
            src="https://res.cloudinary.com/diaoy8eua/image/upload/v1750944374/pexels-lukasfst-19635556_ywjhpd.jpg"
            alt="DreamDOT visual"
            width={400}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>

        {/* Form */}
        <Card className="w-full max-w-md rounded-none lg:rounded-l-none lg:rounded-r-xl shadow-none border-none lg:mx-4">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="rounded-lg p-1.5 bg-primary">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-primary">DreamDOT</span>
            </div>
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>
              Join thousands of creators and start sharing your dreams
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <Tooltip open={!pwdValid && password.length > 0}>
                <TooltipTrigger asChild>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="start">
                  <ul className="text-xs list-disc list-inside space-y-1">
                    <li>At least 8 characters</li>
                    <li>One uppercase letter</li>
                    <li>One underscore (_) symbol</li>
                    <li>No other special characters</li>
                  </ul>
                </TooltipContent>
              </Tooltip>

              {/* Confirm Password */}
              <Tooltip open={!matchValid && confirmPwd.length > 0}>
                <TooltipTrigger asChild>
                  <div className="space-y-2">
                    <Label htmlFor="confirm">Re-enter Password</Label>
                    <Input
                      id="confirm"
                      type="password"
                      placeholder="Re-enter your password"
                      value={confirmPwd}
                      onChange={(e) => setConfirmPwd(e.target.value)}
                      required
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="start">
                  Passwords do not match
                </TooltipContent>
              </Tooltip>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Toaster />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 my-5"
                disabled={!pwdValid || !matchValid || isLoading}
              >
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Create Account
              </Button>

              <div className="text-center text-muted-foreground text-sm">
                or sign up with
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => toast.info("Google sign-up coming soon!\nStay tuned 🚀")}
              >
                <FaGoogle className="mr-2 h-5 w-5" /> Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => toast.info("GitHub sign-up coming soon!\nStay tuned 🚀")}
              >
                <FaGithub className="mr-2 h-5 w-5" /> Sign up with GitHub
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
