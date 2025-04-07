"use client";
import { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Button, Tabs, Input, Avatar, Divider, message } from "antd";
import { DollarOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import Navbar from "../../(components)/Navbar";
import { useParams, useRouter } from "next/navigation";
import CreatePost from "../../(components)/post_dialogue";
import CreateItemModal from "../../(components)/item_dialogue";
import { PostModal, ItemModalLook } from "../../(components)/Viewer";

export default function MyProfilePage() {
  const router = useRouter();
  const { id } = useParams();
  const [realuser, setRealuser] = useState(null);
  const [activeTab, setActiveTab] = useState("posts");
  const [showPostModal, setShowPostModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // States for posts and items fetched from APIs.
  const [posts, setPosts] = useState([]);
  const [items, setItems] = useState([]);
  
  // Fetch posts from /api/creation/posts
  async function fetchPosts() {
    try {
      const res = await fetch(`/api/creation/posts/${id}`);
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  
  // Fetch items from /api/creation/items
  async function fetchItems() {
    try {
      const res = await fetch(`/api/creation/items/${id}`);
      if (!res.ok) throw new Error("Failed to fetch items");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  
  // Fetch real user profile and cache in localStorage
  useEffect(() => {
    async function fetchRealUser() {
      try {
        const response = await fetch(`/api/profile/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setRealuser(data);
        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
    if (!realuser && id) {
      fetchRealUser();
    }
  }, [id, realuser]);
  
  // Initial fetch for posts and items
  useEffect(() => {
    fetchPosts();
    fetchItems();
    
    // Listen for custom events from the modals
    const handlePostCreated = () => {
      fetchPosts();
    };
    const handleItemCreated = () => {
      fetchItems();
    };
    window.addEventListener("postCreated", handlePostCreated);
    window.addEventListener("itemCreated", handleItemCreated);
    
    return () => {
      window.removeEventListener("postCreated", handlePostCreated);
      window.removeEventListener("itemCreated", handleItemCreated);
    };
  }, []);
  
  if (!realuser) {
    return (
      <Layout className="min-h-screen bg-gray-100">
        <Navbar userId={id} />
        <div className="flex items-center justify-center h-full">Loading.......</div>
      </Layout>
    );
  }
  
  return (
    <Layout className="min-h-screen bg-gray-100">
      <Navbar userId={id} />
  
      {/* Cover + Profile Header */}
      <div className="relative">
        <div className="h-60 bg-blue-200 relative"></div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-start gap-6 -mt-16">
            {/* Avatar Section */}
            <div className="relative">
              <Avatar
                size={164}
                icon={<UserOutlined />}
                src={realuser.profile_picture || undefined}
                className="border-4 border-white bg-gray-200"
              />
            </div>
  
            {/* Name, Username, Bio */}
            <div className="flex-1 pt-12">
              <h1 className="text-3xl font-bold leading-tight pt-8">
                {realuser.name || "No Name"}
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                {realuser.user_name ? `@${realuser.user_name}` : "@username"}
              </p>
              <p className="mt-2 text-gray-800">
                {realuser.bio || "No bio available"}
              </p>
              <div className="mt-4">
                <Button type="primary" onClick={() => router.push(`/settings/${id}`)}>
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Profile Navigation Tabs */}
      <div className="bg-white border-t mt-6">
        <div className="max-w-5xl mx-auto px-4">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={[
              {
                key: "posts",
                label: (
                  <span className="flex items-center gap-2 px-4 py-3">
                    Posts <span className="bg-gray-100 px-2 rounded-full">{posts.length}</span>
                  </span>
                ),
              },
              {
                key: "products",
                label: (
                  <span className="flex items-center gap-2 px-4 py-3">
                    <DollarOutlined /> Products <span className="bg-gray-100 px-2 rounded-full">{items.length}</span>
                  </span>
                ),
              },
            ]}
          />
        </div>
      </div>
  
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Row gutter={[24, 24]}>
          {/* Left Column - Posts/Products */}
          <Col xs={24} lg={16}>
            {activeTab === "posts" ? (
              <div className="space-y-4">
                {/* Create Post Card */}
                <Card className="shadow-sm rounded-lg">
                  <div className="flex gap-4">
                    <Avatar size={40} icon={<UserOutlined />} />
                    <Input
                      placeholder="What's on your mind?"
                      onClick={() => setShowPostModal(true)}
                      className="cursor-pointer hover:bg-gray-50 rounded-full"
                    />
                  </div>
                </Card>
  
                {/* Posts Feed */}
                {posts.map((post) => (
                  <Card key={post.id} className="rounded-lg shadow-sm" onClick={() => { setSelectedPost(post.id);}}>
                    <div className="flex gap-4">
                      <Avatar size={48} icon={<UserOutlined />} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">
                            {post.display_name || "Unknown"}
                          </h3>
                          <span className="text-gray-500">· 2h</span>
                        </div>
                        <p className="mt-2">{post.description}</p>
                        <div className="flex gap-6 mt-4 text-gray-500">
                          <button className="hover:text-blue-600">
                            Like ({post.posts_analytics?.likes_count || 0})
                          </button>
                          <button className="hover:text-green-600">
                            Comment ({post.posts_analytics?.comments_count || 0})
                          </button>
                          <button className="hover:text-purple-600">
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : activeTab === "products" && realuser.user_type === "creator" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow h-48 cursor-pointer flex flex-col items-center justify-center"
                  onClick={() => setShowItemModal(true)}
                >
                  <PlusOutlined className="text-3xl text-gray-400 mb-2" />
                  <p className="text-gray-600">Add New Product</p>
                </Card>
                {items.map((item) => (
                    <Card key={item.item_id} className="rounded-lg shadow-sm hover:shadow-md" onClick={() => { setSelectedItem(item.item_id)}}>
                    <div className="h-40 bg-gray-100 rounded-lg mb-4">
                      <img
                      src={item.contentData.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg" 
                      />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 truncate">{item.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-blue-600">
                      {item.price ? `$${item.price}` : "Free"}
                      </span>
                      <Button type="primary">View Details</Button>
                    </div>
                    </Card>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <Button type="primary" size="large" onClick={() => router.push(`/become-creator/${id}`)}>
                  Become a Creator
                </Button>
              </div>
            )}
          </Col>
  
          {/* Right Column - Profile Info */}
          <Col xs={24} lg={8}>
            <Card className="rounded-lg shadow-sm w-full">
              <h2 className="text-lg font-bold mb-4">Profile Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Followers</span>
                  <span className="font-semibold">{realuser.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Following</span>
                  <span className="font-semibold">{realuser.following}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Sales</span>
                  <span className="font-semibold text-green-600">{realuser.collection}</span>
                </div>
              </div>
  
              <Divider className="my-4" />
  
              <h3 className="text-lg font-bold mb-4">Recent Supporters</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar size={32} icon={<UserOutlined />} />
                    <div>
                      <p className="font-medium">Supporter Name</p>
                      <p className="text-sm text-gray-500">Purchased Procreate Masterclass</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
  
      {/* Post Modal */}
      {showPostModal && (
        <CreatePost onClose={() => setShowPostModal(false)} userId={id} />
      )}
  
      {/* Item (Product) Modal */}
      {showItemModal && (
        <CreateItemModal
          visible={showItemModal}
          onCancel={() => setShowItemModal(false)}
          userId={id}
        />
      )}

      {selectedPost && (
        <PostModal
          postId={selectedPost}
          onClose={() => { setShowPostModal(false); setSelectedPost(null); }}
          postObject={posts.find(post => post.id === selectedPost)}
        />
      )}

      {selectedItem && (
        <ItemModalLook
          itemId={selectedItem}
          onClose={() => { setShowItemModal(false); setSelectedItem(null); }}
          itemObject={items.find(item => item.item_id === selectedItem)}
        />

      )}
    </Layout>
  );
}
