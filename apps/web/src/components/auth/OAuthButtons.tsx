"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "sonner";

interface OAuthButtonsProps {
  isLoading?: boolean;
  googleEnabled?: boolean;
  githubEnabled?: boolean;
}

export function OAuthButtons({ 
  isLoading = false,
  googleEnabled = false,
  githubEnabled = false,
}: OAuthButtonsProps) {
  const handleOAuthSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        callbackUrl: "/feed",
      });
    } catch (error) {
      console.error(`${provider} sign-in error:`, error);
      toast.error("Authentication Error", {
        description: `Failed to sign in with ${provider}. Please try again.`,
      });
    }
  };

  // If neither provider is enabled, don't render anything
  if (!googleEnabled && !githubEnabled) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <span className="h-px bg-border flex-1" />
        <span className="text-sm text-muted-foreground">or sign in with</span>
        <span className="h-px bg-border flex-1" />
      </div>

      <div className="flex flex-col space-y-2">
        {googleEnabled && (
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-muted/50 transition-colors"
            onClick={() => handleOAuthSignIn("google")}
            disabled={isLoading}
            type="button"
          >
            <FaGoogle className="h-4 w-4 text-red-500" />
            Sign in with Google
          </Button>
        )}
        
        {githubEnabled && (
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-muted/50 transition-colors"
            onClick={() => handleOAuthSignIn("github")}
            disabled={isLoading}
            type="button"
          >
            <FaGithub className="h-4 w-4" />
            Sign in with GitHub
          </Button>
        )}
      </div>
    </>
  );
}
