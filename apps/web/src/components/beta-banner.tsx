"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";

export function BetaBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user has dismissed the banner
    const dismissed = localStorage.getItem("beta-banner-dismissed");
    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("beta-banner-dismissed", "true");
  };

  // Don't render anything on the server or if dismissed
  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Beta
          </span>
          <p className="text-sm md:text-base">
            You're using the beta version of DreamDot. Features are actively being developed.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="ml-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
