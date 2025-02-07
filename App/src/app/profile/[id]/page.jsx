"use client";
import { useParams } from "next/navigation";
import { Button, Tabs, Tag } from "antd";
import { UserOutlined, EditOutlined, MailOutlined } from "@ant-design/icons";
import { LinkedIn, Twitter, Instagram, GitHub } from "@mui/icons-material";

export default function ProfilePage() {
  const { uuid } = useParams();
  // Mock data - replace with actual data fetching
  const user = {
    name: "Vorgelman",
    location: "Los Angeles, USA",
    stats: [
      { label: "Swabs", value: "2098" },
      { label: "Uber", value: "313" },
      { label: "Paris", value: "79" },
      { label: "Friends", value: "124" },
    ],
    bio: "Welcome to my creative space! Passionate about writing, design, teaching, and collaboration. Let's connect and create something amazing!",
  };

  const tabs = [
    {
      key: "1",
      label: "Published",
      children: <div className="p-4">Published content grid...</div>,
    },
    {
      key: "2",
      label: "Collections",
      children: <div className="p-4">Collections display...</div>,
    },
    {
      key: "3",
      label: "Followed",
      children: <div className="p-4">Followed users list...</div>,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blurred Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-800">Profile</span>
          </div>
          <div className="flex gap-4">
            <Button icon={<EditOutlined />}>Edit Profile</Button>
            <Button type="primary" icon={<MailOutlined />}>
              Contact
            </Button>
          </div>
        </nav>
      </header>

      {/* Profile Section */}
      <main className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <section className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-8 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-gray-100 p-4 rounded-full">
              <UserOutlined className="text-6xl text-gray-400" />
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {user.name}
              </h1>
              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <span>📍 {user.location}</span>
                <Tag color="blue">Available for Collabs</Tag>
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {user.stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{user.bio}</p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200">
          <Tabs
            defaultActiveKey="1"
            items={tabs}
            tabBarStyle={{ padding: "0 24px" }}
            className="profile-tabs"
          />
        </section>

        {/* Social Links */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button
            shape="circle"
            icon={<LinkedIn className="text-blue-600" />}
            className="hover:scale-110 transition-transform"
          />
          <Button
            shape="circle"
            icon={<Twitter className="text-sky-500" />}
            className="hover:scale-110 transition-transform"
          />
          <Button
            shape="circle"
            icon={<Instagram className="text-pink-600" />}
            className="hover:scale-110 transition-transform"
          />
          <Button
            shape="circle"
            icon={<GitHub className="text-gray-800" />}
            className="hover:scale-110 transition-transform"
          />
        </div>
      </main>
    </div>
  );
}