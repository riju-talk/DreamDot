"use client";

import { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Button, Tabs, Modal, Input, Avatar, Divider } from "antd";
import {
  UserOutlined,
  PlusOutlined,
  DollarOutlined,
  UploadOutlined,
  PictureOutlined
} from "@ant-design/icons";
import Navbar from "../../../../(components)/Navbar";
import { useParams } from "next/navigation";

// Updated interface to reflect the API's returned object.
interface ProfileData {
  email: string;
  phone: string;
  user_name: string;
  name: string;
  bio: string;
  avatarUrl: string;
  website: string;
  dob: string;
}

interface PostData {
  id: number;
  content: string;
  likes: number;
  comments: number;
}

interface ProductData {
  id: number;
  title: string;
  price: string;
  preview: string;
}

export default function OtherAccountPage() {
  // Extract dynamic route parameters
  const { id: uuid, accounts_id } = useParams();

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [activeTab, setActiveTab] = useState("posts");
  const [showItemModal, setShowItemModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  // For follow/block/report UI
  const [isFollowing, setIsFollowing] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  // For reporting a user
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState("");

  // Fetch profile data from the backend API
  useEffect(() => {
    const stored_info = localStorage.getItem("user");
    if (!accounts_id || !uuid) return;

    (async () => {
      try {
        setLoading(true);
        // Hit the API at /api/profile/{accounts_id}
        const res = await fetch(`/api/profile/${accounts_id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch profile for account ${accounts_id}`);
        }
        const data = await res.json();
        console.log("Profile data:", data);

        setProfile(data);

        // If your API eventually returns posts/products, you can do:
        // setPosts(data.user_posts || []);
        // setProducts(data.user_products || []);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error loading profile.");
      } finally {
        setLoading(false);
      }
    })();
  }, [uuid, accounts_id]);

  // ----- FOLLOW / UNFOLLOW (Optimistic UI Update) -----
  const handleFollowToggle = async () => {
    // Immediately update UI
    setIsFollowing((prev) => !prev);

    try {
      if (!isFollowing) {
        // Optimistically changed to "following", so call POST
        await fetch("/api/social/follow", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            follower_id: uuid,
            followee_id: accounts_id,
          }),
        });
      } else {
        // Optimistically changed to "not following", so call DELETE
        await fetch("/api/social/follow", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            follower_id: uuid,
            followee_id: accounts_id,
          }),
        });
      }
    } catch (error) {
      console.error("Follow/unfollow error:", error);
      // Optionally, revert the change if error occurs:
      setIsFollowing((prev) => !prev);
    }
  };

  // ----- BLOCK / UNBLOCK (Optimistic UI Update) -----
  const handleBlockToggle = async () => {
    // Immediately update UI
    setIsBlocked((prev) => !prev);

    try {
      if (!isBlocked) {
        // Optimistically changed to "blocked", so call POST
        await fetch("/api/social/block", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blocker_id: uuid,
            blocked_id: accounts_id,
          }),
        });
      } else {
        // Optimistically changed to "unblocked", so call DELETE
        await fetch("/api/social/block", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blocker_id: uuid,
            blocked_id: accounts_id,
          }),
        });
      }
    } catch (error) {
      console.error("Block/unblock error:", error);
      // Optionally revert state if error occurs:
      setIsBlocked((prev) => !prev);
    }
  };

  // ----- REPORT -----
  const handleReportSubmit = async () => {
    try {
      await fetch("/api/social/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reporter_id: uuid,
          reported_user_id: accounts_id,
          reason: reportReason,
        }),
      });
      setShowReportModal(false);
      setReportReason("");
      console.log("Reported successfully");
    } catch (error) {
      console.error("Report error:", error);
    }
  };

  if (loading) {
    return (
      <Layout className="min-h-screen bg-gray-100">
        <Navbar userId={uuid} />
        <div className="flex items-center justify-center h-full">Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout className="min-h-screen bg-gray-100">
        <Navbar userId={uuid} />
        <div className="flex items-center justify-center h-full text-red-500">
          {error}
        </div>
      </Layout>
    );
  }

  if (!profile) {
    return (
      <Layout className="min-h-screen bg-gray-100">
        <Navbar userId={uuid} />
        <div className="flex items-center justify-center h-full">
          No profile data available.
        </div>
      </Layout>
    );
  }

  // Example logic: if this is the logged-in user’s own profile, we might hide follow/block
  const isOwner = false;

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Navbar userId={uuid} />

      {/* Cover + Profile Header */}
      <div className="relative">
        <div className="h-60 bg-blue-200 relative"></div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-start gap-6 -mt-16">
            {/* Avatar Section */}
            <div className="relative">
              {profile.avatarUrl ? (
                <Avatar size={164} src={profile.avatarUrl} className="border-4 border-white" />
              ) : (
                <Avatar
                  size={164}
                  icon={<UserOutlined />}
                  className="border-4 border-white bg-gray-200"
                />
              )}
            </div>

            {/* Name, Username, Bio */}
            <div className="flex-1 pt-12">
              <h1 className="text-3xl font-bold leading-tight pt-8">{profile.name}</h1>
              <p className="text-lg text-gray-600 mt-1">
                {profile.user_name ? `@${profile.user_name}` : "@username"}
              </p>
              <p className="mt-2 text-gray-800">{profile.bio}</p>

              {isOwner ? (
                <div className="mt-4">
                  <Button type="primary">Edit Profile</Button>
                </div>
              ) : (
                <div className="mt-4 flex gap-2">
                  {/* Follow / Unfollow Button */}
                  <Button type={isFollowing ? "default" : "primary"} onClick={handleFollowToggle}>
                    {isFollowing ? "Unfollow" : "Follow"}
                  </Button>

                  {/* Block / Unblock Button */}
                  <Button danger onClick={handleBlockToggle}>
                    {isBlocked ? "Unblock" : "Block"}
                  </Button>

                  {/* Report Button */}
                  <Button onClick={() => setShowReportModal(true)}>
                    Report
                  </Button>
                </div>
              )}
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
                    Posts{" "}
                    <span className="bg-gray-100 px-2 rounded-full">{posts.length}</span>
                  </span>
                ),
              },
              {
                key: "products",
                label: (
                  <span className="flex items-center gap-2 px-4 py-3">
                    <DollarOutlined /> Products{" "}
                    <span className="bg-gray-100 px-2 rounded-full">{products.length}</span>
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
                {isOwner && (
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
                )}

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
                          <button className="hover:text-blue-600">Like ({post.likes})</button>
                          <button className="hover:text-green-600">Comment ({post.comments})</button>
                          <button className="hover:text-purple-600">Share</button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isOwner && (
                  <Card
                    className="rounded-lg shadow-sm hover:shadow-md transition-shadow h-48 flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => setShowItemModal(true)}
                  >
                    <PlusOutlined className="text-3xl text-gray-400 mb-2" />
                    <p className="text-gray-600">Add New Product</p>
                  </Card>
                )}

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
          <Col lg={8}>
            <Card className="rounded-lg shadow-sm w-max">
              <h2 className="text-lg font-bold mb-4">Profile Information</h2>
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> {profile.email}
                </div>
                <div>
                  <strong>Phone:</strong> {profile.phone}
                </div>
                <div>
                  <strong>Website:</strong> {profile.website}
                </div>
                <div>
                  <strong>Date of Birth:</strong> {profile.dob}
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

      {/* CREATE POST MODAL */}
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

      {/* ADD PRODUCT MODAL */}
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

      {/* REPORT MODAL */}
      <Modal
        title="Report User"
        centered
        open={showReportModal}
        onCancel={() => setShowReportModal(false)}
        footer={[
          <Button key="cancel" onClick={() => setShowReportModal(false)}>
            Cancel
          </Button>,
          <Button key="report" type="primary" onClick={handleReportSubmit}>
            Report
          </Button>,
        ]}
      >
        <p>Please provide a reason for reporting this user:</p>
        <Input.TextArea
          autoSize={{ minRows: 3 }}
          value={reportReason}
          onChange={(e) => setReportReason(e.target.value)}
          placeholder="Reason..."
          className="rounded-lg"
        />
      </Modal>
    </Layout>
  );
}
