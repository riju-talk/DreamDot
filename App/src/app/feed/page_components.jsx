"use client";
import { Avatar, Button, Typography, Card, List, Tag } from 'antd';
import { DollarOutlined, PlayCircleOutlined, ReadOutlined, HeartFilled, MessageFilled, ShareAltOutlined } from '@ant-design/icons';
const { Text, Title } = Typography;


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

export default function Feed() {
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



// Dummy marketplace data
const marketplaceData = {
  digitalArt: Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Cosmic Art #${i+1}`,
    artist: `StellarArtist_${i+1}`,
    price: `${Math.random() * 0.5 + 0.1} ETH`,
    preview: `https://source.unsplash.com/random/800x600?abstract,art&${i}`
  })),
  audioTracks: Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Space Ambient Vol. ${i+1}`,
    artist: `Orbital Sounds`,
    duration: `${Math.floor(Math.random() * 10) + 20}:00`,
    plays: `${Math.floor(Math.random() * 10000) + 1000}`,
    artwork: `https://source.unsplash.com/random/800x600?music,album&${i}`
  })),
  articles: Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `The Future of Space ${['Travel', 'Colonization', 'Tech', 'Exploration'][i%4]}`,
    author: `Dr. ${['Astra', 'Nova', 'Galaxia', 'Cosmo'][i%4]} ${String.fromCharCode(65+i)}`,
    preview: `New developments in space ${['tourism', 'habitats', 'propulsion', 'communication'][i%4]}...`,
    reads: `${Math.floor(Math.random() * 10000) + 1000}`
  }))
};

export default function Marketplace() {
  return (
    <div className="p-4 space-y-8">
      {/* Digital Art Section */}
      <Card title="Digital Art Market" extra={<DollarOutlined />}>
        <List
          dataSource={marketplaceData.digitalArt}
          renderItem={(item) => (
            <List.Item className="!px-0 !py-2">
              <div className="flex gap-4 w-full">
                <img 
                  src={item.preview} 
                  className="w-16 h-16 rounded-lg object-cover" 
                  alt="Art preview" 
                />
                <div className="flex-1">
                  <Text strong className="block">{item.title}</Text>
                  <Text type="secondary">{item.artist}</Text>
                  <Button type="primary" className="mt-2">
                    Collect {item.price}
                  </Button>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Card>

      {/* Audio Section */}
      <Card title="Audio Waves" extra={<PlayCircleOutlined />}>
        <List
          dataSource={marketplaceData.audioTracks}
          renderItem={(item) => (
            <List.Item className="!px-0 !py-2">
              <div className="flex gap-4 w-full">
                <img 
                  src={item.artwork} 
                  className="w-16 h-16 rounded-lg object-cover" 
                  alt="Album art" 
                />
                <div className="flex-1">
                  <Text strong className="block">{item.title}</Text>
                  <Text type="secondary">{item.artist}</Text>
                  <div className="flex justify-between mt-2">
                    <Text type="secondary">{item.duration}</Text>
                    <Text>{item.plays} plays</Text>
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Card>

      {/* Articles Section */}
      <Card title="Premium Reads" extra={<ReadOutlined />}>
        <List
          dataSource={marketplaceData.articles}
          renderItem={(item) => (
            <List.Item className="!px-0 !py-2">
              <div className="w-full">
                <Text strong className="block">{item.title}</Text>
                <Text type="secondary">{item.author}</Text>
                <Text className="block mt-2" ellipsis>{item.preview}</Text>
                <div className="flex justify-between mt-2">
                  <Tag color="geekblue">Premium</Tag>
                  <Text type="secondary">{item.reads} reads</Text>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Card>
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
  
export default function AppSidebar() {
    return (
      <div className="h-full p-4 bg-gray-50 border-r border-gray-200">
        {/* Direct Messages */}
        <List
          header={<Text strong>Direct Messages</Text>}
          dataSource={sidebarData.messages}
          renderItem={(item) => (
            <List.Item className="!px-0 !py-2 hover:bg-gray-100 rounded-lg">
              <List.Item.Meta
                avatar={
                  <div className="relative">
                    <Avatar src={item.avatar} />
                    {item.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                }
                title={<Text strong>{item.user}</Text>}
                description={<Text ellipsis type="secondary">{item.lastMessage}</Text>}
              />
            </List.Item>
          )}
        />
  
        {/* Groups */}
        <List
          className="mt-6"
          header={<Text strong>My Groups</Text>}
          dataSource={sidebarData.groups}
          renderItem={(item) => (
            <List.Item className="!px-0 !py-2 hover:bg-gray-100 rounded-lg">
              <List.Item.Meta
                avatar={<Avatar icon={<GroupOutlined />} className="bg-blue-100" />}
                title={<Text strong>{item.name}</Text>}
                description={`${item.members.toLocaleString()} members`}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }