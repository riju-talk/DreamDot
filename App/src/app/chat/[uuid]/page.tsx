"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Menu, X } from "lucide-react";

import { useSocket } from "../../hooks/useSocket";
import ChatNavbar from "./components/Navbar";
import ChatSidebar from "./components/ChatSidebar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

interface Media {
  id: string;
  type: string;
  url: string;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  createdAt: string;
  media: Media[];
  isRead: boolean;
  sender: {
    id: string;
    username: string;
    avatar?: string;
  };
}

interface User {
  id: string;
  username: string;
  email?: string;
  avatar?: string;
}

interface Group {
  id: string;
  name: string;
  adminId: string;
}

interface Conversation {
  id: string;
  isGroup: boolean;
  otherUser?: User;
  name?: string;
  lastMessage?: Message;
  participants: User[];
}

export default function ChatPage() {
  const router = useRouter();
  const { uuid: paramUuid } = useParams<{ uuid: string }>() || {};
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const socket = useSocket();

  // Initialize currentUser using localStorage
  useEffect(() => {
    const localUuid = localStorage.getItem("user");
    if (!localUuid) {
      router.push("/auth/signin");
      return;
    }

    setCurrentUser({
      id: localUuid,
      username: "User-" + localUuid.slice(0, 5), // Placeholder username
    });
    setLoading(false);
  }, [router]);

  // Fetch full user profile (optional)
  useEffect(() => {
    const fetchFullUserProfile = async (uuid: string) => {
      try {
        const response = await fetch(`/profile/${uuid}`);
        if (!response.ok) {
          console.error("Error fetching full user profile:", response.status);
          return;
        }
        const data = await response.json();
        setCurrentUser((prev) => ({
          ...prev!,
          username: data.user_name || prev!.username,
          email: data.email || prev!.email,
        }));
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };

    if (currentUser?.id) {
      const needFullProfile = false; // Set to true if full profile is needed
      if (needFullProfile) {
        fetchFullUserProfile(currentUser.id);
      }
    }
  }, [currentUser]);

  // Join/Leave conversation using the socket
  useEffect(() => {
    if (!socket || !paramUuid || !currentUser?.id) return;

    socket.emit("register", { userId: currentUser.id, conversationId: paramUuid });
    return () => {
      socket.emit("leaveConversation", {
        userId: currentUser.id,
        conversationId: paramUuid,
      });
    };
  }, [socket, paramUuid, currentUser?.id]);

  // Handle receiving messages
  useEffect(() => {
    if (!socket || !paramUuid) return;

    function handleReceiveMessage(msg: Message) {
      console.log("Received message:", msg);
      if (msg["conversationId"] === paramUuid) {
        setMessages((prev) => {
          if (prev.some((message) => message.id === msg.id)) {
            console.log("Duplicate message detected, ignoring.");
            return prev;
          }
          return [...prev, msg];
        });
      } else {
        console.log(
          `Message ignored: intended for conversation ${msg["conversationId"]}, current chat is ${paramUuid}`
        );
      }
    }

    socket.on("receiveMessage", handleReceiveMessage);
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [socket, paramUuid]);

  // Fetch conversations
  useEffect(() => {
    async function fetchConversations() {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          `/api/chat/conversations?userId=${currentUser?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch conversations");
        }
        const data = await response.json();
        setConversations(data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    }
    if (currentUser?.id) {
      fetchConversations();
    }
  }, [currentUser?.id]);

  // Fetch messages for selected chat
  useEffect(() => {
    async function fetchMessages() {
      if (!paramUuid) return;
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(`/api/chat/messages?chatId=${paramUuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
    fetchMessages();
  }, [paramUuid]);

  // Send message
  const handleSendMessage = async (content: string, mediaFiles?: File[]) => {
    if (!content.trim() && (!mediaFiles || mediaFiles.length === 0)) return;
    if (!paramUuid || !currentUser?.id) return;

    const tempId = `temp-${Date.now()}`;
    const newMessage: Message = {
      id: tempId,
      senderId: currentUser.id,
      content,
      createdAt: new Date().toISOString(),
      media:
        mediaFiles?.map((file) => ({
          id: URL.createObjectURL(file),
          type: file.type.startsWith("image/") ? "image" : "file",
          url: URL.createObjectURL(file),
        })) || [],
      isRead: false,
      sender: {
        id: currentUser.id,
        username: currentUser.username,
        avatar: currentUser.avatar,
      },
    };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const token = localStorage.getItem("authToken");
      const formData = new FormData();
      formData.append("content", content);
      mediaFiles?.forEach((file) => formData.append("media", file));
      formData.append("senderId", currentUser.id);
      formData.append("chatId", paramUuid);

      const response = await fetch("/api/chat/messages", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      const savedMessage = await response.json();

      setMessages((prev) =>
        prev.map((msg) => (msg.id === tempId ? savedMessage : msg))
      );
      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === paramUuid ? { ...conv, lastMessage: savedMessage } : conv
        )
      );

      if (socket) {
        socket.emit("sendMessage", savedMessage);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => prev.filter((msg) => msg.id !== tempId));
    }
  };

  // Create one-on-one conversation
  const handleCreateConversation = async (userId: string) => {
    if (!currentUser) return;
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("/api/chat/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          participants: [currentUser.id, userId],
          isGroup: false,
        }),
      });
      if (!response.ok) throw new Error("Failed to create conversation");
      const newConversation = await response.json();

      setConversations((prev) => {
        if (!prev.some((conv) => conv.id === newConversation.id)) {
          return [...prev, newConversation];
        }
        return prev;
      });
      router.push(`/chat/${currentUser.id}`);
    } catch (error) {
      console.error("Error creating conversation:", error);
    }
  };

  // Create a group conversation
  const handleCreateGroup = async (name: string, participantIds: string[]) => {
    if (!currentUser) return;
    if (!participantIds.includes(currentUser.id)) {
      participantIds.push(currentUser.id);
    }
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("/api/chat/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          participants: participantIds,
          isGroup: true,
          name,
        }),
      });
      if (!response.ok) throw new Error("Failed to create group");
      const newGroup = await response.json();

      setConversations((prev) => [...prev, newGroup]);
      router.push(`/chat/${newGroup.id}`);
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    Cookies.remove("authToken");
    router.push("/auth/signin");
  };

  // Render logic
  if (loading || !currentUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <ChatNavbar
        userId={currentUser.id}
        username={currentUser.username}
        onLogout={handleLogout}
      />
      <div
        className="flex bg-gray-200 sm:hidden py-2 px-4"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <X className="w-6 h-6 bg-red-500 text-white" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </div>
      <div className="flex flex-1 overflow-hidden">
        {sidebarOpen && (
          <ChatSidebar
            conversations={conversations}
            currentUserId={currentUser.id}
            onSelectChat={(id) => router.push(`/chat/${id}`)}
            onCreateConversation={handleCreateConversation}
            onCreateGroup={handleCreateGroup}
          />
        )}

        {!paramUuid && (
          <div className="flex-1 flex items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-500">
              Select a conversation or start a new one
            </h1>
          </div>
        )}
        {paramUuid && (
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-scroll bg-gray-200">
              <ChatWindow
                messages={messages}
                currentUserId={currentUser.id}
                conversation={conversations.find((c) => c.id === paramUuid)}
              />
            </div>
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        )}
      </div>
    </div>
  );
}