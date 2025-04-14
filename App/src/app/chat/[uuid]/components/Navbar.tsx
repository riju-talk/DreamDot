import React, { useState } from 'react';
import { Menu, LogOut, User, Settings, ArrowLeft as Back, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ChatNavbarProps {
  userId: string;
  username: string;
  onLogout: () => void;
}

const ChatNavbar: React.FC<ChatNavbarProps> = ({ userId, username, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <Back className="w-6 h-6 mx-2 cursor-pointer" onClick={() => window.history.back()}/>
        <Home className="w-6 h-6 mx-2 cursor-pointer" onClick={() => window.location.href = `/feed/${userId}` }/>
      </div>
      
      <div className="relative">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md"
        >
          <span>{username}</span>
          <Menu className="w-5 h-5" />
        </button>
        
        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <button 
              className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => {
                setShowMenu(false);
                // Handle profile click
              }}
            >
              <User className="w-5 h-5 mr-2" />
              <button onClick={() => {router.push(`/profile/${userId}`)}}>Profile</button>
            </button>
            
            <button 
              className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => {
                setShowMenu(false);
                // Handle settings click
              }}
            >
              <Settings className="w-5 h-5 mr-2" />
              <button onClick={() => {router.push(`/settings/${userId}`)}}>Settings</button>
            </button>
            
            <hr className="my-1" />
            
            <button 
              className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
              onClick={() => {
                setShowMenu(false);
                onLogout();
              }}
            >
              <LogOut className="w-5 h-5 mr-2" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatNavbar;