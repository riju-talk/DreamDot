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
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "sonner";
import { useSession, signIn as nextAuthSignIn, SignInResponse } from "next-auth/react";

interface FormData {
  email: string;
  password: string;
}

interface SignInError {
  error: string;
}

export default function SignInPage() {
  const { data: session, status } = useSession()
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/feed")
    }
  }, [status, router])

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));    
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    try {
      const result = await nextAuthSignIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      }) as SignInResponse | undefined;

      if (result?.error) {
        toast.error("Sign in failed", {
          description: result.error === "CredentialsSignin" 
            ? "Invalid email or password" 
            : "Please check your credentials and try again."
        });
        return;
      }

      if (result?.ok) {
        toast.success("Welcome back!", {
          description: "You've successfully signed in to DreamDOT."
        });
        router.push("/feed");
      }
    } catch (err) {
      console.error("Sign in error:", err);
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error("Sign in error", {
        description: errorMessage
      });
    } finally {
      setIsLoading(false);
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
          <img
            src="https://res.cloudinary.com/diaoy8eua/image/upload/v1750937757/pexels-artem-yellow-422929671-15157857_qqkdym.jpg"
            alt="DreamDOT Illustration"
            className="object-cover h-[600px] w-[600px]"
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
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pr-10 ${errors.password ? 'border-destructive' : ''}`}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive mt-1">{errors.password}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full mt-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
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
                disabled={isLoading}
              >
                <FaGoogle className="h-4 w-4" />
                Sign in with Google
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => handleNotReady("GitHub")}
                disabled={isLoading}
              >
                <FaGithub className="h-4 w-4" />
                Sign in with GitHub
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-center text-muted-foreground">
              Don’t have an account?{" "}
              <a
                href="/auth/register"
                className="text-primary hover:underline font-medium"
                tabIndex={isLoading ? -1 : 0}
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
