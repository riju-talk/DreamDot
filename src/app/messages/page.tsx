"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopNav } from "@/components/top-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatWindow } from "@/components/chat-window"
import { ChatProvider } from "@/lib/chat-context"
import { ProtectedRoute } from "@/components/protected-route"

export default function MessagesPage() {
  return (
    <ProtectedRoute>
      <ChatProvider>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <TopNav />
              <main className="flex-1 flex">
                <div className="flex w-full h-[calc(100vh-4rem)]">
                  <ChatSidebar />
                  <ChatWindow />
                </div>
              </main>
              <MobileNav />
            </div>
          </div>
        </SidebarProvider>
      </ChatProvider>
    </ProtectedRoute>
  )
}
