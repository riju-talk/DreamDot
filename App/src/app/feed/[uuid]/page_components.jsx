"use client";
import { Avatar, Button, Typography, Card, List, Tag, Tabs } from 'antd';
import { DollarOutlined, HeartFilled, MessageFilled, ShareAltOutlined } from '@ant-design/icons';
const { Text, Title } = Typography;
import { useEffect, useState } from 'react';

// Enhanced feed data generator
/*
const generateFeedData = () => {
  const categories = ['tech', 'art', 'travel', 'food', 'fashion'];
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    user: `Creator_${i+1}`,
    avatar: `https://i.pravatar.cc/150?img=${i+20}`,
    content: `Check out my latest ${categories[i%5]} creation! ${i%2 === 0 ? '🚀 Exciting updates!' : '💬 Join the discussion!'}`,
    media: `https://source.unsplash.com/random/800x600?${categories[i%5]}`,
    likes: Math.floor(Math.random() * 1000) + 100,
    comments: Math.floor(Math.random() * 100) + 10,
    shares: Math.floor(Math.random() * 50) + 5,
    timestamp: `${Math.floor(Math.random() * 12) + 1}h ago`,
    category: categories[i%5]
  }));
};
*/

export function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch posts from the API
  async function fetchPosts() {
    try {
      const res = await fetch("/api/creation/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();

    // Listen for new post events
    const handleNewPost = (event) => {
      // Prepend the new post data to our list
      setPosts((prevPosts) => [event.detail.postMetadata, ...prevPosts]);
      // Alternatively, you might want to re-fetch all posts:
      // fetchPosts();
    };

    window.addEventListener("postCreated", handleNewPost);
    return () => {
      window.removeEventListener("postCreated", handleNewPost);
    };
  }, []);

  if (loading) return <div>Loading posts...</div>;

  return (
    <div className="p-4">
      <List
        dataSource={posts}
        renderItem={(item) => (
          <Card
            className="mb-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            bordered={false}
          >
            <div className="flex items-start gap-4">
              <Avatar src="https://i.pravatar.cc/150?img=20" size={48} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Text strong>{item.display_name || "Unknown"}</Text>
                  <Tag color="geekblue">{`@${item.username || "Unknown"}`}</Tag>
                  <Text type="secondary" className="text-sm">
                    {new Date(item.created_at).toLocaleString()}
                  </Text>
                </div>
                <Text className="text-lg block mb-4">{item.description}</Text>
                {item.contentData?.imageURLs && item.contentData.imageURLs.length > 0 && (
                  <img
                    src={item.contentData.imageURLs[0]}
                    alt={item.title}
                    className="w-full h-96 object-cover rounded-xl mb-4"
                    loading="lazy"
                  />
                )}
                <div className="flex gap-4">
                  <Button icon={<HeartFilled className="text-red-500" />}>Like</Button>
                  <Button icon={<MessageFilled className="text-blue-500" />}>Comment</Button>
                  <Button icon={<ShareAltOutlined className="text-green-500" />}>Share</Button>
                </div>
              </div>
            </div>
          </Card>
        )}
      />
    </div>
  );
}



// Enhanced Marketplace Component

/*
const marketItems = [
  {
    title: "Exclusive Travel Blog",
    author: "Alex Johnson",
    price: "$5",
    description: "Discover hidden gems around the world with this exclusive travel blog",
    image: "https://source.unsplash.com/random/800x600?travel",
    category: "Travel"
  },
  {
    title: "Music Sample Pack",
    author: "DJ Cosmic",
    price: "$15",
    description: "Enhance your music production with this exclusive sample pack",
    image: "https://source.unsplash.com/random/800x600?music",
    category: "Music"
  },
  {
    title: "New Comic Release",
    author: "Overlight Comics",
    price: "$15",
    description: "Will Ersa finally save the galaxy? Find out in this new issue!",
    image: "https://source.unsplash.com/random/800x600?comic",
    category: "Comics"
  },
  {
    title: "Remix.js Course",
    author: "Arthur Wesly",
    price: "$15",
    description: "Build faster server-rendered websites with Remix.js",
    image: "https://source.unsplash.com/random/800x600?code",
    category: "Tutorial"
  }
];
*/

export function Marketplace() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("explore");

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch("/api/creation/items");
        if (!res.ok) throw new Error("Failed to fetch items");
        const data = await res.json();
        // Expect data to be an array of merged records,
        // e.g. each record: { ...metadata, contentData: {...}, userDetails: {...} }
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  if (loading) return <div>Loading items...</div>;

  return (
    <div className="p-4 space-y-6 h-full overflow-auto bg-gray-50 rounded-xl">
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        tabBarExtraContent={
          <Button
            type="dashed"
            onClick={() => setActiveTab("lucky")}
            className="mr-4 bg-yellow-100 border-yellow-300"
          >
            I'm Feeling Lucky
          </Button>
        }
      >
        <Tabs.TabPane tab="Explore" key="explore">
          <div className="grid gap-6">
            {items.map((item) => (
              <MarketplaceItem key={item.item_id} item={item} />
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Lucky Finds" key="lucky">
          <div className="grid gap-6">
            {items.slice(0, 5).map((item) => (
              <MarketplaceItem key={item.item_id} item={item} />
            ))}
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

const MarketplaceItem = ({ item }) => (
  <Card
    className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-none"
    cover={
      item.contentData?.thumbnail ? (
        <img
          src={item.contentData.thumbnail}
          alt={item.title}
          className="h-48 object-cover rounded-t-lg"
        />
      ) : item.contentData?.art_urls && item.contentData.art_urls.length > 0 ? (
        <img
          src={item.contentData.art_urls[0]}
          alt={item.title}
          className="h-48 object-cover rounded-t-lg"
        />
      ) : (
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          No Image
        </div>
      )
    }
  >
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <Tag color="blue">{item.category || "Uncategorized"}</Tag>
        <Text type="secondary" className="text-sm">
          by {item.userDetails?.display_name || item.userDetails?.username || "Unknown"}
        </Text>
      </div>
      <Title level={5} className="!mt-0 !mb-2">
        {item.title}
      </Title>
      <Text className="block text-gray-600 mb-4">{item.description}</Text>
      <div className="flex justify-between items-center">
        <Text strong className="text-lg text-blue-600">
          {item.price ? `$${item.price}` : "Free"}
        </Text>
        <Button type="primary" icon={<DollarOutlined />} className="flex items-center gap-2">
          Purchase
        </Button>
      </div>
    </div>
  </Card>
);
