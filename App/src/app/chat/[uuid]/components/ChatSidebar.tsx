import React, { use, useState, useEffect } from 'react';
import { UserPlus, Users, Search, X, Plus } from 'lucide-react';

interface User {
  id: string;
  username: string;
  email?: string;
  avatar?: string;
}

interface Conversation {
  id: string;
  isGroup: boolean;
  otherUser?: User;
  name?: string;
  lastMessage?: {
    content: string;
    createdAt: string;
  };
  participants: User[];
}

interface ChatSidebarProps {
  conversations: Conversation[];
  currentUserId: string;
  onSelectChat: (chatId: string) => void;
  onCreateConversation: (userId: string) => void;
  onCreateGroup: (name: string, participantIds: string[]) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ 
  conversations, 
  currentUserId, 
  onSelectChat, 
  onCreateConversation,
  onCreateGroup
}) => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [groupName, setGroupName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  
  const handleSearch = async () => {
    
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }
    
    try {
      const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
    
      if (!token) {
        throw new Error('No token found. Please log in.');
      }
    
      const response = await fetch(`/api/chat/users?search=${searchTerm}&excludeUserId=${currentUserId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    
      if (!response.ok) throw new Error('Search failed');
      
      const users = await response.json();
      console.log("Users",users);
      setSearchResults(users);
    } catch (error) {
      console.error('Error searching users:', error);
    }
    
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);
  
  const handleUserClick = (user: User) => {
    console.log("userclicked")
    onCreateConversation(user.id);
    setShowAddUser(false);
    setSearchTerm('');
    setSearchResults([]);
  };
  
  const handleAddToGroup = (user: User) => {
    if (!selectedUsers.some(u => u.id === user.id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };
  
  const handleRemoveFromGroup = (userId: string) => {
    setSelectedUsers(selectedUsers.filter(user => user.id !== userId));
  };
  
  const handleCreateGroup = () => {
    if (groupName.trim() && selectedUsers.length > 0) {
      onCreateGroup(
        groupName, 
        selectedUsers.map(user => user.id)
      );
      setShowCreateGroup(false);
      setGroupName('');
      setSelectedUsers([]);
    }
  };
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-80 bg-gray-100 flex flex-col  h-full border-r">
      {/* Search & Actions */}
      <div className="p-4 border-b">
        <div className="flex space-x-2 mb-4">
          <button 
            onClick={() => {
              setShowAddUser(true);
              setShowCreateGroup(false);
            }}
            className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-md flex-1 hover:bg-blue-600"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            <span>New Chat</span>
          </button>
          
          <button 
            onClick={() => {
              setShowCreateGroup(true);
              setShowAddUser(false);
            }}
            className="flex items-center justify-center bg-green-500 text-white p-2 rounded-md flex-1 hover:bg-green-600"
          >
            <Users className="w-5 h-5 mr-2" />
            <span>New Group</span>
          </button>
        </div>
        
        {/* Add User Panel */}
        {showAddUser && (
          <div className="bg-white p-3 rounded-md shadow-md mb-3">
            <div className="flex items-center mb-2">
              <h3 className="font-semibold flex-1">New Conversation</h3>
              <button onClick={() => setShowAddUser(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex mb-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 p-2 border rounded-l-md focus:outline-none"
                placeholder="Search users..."
              />
              <button 
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded-r-md"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <div className="max-h-40 overflow-y-auto">
              {searchResults.map(user => (
                // console.log("fdf",user),
                <div 
                  key={user.id}
                  onClick={() =>{handleUserClick(user)}}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center"
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                    {user["user_profile"].avatar ? (
                      <img src={user["user_profile"].avatar} alt={user["user_profile"].username} className="w-8 h-8 rounded-full" />
                    ) : (
                      <span className='text-black'>{user["user_profile"].username.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <span className='text-black'>{user["user_profile"].username}</span>
                </div>
              ))}
              {searchTerm && searchResults.length === 0 && (
                <p className="text-gray-500 p-2">No users found</p>
              )}
            </div>
          </div>
        )}
        
        {/* Create Group Panel */}
        {showCreateGroup && (
          <div className="bg-white p-3 rounded-md shadow-md mb-3">
            <div className="flex items-center mb-2">
              <h3 className="font-semibold flex-1">Create Group</h3>
              <button onClick={() => setShowCreateGroup(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none mb-2"
              placeholder="Group name"
            />
            
            <div className="flex mb-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 p-2 border rounded-l-md focus:outline-none"
                placeholder="Add participants..."
              />
              <button 
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded-r-md"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            {/* Selected Users */}
            {selectedUsers.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {selectedUsers.map(user => (
                  <div 
                    key={user.id}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md flex items-center text-sm"
                  >
                    <span>{user["user_profile"].username}</span>
                    <button 
                      onClick={() => handleRemoveFromGroup(user.id)}
                      className="ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Search Results */}
            <div className="max-h-32 overflow-y-auto">
              {searchResults.map(user => (
                <div 
                  key={user.id}
                  onClick={() => handleAddToGroup(user)}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center"
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                    {user["user_profile"].avatar ? (
                      <img src={user["user_profile"].avatar} alt={user["user_profile"].username} className="w-8 h-8 rounded-full" />
                    ) : (
                      <span>{user["user_profile"].username.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <span>{user["user_profile"].username}</span>
                  {selectedUsers.some(u => u.id === user.id) && (
                    <div className="ml-auto w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="12px" height="12px">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleCreateGroup}
              disabled={!groupName.trim() || selectedUsers.length === 0}
              className="w-full bg-green-500 text-white p-2 rounded-md mt-2 hover:bg-green-600 disabled:bg-gray-300"
            >
              Create Group
            </button>
          </div>
        )}
      </div>
      
      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map(conversation => (
          <div
            key={conversation.id}
            onClick={() => {
              setSelectedChat(conversation.id);
              onSelectChat(conversation.id);
            }}
            className={`p-3 border-b cursor-pointer hover:bg-gray-200 ${
              selectedChat === conversation.id ? 'bg-gray-200' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                {conversation.isGroup ? (
                  <Users className="w-6 h-6 text-gray-600" />
                ) : conversation.otherUser?.avatar ? (
                  <img src={conversation.otherUser.avatar} alt={conversation.otherUser.username} className="w-10 h-10 rounded-full" />
                ) : (
                  <span className="text-gray-600">
                    {(conversation.isGroup ? conversation.name : conversation.otherUser?.username)?.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <h3 className="font-medium truncate">
                    {conversation.isGroup 
                      ? conversation.name 
                      : conversation.otherUser?.username}
                  </h3>
                  {conversation.lastMessage && (
                    <span className="text-xs text-gray-500">
                      {formatTime(conversation.lastMessage.createdAt)}
                    </span>
                  )}
                </div>
                
                {conversation.lastMessage && (
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.lastMessage.content || 'Media message'}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {conversations.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            <p>No conversations yet</p>
            <p className="text-sm">Start a new chat or create a group</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;