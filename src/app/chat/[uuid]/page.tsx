"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSocket } from '../../hooks/useSocket';
import ChatInput from './components/ChatInput';
import ChatNavbar from './components/Navbar';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';
import Cookies from 'js-cookie';
import { Menu, X } from 'lucide-react';

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
  email: string;
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
  const { uuid } = useParams<{ uuid: string }>();
  const chatId = uuid;
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const socket = useSocket();
  
  useEffect(() => {
    if (!socket || !currentUser || !chatId) return;
  
    // Join the current conversation
    socket.emit("register", { userId: currentUser.id, conversationId: chatId });
  
    return () => {
      // Leave the conversation when the component unmounts or chatId changes
      socket.emit("leaveConversation", { userId: currentUser.id, conversationId: chatId });
    };
  }, [socket, currentUser, chatId]);
  
  

  useEffect(() => {
    if (!socket) return;
  
    socket.on("receiveMessage", (msg: Message) => {
      console.log("Received message:", msg);
  
      // Only add the message if it belongs to the current chat
      if (msg["conversationId"] === chatId) {
        setMessages((prev) => {
          console.log("Previous messages:", prev);
  
          // Check for duplicates
          if (prev.some((message) => message.id === msg.id)) {
            console.log("Duplicate message detected, ignoring.");
            return prev;
          }
  
          return [...prev, msg];
        });
      } else {
        console.log(`Message ignored: intended for conversation ${msg["conversationId"]}, current chat is ${chatId}`);
      }
    });
  
    return () => {
      socket.off("receiveMessage");
    };
  }, [socket, chatId]); // Add chatId as a dependency
  


  // Load current user from localStorage
    useEffect(() => {
      const fetchUser = async () => {
        const user_data = localStorage.getItem('user');

        if (!user_data) {
          router.push('/');
          return;
        }
  
        try {
          const uuid = user_data;
          const response = await fetch(`/api/profile/${uuid}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user profile');
          }
  
          const userData = await response.json();
  
          const user: User = {
            id: uuid,
            username: userData.user_name,
            email: userData.email,
            avatar: userData.avatarUrl,
          };
  
          setCurrentUser(user);
          console.log('Loaded user:', user);
        } catch (error) {
          console.error('Error loading user:', error);
          router.push('/');
        }
      };
  
      fetchUser();
    }, [router]);
  
  // Fetch conversations
  useEffect(() => {
    const fetchConversations = async () => {
      if (!currentUser) return;
      console.log("Current User",currentUser);
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch(`/api/chat/conversations?userId=${currentUser.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.log("Conversations",response);
        if (!response.ok) throw new Error('Failed to fetch conversations');
        const data = await response.json();
        setConversations(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching conversations:', error);
        setLoading(false);
      }
    };

    fetchConversations();
    console.log("chatid", chatId);
  }, [currentUser]);

  // Fetch messages for selected chat
  useEffect(() => {
    const fetchMessages = async () => {
      if (!chatId || !currentUser) return;

      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch(`/api/chat/messages?chatId=${chatId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!response.ok) throw new Error('Failed to fetch messages');
        
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [chatId, currentUser]);

  const handleSendMessage = async (content: string, mediaFiles?: File[]) => {
  if (!content.trim() && (!mediaFiles || mediaFiles.length === 0) || !currentUser || !chatId) return;

  const tempId = `temp-${Date.now()}`;
  const newMessage: Message = {
    id: tempId,
    senderId: currentUser.id,
    content,
    createdAt: new Date().toISOString(),
    media: mediaFiles?.map(file => ({
      id: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : 'file',
      url: URL.createObjectURL(file),
    })) || [],
    isRead: false,
    sender: {
      id: currentUser.id,
      username: currentUser.username,
      avatar: currentUser.avatar,
    }
  };

  setMessages((prev) => [...prev, newMessage]);

  try {
    const token = localStorage.getItem('authToken');
    const formData = new FormData();
    formData.append('content', content);
    mediaFiles?.forEach(file => formData.append('media', file));
    formData.append('senderId', currentUser.id);
    formData.append('chatId', chatId as string);

    const response = await fetch('/api/chat/messages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) throw new Error('Failed to send message');

    const savedMessage = await response.json();

    // Replace temporary message with actual message from server
    setMessages(prev => prev.map(msg => msg.id === tempId ? savedMessage : msg));

    // Update conversation list
    setConversations(prev =>
      prev.map(conv => conv.id === chatId ? { ...conv, lastMessage: savedMessage } : conv)
    );

    // **Emit the message via WebSocket**
    if (socket) {
      console.log("Emitting message via WebSocket...");
      socket.emit("sendMessage", savedMessage);
    }
  } catch (error) {
    console.error('Error sending message:', error);
    setMessages(prev => prev.filter(msg => msg.id !== tempId));
  }
};


  const handleCreateConversation = async (userId: string) => {
    console.log("here");
    if (!currentUser) return;
    
    try {
      const token = localStorage.getItem('authToken');
      console.log("Token",token);
      const response = await fetch('/api/chat/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          participants: [currentUser.id, userId],
          isGroup: false,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to create conversation');
      
      const newConversation = await response.json();
      
      // Add to conversations list if not already there
      setConversations(prev => {
        if (!prev.some(conv => conv.id === newConversation.id)) {
          return [...prev, newConversation];
        }
        return prev;
      });
      
      // Navigate to the new conversation
      router.push(`/chat/${newConversation.id}`);
    } catch (error) {console.error('Error creating conversation:', error);
    }
  };

  const handleCreateGroup = async (name: string, participantIds: string[]) => {
    if (!currentUser) return;
    
    // Make sure to include current user in group
    if (!participantIds.includes(currentUser.id)) {
      participantIds.push(currentUser.id);
    }
    
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/chat/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          participants: participantIds,
          isGroup: true,
          name,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to create group');
      
      const newGroup = await response.json();
      
      // Add to conversations list
      setConversations(prev => [...prev, newGroup]);
      
      // Navigate to the new group
      router.push(`/chat/${newGroup.id}`);
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    Cookies.remove('authToken');
    
    // Redirect to login
    router.push('/auth/signin');
  };

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
      <div className="flex bg-gray-200 sm:hidden py-2 px-4 " onClick={() => setSidebarOpen(!sidebarOpen)}>
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
          
        {
          !chatId && (
            <div className="flex-1 flex items-center justify-center bg-gray-100">
              <h1 className="text-2xl font-bold text-gray-500">Select a conversation or start a new one</h1>
            </div>
          )
        }
        {/* <div className="flex-1 flex flex-col overflow-y-scroll bg-gray-200"> */}
        {chatId && ( 
          
          <div className="flex-1 flex flex-col">
            <div className='flex-1 overflow-y-scroll bg-gray-200'>
            <ChatWindow 
              messages={messages} 
              currentUserId={currentUser.id} 
              conversation={conversations.find(c => c.id === chatId)}
            />
            </div>
          <ChatInput onSendMessage={handleSendMessage} />
          </div>
        )}
        </div>
      {/* </div> */}
    </div>
  );
}