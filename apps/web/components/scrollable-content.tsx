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
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className={className}>
          {children}
        </div>
      </div>
    </div>
  );
}
