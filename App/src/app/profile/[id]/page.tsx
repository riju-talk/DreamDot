"use client";
import { useParams } from "next/navigation";
import { Button, Tabs, Tag, Avatar } from "antd";
import { UserOutlined, EditOutlined, MessageOutlined, PlusOutlined, CameraOutlined } from "@ant-design/icons";
import Navbar from "../../(components)/Navbar";

export default function ProfilePage() {
  const { uuid } = useParams();
  
  // Mock data
  const user = {
    name: "Vorgelman",
    location: "Los Angeles, USA",
    coverPhoto: "https://picsum.photos/1600/400",
    avatar: "https://picsum.photos/200",
    friends: 1245,
    following: 2894,
    posts: 543,
    bio: "Welcome to my creative space! Passionate about writing, design, teaching, and collaboration.",
    work: "Digital Creator at Creative Studio",
    education: "University of California, Los Angeles",
    contact: "vorgelman@example.com",
    socialLinks: {
      facebook: "vorgelman",
      twitter: "@vorgel",
      instagram: "@vorgelman"
    },
    photos: Array(9).fill().map((_, i) => `https://picsum.photos/300/300?random=${i}`),
    friendsList: Array(9).fill().map((_, i) => ({
      name: `Friend ${i+1}`,
      avatar: `https://picsum.photos/100/100?random=${i}`
    }))
  };

  const tabs = [
    {
      key: "1",
      label: "Posts",
      children: <div className="grid grid-cols-1 gap-4 p-4">User posts feed...</div>,
    },
    {
      key: "2",
      label: "About",
      children: (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Intro</h3>
            <p className="mb-2">📖 {user.bio}</p>
            <p className="mb-2">🏢 {user.work}</p>
            <p className="mb-2">🎓 {user.education}</p>
            <p className="mb-2">📍 Lives in {user.location}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="mb-2">📧 {user.contact}</p>
            <p className="mb-2">🔗 Facebook.com/{user.socialLinks.facebook}</p>
            <p className="mb-2">🐦 {user.socialLinks.twitter}</p>
            <p className="mb-2">📸 {user.socialLinks.instagram}</p>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Friends",
      children: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">{user.friends} friends</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {user.friendsList.map((friend, i) => (
              <div key={i} className="bg-white p-2 rounded-lg shadow-sm">
                <img src={friend.avatar} className="w-full h-40 object-cover rounded-md mb-2"/>
                <p className="text-sm font-medium">{friend.name}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: "Photos",
      children: (
        <div className="p-6">
          <div className="grid grid-cols-3 gap-2">
            {user.photos.map((photo, i) => (
              <img key={i} src={photo} className="w-full h-32 md:h-40 object-cover rounded-md"/>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

      {/* Cover Photo Section */}
      <div className="h-64 bg-blue-200 relative">
        <img 
          src={user.coverPhoto} 
          className="w-full h-full object-cover"
          alt="Cover"
        />
        <div className="absolute -bottom-16 left-4 md:left-8">
          <div className="relative">
            <img 
              src={user.avatar} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white"
              alt="Profile"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
              <CameraOutlined className="text-lg"/>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <main className="container mx-auto px-4 md:px-8 pt-20">
        <section className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.friends} friends</p>
            </div>
            
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button 
                type="primary" 
                icon={<PlusOutlined />}
                className="bg-blue-500 hover:bg-blue-600 flex items-center"
              >
                Add Friend
              </Button>
              <Button 
                icon={<MessageOutlined />}
                className="flex items-center"
              >
                Message
              </Button>
              <Button 
                icon={<EditOutlined />}
                className="flex items-center"
              >
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Profile Navigation */}
          <div className="mt-4 border-t pt-4">
            <Tabs
              defaultActiveKey="1"
              items={tabs}
              tabBarStyle={{ 
                margin: 0,
                fontSize: '1rem'
              }}
              className="profile-tabs"
            />
          </div>
        </section>

        {/* Friends Preview */}
        <section className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h3 className="text-lg font-semibold mb-4">Friends</h3>
          <div className="grid grid-cols-3 gap-2">
            {user.friendsList.slice(0, 6).map((friend, i) => (
              <div key={i} className="relative group">
                <img 
                  src={friend.avatar} 
                  className="w-full h-32 object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm truncate">
                  {friend.name}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}