"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { ChatSidebar } from "../../../components/chat-sidebar"
import { ChatWindow } from "../../../components/chat-window"
import { ChatProvider } from "@/lib/chat-context"
import { ProtectedRoute } from "../../../components/protected-route"

export default function MessagesPage() {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-hidden">
              <ChatProvider>
                <div className="h-full overflow-hidden">
                  <div className="flex w-full h-[calc(100vh-4rem)]">
                    <ChatSidebar />
                    <ChatWindow />
                  </div>
                </div>
              </ChatProvider>
            </main>
            <MobileNav />
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  )
}
