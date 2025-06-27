"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2, Eye, EyeOff } from "lucide-react";
import { FaGithub, FaGoogle} from "react-icons/fa"
import { Toaster, toast } from "sonner"
import { useSession, signIn as nextAuthSignIn } from "next-auth/react"

export default function SignInPage() {
  const { data: session, status } = useSession()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/feed")
    }
  }, [status, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
    const result = await nextAuthSignIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (result?.ok) {
      toast.success("Welcome back!\nYou've successfully signed in to DreamDOT.")
      router.push("/feed")
    } else {
      toast.error("Sign in failed"+"\nPlease check your credentials and try again.")
    }
  } catch (err) {
    toast.error("Sign in error"+"\nSomething went wrong. Please try again.")
  } finally {
    setIsLoading(false)
  }
  };

  const handleNotReady = (provider: string) => {
    alert(`${provider} sign-in not ready yet!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center rounded-xl shadow-lg overflow-hidden bg-white">
        {/* Left: Illustration */}
        <div className="hidden lg:block">
          <Image
            src="https://res.cloudinary.com/diaoy8eua/image/upload/v1750937757/pexels-artem-yellow-422929671-15157857_qqkdym.jpg"
            alt="DreamDOT Illustration"
            width={400}
            height={400}
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right: Sign In Card */}
        <Card className="w-full max-w-md rounded-none lg:rounded-l-none lg:rounded-r-xl shadow-none border-none">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="relative overflow-hidden rounded-lg p-1.5 bg-primary">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-primary">DreamDOT</span>
            </div>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your account to continue creating
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <Toaster/>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign In
              </Button>
            </form>

            <div className="flex items-center justify-center gap-2">
              <span className="h-px bg-border flex-1" />
              <span className="text-sm text-muted-foreground">or sign in with</span>
              <span className="h-px bg-border flex-1" />
            </div>

            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => handleNotReady("Google")}
              >
                <FaGoogle className="h-5 w-5" />
                Sign in with Google
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => handleNotReady("GitHub")}
              >
                <FaGithub className="h-5 w-5" />
                Sign in with GitHub
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-center text-muted-foreground">
              Don’t have an account?{" "}
              <a
                href="/auth/register"
                className="text-primary hover:underline"
              >
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
