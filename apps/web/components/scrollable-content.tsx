"use client";

import { ReactNode } from "react";

interface ScrollableContentProps {
  children: ReactNode;
  className?: string;
}

export function ScrollableContent({ 
  children, 
  className = "" 
}: ScrollableContentProps) {
  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] relative">
      <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
        <div className={`min-h-full ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
