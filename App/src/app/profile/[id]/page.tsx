"use client";
import { useState } from "react";
import { Layout, Row, Col, Card, Button, Tabs, Modal, Input, Avatar, Divider } from "antd";
import {
  UserOutlined,
  EditOutlined,
  PlusOutlined,
  DollarOutlined,
  MessageOutlined,
  UploadOutlined,
  PictureOutlined
} from "@ant-design/icons";
import Navbar from "../../(components)/Navbar";
import { useParams } from 'next/navigation';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts");
  const [showItemModal, setShowItemModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const uuid = useParams().id;

  // Sample data
  const profile = {
    name: "Sarah Johnson",
    username: "@sarahcreative",
    bio: "Digital artist & educator | Sharing creative process | Premium tutorials available",
    followers: "124K",
    following: "892",
    posts: 42,
    products: 15
  };

  const posts = [
    {
      id: 1,
      content: "Check out my new watercolor tutorial!",
      likes: 142,
      comments: 28
    }
  ];
  const products = [
    {
      id: 1,
      title: "Procreate Masterclass",
      price: "$49.99",
      preview: "5-hour video course..."
    }
  ];

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Navbar userId={uuid} />
      
      {/* Facebook-style Profile Header */}
      <div className="relative">
        {/* Cover Photo: Increased height for more space */}
        <div className="h-60 bg-blue-200 relative">
          <Button
            shape="round"
            icon={<EditOutlined />}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white"
          >
            Edit Cover
          </Button>
        </div>

        {/* Profile Info Section */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-start gap-6 -mt-16">
            {/* Avatar Section */}
            <div className="relative">
              <Avatar
                size={164}
                icon={<UserOutlined />}
                className="border-4 border-white bg-gray-200"
              />
              <Button
                shape="circle"
                icon={<EditOutlined />}
                className="absolute bottom-2 right-2 bg-white shadow-md"
              />
            </div>

            {/* Name, Username, Bio */}
            <div className="flex-1 pt-12">
              <h1 className="text-3xl font-bold leading-tight pt-8">{profile.name}</h1>
              <p className="text-lg text-gray-600 mt-1">{profile.username}</p>
              <p className="mt-2 text-gray-800">{profile.bio}<span className="px-4"><Button
                shape="circle"
                icon={<EditOutlined />}
                className="bg-white shadow-md px-8  "
              /></span></p>
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
            className="profile-tabs"
            items={[
              {
                key: "posts",
                label: (
                  <span className="flex items-center gap-2 px-4 py-3">
                    Posts <span className="bg-gray-100 px-2 rounded-full">{profile.posts}</span>
                  </span>
                )
              },
              {
                key: "products",
                label: (
                  <span className="flex items-center gap-2 px-4 py-3">
                    <DollarOutlined /> Products{" "}
                    <span className="bg-gray-100 px-2 rounded-full">{profile.products}</span>
                  </span>
                )
              }
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
                {/* Create Post */}
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
                          <h3 className="font-semibold">{profile.name}</h3>
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
                  <span className="font-semibold">{profile.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Following</span>
                  <span className="font-semibold">{profile.following}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Sales</span>
                  <span className="font-semibold text-green-600">$12,450</span>
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

      {/* Modals */}
      <Modal
        title="Create Post"
        centered
        open={showPostModal}
        onCancel={() => setShowPostModal(false)}
        footer={[
          <Button key="post" type="primary">
            Post
          </Button>
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

      <Modal
        title="Add New Product"
        centered
        open={showItemModal}
        onCancel={() => setShowItemModal(false)}
        footer={[
          <Button key="publish" type="primary">
            Publish Product
          </Button>
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
