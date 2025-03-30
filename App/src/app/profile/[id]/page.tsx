"use client";

import { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Button, Tabs, Modal, Input, Avatar, Divider } from "antd";
import { UserOutlined, PlusOutlined, DollarOutlined, UploadOutlined, PictureOutlined } from "@ant-design/icons";
import Navbar from "../../(components)/Navbar";
import { useParams, useRouter } from "next/navigation";

export default function MyProfilePage() {
  const router = useRouter();
  const { id } = useParams();
  const [realuser, setRealuser] = useState(null);

  // Demo posts and products for display
  const posts = [
    {
      id: 1,
      content: "Check out my new watercolor tutorial!",
      likes: 142,
      comments: 28,
    },
    {
      id: 2,
      content: "Loving the new art supplies at the local store.",
      likes: 87,
      comments: 14,
    },
  ];
  const products = [
    {
      id: 1,
      title: "Procreate Masterclass",
      price: "$49.99",
      preview: "5-hour video course to master Procreate.",
    },
    {
      id: 2,
      title: "Watercolor Basics",
      price: "$29.99",
      preview: "Learn watercolor techniques for beginners.",
    },
  ];

  const [activeTab, setActiveTab] = useState("posts");
  const [showPostModal, setShowPostModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);

  useEffect(() => {
    const fetchRealUser = async () => {
      try {
        const response = await fetch(`/api/profile/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setRealuser(data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (!realuser && id) {
      fetchRealUser();
    }
  }, [id, realuser]);

  if (!realuser) {
    return (
      <Layout className="min-h-screen bg-gray-100">
        <Navbar userId={id} />
        <div className="flex items-center justify-center h-full">
          No user logged in.
        </div>
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
                <Button type="primary" onClick={() => router.push(`/settings/${id}`)}>Edit Profile</Button>
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
                    Posts{" "}
                    <span className="bg-gray-100 px-2 rounded-full">
                      {posts.length}
                    </span>
                  </span>
                ),
              },
              {
                key: "products",
                label: (
                  <span className="flex items-center gap-2 px-4 py-3">
                    <DollarOutlined /> Products{" "}
                    <span className="bg-gray-100 px-2 rounded-full">
                      {products.length}
                    </span>
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
                  <Card key={post.id} className="rounded-lg shadow-sm">
                    <div className="flex gap-4">
                      <Avatar size={48} icon={<UserOutlined />} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{realuser.name}</h3>
                          <span className="text-gray-500">· 2h</span>
                        </div>
                        <p className="mt-2">{post.content}</p>
                        <div className="flex gap-6 mt-4 text-gray-500">
                          <button className="hover:text-blue-600">
                            Like ({post.likes})
                          </button>
                          <button className="hover:text-green-600">
                            Comment ({post.comments})
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow h-48 flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => setShowItemModal(true)}
                >
                  <PlusOutlined className="text-3xl text-gray-400 mb-2" />
                  <p className="text-gray-600">Add New Product</p>
                </Card>
                {products.map((product) => (
                  <Card key={product.id} className="rounded-lg shadow-sm hover:shadow-md">
                    <div className="h-40 bg-gray-100 rounded-lg mb-4" />
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <p className="text-gray-600 truncate">{product.preview}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-blue-600">{product.price}</span>
                      <Button type="primary">View Details</Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </Col>

          {/* Right Column - Profile Info */}
          <Col xs={24} lg={8}>
            <Card className="rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Profile Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Followers</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Following</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Sales</span>
                  <span className="font-semibold text-green-600">$0</span>
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
                      <p className="text-sm text-gray-500">
                        Purchased Procreate Masterclass
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Post Modal */}
      <Modal
        title="Create Post"
        centered
        open={showPostModal}
        onCancel={() => setShowPostModal(false)}
        footer={[
          <Button key="post" type="primary">
            Post
          </Button>,
        ]}
      >
        <Input.TextArea
          autoSize={{ minRows: 3 }}
          placeholder="Share your thoughts..."
          className="rounded-lg"
        />
        <div className="flex gap-2 mt-4">
          <Button icon={<PictureOutlined />}>Photo/Video</Button>
          <Button icon={<DollarOutlined />}>Add Paid Content</Button>
        </div>
      </Modal>

      {/* Item Modal */}
      <Modal
        title="Add New Product"
        centered
        open={showItemModal}
        onCancel={() => setShowItemModal(false)}
        footer={[
          <Button key="publish" type="primary">
            Publish Product
          </Button>,
        ]}
      >
        <div className="space-y-4">
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
            <UploadOutlined className="text-2xl text-gray-500" />
          </div>
          <Input placeholder="Product Title" />
          <Input.TextArea placeholder="Detailed Description" rows={3} />
          <Input prefix="$" placeholder="Price" type="number" />
        </div>
      </Modal>
    </Layout>
  );
}
