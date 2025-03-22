"use client";
import { Avatar, Button, Typography, Card, List, Tag } from 'antd';
import { DollarOutlined, PlayCircleOutlined, ReadOutlined, HeartFilled, MessageFilled, ShareAltOutlined } from '@ant-design/icons';
const { Text, Title } = Typography;
import { GroupOutlined } from '@ant-design/icons';
import { useMemo } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;


// Dummy feed data
const feedData = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  user: `SpaceExplorer_${i+1}`,
  avatar: `https://i.pravatar.cc/150?img=${i+20}`,
  content: `New discovery in sector ${String.fromCharCode(65+i)}-${i+100}! 
            ${i%2 === 0 ? 'Check out these findings 🚀' : 'Join the discussion 👇'}`,
  media: `https://source.unsplash.com/random/800x600?space,galaxy,nebula&${i}`,
  likes: Math.floor(Math.random() * 1000) + 100,
  comments: Math.floor(Math.random() * 100) + 10,
  shares: Math.floor(Math.random() * 50) + 5,
  timestamp: `${Math.floor(Math.random() * 12) + 1}h ago`
}));


function generateFeedData() {
  // Move your data generation logic here
  return Array.from({ length: 10 }, (_, i) => ({
  id: i,
  user: `SpaceExplorer_${i+1}`,
  avatar: `https://i.pravatar.cc/150?img=${i+20}`,
  content: `New discovery in sector ${String.fromCharCode(65+i)}-${i+100}! 
            ${i%2 === 0 ? 'Check out these findings 🚀' : 'Join the discussion 👇'}`,
  media: `https://source.unsplash.com/random/800x600?space,galaxy,nebula&${i}`,
  likes: Math.floor(Math.random() * 1000) + 100,
  comments: Math.floor(Math.random() * 100) + 10,
  shares: Math.floor(Math.random() * 50) + 5,
  timestamp: `${Math.floor(Math.random() * 12) + 1}h ago`
  }));
}

export function Feed() {
  const feedData = useMemo(() => generateFeedData(), []);
  
  return (
    <div className="p-4">
      <List
        dataSource={feedData}
        renderItem={(item) => (
          <Card className="mb-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <List.Item className="!px-0 !py-0 border-none">
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} size={48} />}
                title={
                  <div className="flex items-center gap-2">
                    <Text strong>{item.user}</Text>
                    <Text type="secondary">• {item.timestamp}</Text>
                  </div>
                }
                description={
                  <>
                    <Text className="text-lg">{item.content}</Text>
                    <img 
                      src={item.media} 
                      alt="Post media" 
                      className="w-full h-96 object-cover rounded-xl my-4"
                    />
                    <div className="flex gap-4">
                      <Button icon={<HeartFilled />} className="flex items-center">
                        {item.likes.toLocaleString()}
                      </Button>
                      <Button icon={<MessageFilled />}>
                        {item.comments.toLocaleString()}
                      </Button>
                      <Button icon={<ShareAltOutlined />}>
                        {item.shares.toLocaleString()}
                      </Button>
                    </div>
                  </>
                }
              />
            </List.Item>
          </Card>
        )}
      />
    </div>
  );
}

// Separate Marketplace Component
// Marketplace.tsx



export function Marketplace() {
  const marketItems = [
    {
      title: "Exclusive Travel Blog",
      author: "Alex Johnson",
      price: "$5",
      description: "Discover hidden gems around the world with this exclusive travel blog",
      image: "https://source.unsplash.com/random/800x600?travel,canyon",
      category: "Travel"
    },
    {
      title: "Music Sample Pack",
      author: "DJ Cosmic",
      price: "$15",
      description: "Enhance your music production with this exclusive sample pack",
      image: "https://source.unsplash.com/random/800x600?music,studio",
      category: "Music"
    },
    {
      title: "New Comic Out",
      author: "Overlight Comics",
      price: "$15",
      description: "Will Ersa finally be able to save the galaxy? Find out in this new comic!",
      image: "https://source.unsplash.com/random/800x600?music,studio",
      category: "Comics"
    },
    {
      title: "Coures on Remix.js",
      author: "Arthur Wesly",
      price: "$15",
      description: "Tired of React? Learn Remix.js and build faster server rendered websites",
      image: "https://source.unsplash.com/random/800x600?music,studio",
      category: "Tutorial"
    }
  ];

  return (
    <div className="p-4 space-y-6 h-full overflow-auto">
        <Tabs defaultActiveKey="1" className="mx-12">
          <TabPane tab="Explore" key="1">
            {marketItems.map((item, index) => (
              <Card key={index} className="!mb-6 !rounded-lg hover:shadow-lg transition-shadow w-4/5 mx-auto">
                <img 
                  src={item.image} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                  alt={item.title} 
                />
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag color="blue">{item.category}</Tag>
                    <Text type="secondary">by {item.author}</Text>
                  </div>
                  
                  <Title level={5} className="!mt-0 !mb-2">{item.title}</Title>
                  <Text className="block text-gray-600">{item.description}</Text>
                  
                  <div className="flex justify-between items-center mt-4">
                    <Text strong className="text-lg">{item.price}</Text>
                    <Button type="primary" icon={<DollarOutlined />}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabPane>
          <TabPane tab="I'm Feeling Lucky" key="2">
            <div className="text-center">
              <Title level={5}>Feeling Lucky?</Title>
              <Text>Try exploring random items from our marketplace!</Text>
            </div>
          </TabPane>
        </Tabs>
      
      {marketItems.map((item, index) => (
        <Card key={index} className="!mb-6 !rounded-lg hover:shadow-lg transition-shadow w-4/5 mx-auto">
          <img 
            src={item.image} 
            className="w-full h-48 object-cover rounded-t-lg" 
            alt={item.title} 
          />
          
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Tag color="blue">{item.category}</Tag>
              <Text type="secondary">by {item.author}</Text>
            </div>
            
            <Title level={5} className="!mt-0 !mb-2">{item.title}</Title>
            <Text className="block text-gray-600">{item.description}</Text>
            
            <div className="flex justify-between items-center mt-4">
              <Text strong className="text-lg">{item.price}</Text>
              <Button type="primary" icon={<DollarOutlined />}>
                Buy Now
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
// Enhanced Sidebar Component
const sidebarData = {
    messages: Array.from({ length: 10 }, (_, i) => ({
      id: i,
      user: `CosmicUser_${i+1}`,
      avatar: `https://i.pravatar.cc/150?img=${i+10}`,
      online: Math.random() > 0.3,
      lastMessage: i % 2 === 0 ? "See you at the meetup!" : "Check out this new post!"
    })),
    groups: Array.from({ length: 10 }, (_, i) => ({
      id: i,
      name: `Space Group ${i+1}`,
      members: Math.floor(Math.random() * 500) + 50
    }))
  };
  
  export function AppSidebar() {
    const sortedMessages = useMemo(() => 
        sidebarData.messages
            .slice(0, 5) // Show only top 5
            .sort((a, b) => b.id - a.id), // Simple timestamp-like sorting
        []
    );

    const sortedGroups = useMemo(() => 
        sidebarData.groups
            .slice(0, 5) // Show only top 5
            .sort((a, b) => b.id - a.id), // Simple timestamp-like sorting
        []
    );

    return (
      <div className="h-full p-4 bg-gray-50 border-r border-gray-200 overflow-auto" style={{ width: '240px' }}>
        {/* Direct Messages */}
        <List
          header={<Text strong>Recent Chats</Text>}
          dataSource={sortedMessages}
          renderItem={(item) => (
            <List.Item className="!px-0 !py-2 hover:bg-gray-100 rounded-lg">
              <List.Item.Meta
                avatar={
                  <div className="relative">
                    <Avatar src={item.avatar} size={40} />
                    {item.online && (
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                }
                title={<Text strong className="text-sm">{item.user}</Text>}
                description={<Text ellipsis type="secondary" className="text-xs">{item.lastMessage}</Text>}
              />
            </List.Item>
          )}
        />

        {/* Groups */}
        <List
          className="mt-6"
          header={<Text strong>Active Groups</Text>}
          dataSource={sortedGroups}
          renderItem={(item) => (
            <List.Item className="!px-0 !py-2 hover:bg-gray-100 rounded-lg">
              <List.Item.Meta
                avatar={<Avatar icon={<GroupOutlined />} className="bg-blue-100" size={40} />}
                title={<Text strong className="text-sm">{item.name}</Text>}
                description={<Text type="secondary" className="text-xs">{item.members.toLocaleString()} members</Text>}
              />
            </List.Item>
          )}
        />
      </div>
    );
}