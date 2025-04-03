import React, { useEffect, useRef } from 'react';

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
  sender: {
    id: string;
    username: string;
    avatar?: string;
  };
}

interface User {
  id: string;
  username: string;
  avatar?: string;
}

interface Conversation {
  id: string;
  isGroup: boolean;
  name?: string;
  otherUser?: User;
  participants: User[];
}

interface ChatWindowProps {
  messages: Message[];
  currentUserId: string;
  conversation?: Conversation;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, currentUserId, conversation }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // console.log("COnversation",conversation);
  }, [messages]);
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  // Group messages by date
  const messagesByDate: { [date: string]: Message[] } = {};
  messages.forEach(message => {
    const date = formatDate(message.createdAt);
    if (!messagesByDate[date]) {
      messagesByDate[date] = [];
    }
    messagesByDate[date].push(message);
  });

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      {conversation && (
        <div className="p-3 border-b flex items-center bg-white shadow-sm">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
            {conversation.isGroup ? (
              <span className="text-gray-600 font-semibold">
                {conversation.name?.charAt(0).toUpperCase()}
              </span>
            ) : conversation.otherUser?.avatar ? (
              <img src={conversation.otherUser.avatar} alt={conversation.otherUser.username} className="w-10 h-10 rounded-full" />
            ) : (
              <span className="text-gray-600 font-semibold">
                {conversation.otherUser?.username.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          
          <div>
            <h3 className="font-medium">
              {conversation.isGroup 
                ? conversation.name 
                : conversation.otherUser?.username}
            </h3>
            
            {conversation.isGroup && (
              <p className="text-xs text-gray-500">
                {conversation.participants.map(participant => participant["user"].username).join(', ')}
              </p>
            )}
          </div>
        </div>
      )}
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {Object.keys(messagesByDate).map(date => (
          <div key={date}>
            <div className="text-center my-3">
              <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                {date}
              </span>
            </div>
            
            {messagesByDate[date].map((message, index) => {
              const isCurrentUser = message.senderId === currentUserId;
              const showAvatar = !isCurrentUser && (
                index === 0 || 
                messagesByDate[date][index - 1].senderId !== message.senderId
              );
              
              return (
                <div
                  key={message.id}
                  className={`mb-3 flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isCurrentUser && showAvatar && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2 mt-1">
                      {message.sender.avatar ? (
                        <img src={message.sender.avatar} alt={message.sender.username} className="w-8 h-8 rounded-full" />
                      ) : (
                        <span className="text-xs">{message.sender.username.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                  )}
                  
                  {!isCurrentUser && !showAvatar && <div className="w-8 mr-2"></div>}
                  
                  <div className={`max-w-[70%] ${isCurrentUser ? 'order-1' : 'order-2'}`}>
                    {!isCurrentUser && showAvatar && (
                      <div className="text-xs text-gray-500 mb-1 ml-1">
                        {message.sender.username}
                      </div>
                    )}
                    
                    <div
                      className={`rounded-lg p-3 ${
                        isCurrentUser
                          ? 'bg-blue-500 text-white rounded-tr-none'
                          : 'bg-white rounded-tl-none shadow-sm'
                      }`}
                    >
                      {message.content && <div className="mb-1">{message.content}</div>}
                      
                      {message.media.map((media) => (
                        <div key={media.id} className="mt-2">
                          {media.type.includes('image') ? (
                            <img
                              src={media.url}
                              alt="Attachment"
                              className="max-h-60 rounded-md"
                            />
                          ) : (
                            <a
                              href={media.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center p-2 rounded-md ${
                                isCurrentUser ? 'bg-blue-400' : 'bg-gray-100'
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <span>Document</span>
                            </a>
                          )}
                        </div>
                      ))}
                      
                      <div className={`text-xs mt-1 ${isCurrentUser ? 'text-blue-200' : 'text-gray-500'}`}>
                        {formatTime(message.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
        
        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500">No messages yet. Start the conversation!</p>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow;