"use client";
import { useState, useEffect } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Button,
  Tabs,
  Modal,
  Input,
  Avatar,
  Divider,
  message,
} from "antd";
import {
  UserOutlined,
  PlusOutlined,
  DollarOutlined,
  UploadOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import Navbar from "../../../../(components)/Navbar";
import { useParams, useRouter } from "next/navigation";
import CreatePost from "../../../../(components)/post_dialogue";
import CreateItemModal from "../../../../(components)/item_dialogue";
import { PostModal, ItemModal } from "../../../../(components)/Viewer";

interface ProfileData {
  user_name: string;
  name: string;
  bio: string;
  avatarUrl: string;
  website: string;
  user_type: string;
  user_posts?: PostData[];
  user_products?: ProductData[];
  followers: number;
  following: number;
  collection: number;
}

interface PostData {
  id: number;
  description: string;
  likes: number;
  comments: number;
  display_name?: string;
  posts_analytics?: {
    likes_count: number;
    comments_count: number;
  };
}

interface ProductData {
  item_id: number; // Changed from 'id' to 'item_id'
  title: string;
  price: string;
  preview: string;
  description?: string;
  contentData?: { thumbnail: string };
}

export default function OtherAccountPage() {
  const router = useRouter();
  const { id: uuid, accounts_id } = useParams(); // uuid = viewer's id, accounts_id = viewed user's id

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [items, setItems] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [activeTab, setActiveTab] = useState("posts");

  // For "view post" modal (for non-owner)
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  // For "view product" modal
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // For modals: creation modals only available for owner
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);

  // For follow/block/report functionality
  const [isFollowing, setIsFollowing] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState("");

  // Determine if the viewed profile belongs to the current user.
  const isOwner = uuid === accounts_id;

  useEffect(() => {
    if (!accounts_id || !uuid) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch profile data
        const resProfile = await fetch(`/api/profile/${accounts_id}`);
        if (!resProfile.ok) {
          throw new Error(`Failed to fetch profile for account ${accounts_id}`);
        }
        const profileData = await resProfile.json();
        setProfile(profileData);

        // Fetch posts
        const resPosts = await fetch(`/api/creation/posts/${accounts_id}`);
        if (!resPosts.ok) {
          throw new Error("Failed to fetch posts");
        }
        const postsData = await resPosts.json();
        setPosts(postsData);
        
        const isFollowingRes = await fetch(
          `/api/social/follow?follower_id=${uuid}&followee_id=${accounts_id}`,
          {
            method: "GET",
          }
        );

        const isBlockedRes = await fetch(
          `/api/social/block?blocker_id=${uuid}&blocked_id=${accounts_id}`,
          {
            method: "GET",
          }
        );
        if (!isBlockedRes.ok) {
          throw new Error("Failed to fetch follow status");
        }
        const isFollowingData = await isFollowingRes.json();
        setIsFollowing(isFollowingData.isFollowing);

        const isBlockedData = await isBlockedRes.json();
        setIsBlocked(isBlockedData.isBlocked);
        // Fetch items
        const resItems = await fetch(`/api/creation/items/${accounts_id}`);
        if (!resItems.ok) {
          throw new Error("Failed to fetch items");
        }
        const itemsData = await resItems.json();
        setItems(itemsData);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error loading profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uuid, accounts_id]);

  // ----- FOLLOW / UNFOLLOW -----
  const handleFollowToggle = async () => {
    setIsFollowing((prev) => !prev);
    try {
      if (!isFollowing) {
        await fetch("/api/social/follow", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ follower_id: uuid, followee_id: accounts_id }),
        });
      } else {
        await fetch("/api/social/follow", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ follower_id: uuid, followee_id: accounts_id }),
        });
      }
    } catch (error) {
      console.error("Follow/unfollow error:", error);
      setIsFollowing((prev) => !prev);
    }
  };

  // ----- BLOCK / UNBLOCK -----
  const handleBlockToggle = async () => {
    setIsBlocked((prev) => !prev);
    try {
      if (!isBlocked) {
        await fetch("/api/social/block", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ blocker_id: uuid, blocked_id: accounts_id }),
        });
      } else {
        await fetch("/api/social/block", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ blocker_id: uuid, blocked_id: accounts_id }),
        });
      }
    } catch (error) {
      console.error("Block/unblock error:", error);
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
      message.success("Reported successfully");
      setShowReportModal(false);
      setReportReason("");
    } catch (error) {
      console.error("Report error:", error);
    }
  };

  if (loading) {
    return (
      <Layout className="min-h-screen bg-gray-100">
        <Navbar userId={uuid} />
        <div className="flex items-center justify-center h-full">
          Loading profile...
        </div>
      </Layout>
    );
  }

  if (error || !profile) {
    return (
      <Layout className="min-h-screen bg-gray-100">
        <Navbar userId={uuid} />
        <div className="flex items-center justify-center h-full text-red-500">
          {error || "No profile data available."}
        </div>
      </Layout>
    );
  }

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Navbar userId={uuid} />

      {/* Cover & Profile Header */}
      <div className="relative">
        <div className="h-60 bg-blue-200"></div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-start gap-6 -mt-16">
            <div className="relative">
              {profile.avatarUrl ? (
                <Avatar
                  size={164}
                  src={profile.avatarUrl}
                  className="border-4 border-white"
                />
              ) : (
                <Avatar
                  size={164}
                  icon={<UserOutlined />}
                  className="border-4 border-white bg-gray-200"
                />
              )}
            </div>
            <div className="flex-1 pt-12">
              <h1 className="text-3xl font-bold leading-tight pt-8">
                {profile.name}
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                {profile.user_name ? `@${profile.user_name}` : "@username"}
              </p>
              <p className="mt-2 text-gray-800">{profile.bio}</p>
              {/* Follow/Block/Report buttons for non-owner views */}
              {!isOwner && (
                <div className="mt-4 flex gap-2">
                  <Button
                    type={isFollowing ? "default" : "primary"}
                    onClick={handleFollowToggle}
                  >
                    {isFollowing ? "Unfollow" : "Follow"}
                  </Button>
                  <Button danger onClick={handleBlockToggle}>
                    {isBlocked ? "Unblock" : "Block"}
                  </Button>
                  <Button onClick={() => setShowReportModal(true)}>
                    Report
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
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
                      {items.length}
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
          <Col xs={24} lg={16}>
            {activeTab === "posts" ? (
              <div className="space-y-4">
                {/* Create Post Card for owner */}
                {isOwner && (
                  <Card className="shadow-sm rounded-lg">
                    <div className="flex gap-4">
                      <Avatar size={40} icon={<UserOutlined />} />
                      <Input
                        placeholder="What's on your mind?"
                        onClick={() => setShowCreatePostModal(true)}
                        className="cursor-pointer hover:bg-gray-50 rounded-full"
                      />
                    </div>
                  </Card>
                )}
                {/* Render posts */}
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    className="rounded-lg shadow-sm cursor-pointer"
                    onClick={() => {
                      setSelectedPost(post.id);
                    }}
                  >
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
            ) : (
              (activeTab === "products" && profile.user_type === "creator") ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {isOwner && (
                    <Card
                      className="rounded-lg shadow-sm hover:shadow-md transition-shadow h-48 cursor-pointer flex flex-col items-center justify-center"
                      onClick={() => setShowItemModal(true)}
                    >
                      <PlusOutlined className="text-3xl text-gray-400 mb-2" />
                      <p className="text-gray-600">Add New Product</p>
                    </Card>
                  )}
                  {items.map((item) => (
                    <Card
                      key={item.item_id}
                      className="rounded-lg shadow-sm hover:shadow-md cursor-pointer"
                      onClick={() => {
                        setSelectedItem(item.item_id);
                      }}
                    >
                      <div className="h-40 bg-gray-100 rounded-lg mb-4">
                        <img
                          src={item.contentData?.thumbnail}
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
                        <Button type="primary" onClick={() => setSelectedItem(item.item_id)}>View Details</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => router.push(`/become-creator/${accounts_id}`)}
                  >
                    Become a Creator
                  </Button>
                </div>
              )
            )}
          </Col>

          <Col xs={24} lg={8}>
            <Card className="rounded-lg shadow-sm w-full">
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
                  <span>Collection</span>
                  <span className="font-semibold">{profile.collection}</span>
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

      {/* Create Post Modal (for owner creation) */}
      {isOwner && showCreatePostModal && (
        <CreatePost onClose={() => setShowCreatePostModal(false)} userId={accounts_id as string} />
      )}

      {/* Item Modal for creation/viewing */}
      {showItemModal && (
        <CreateItemModal
          visible={showItemModal}
          onCancel={() => setShowItemModal(false)}
          userId={Array.isArray(accounts_id) ? accounts_id[0] : accounts_id}
        />
      )}

      {/* Post Viewer Modal */}
      {selectedPost && (
        <PostModal
          postId={selectedPost?.toString() || null}
          onClose={() => setSelectedPost(null)}
          postObject={posts.find((post) => post.id === selectedPost)}
        />
      )}

      {/* Item Viewer Modal */}
      {selectedItem && (
        <ItemModal
        itemObject={{
          ...items.filter((item) => item.item_id === selectedItem)[0],
          price: parseFloat(items.filter((item) => item.item_id === selectedItem)[0].price),
        }}
        itemId={selectedItem?.toString()}
        onClose={() => setSelectedItem(null)}
        transaction_packet={{
          buyer_id: Array.isArray(uuid) ? uuid[0] : uuid,
          creator_id: Array.isArray(accounts_id) ? accounts_id[0] : accounts_id,
          item_id: selectedItem.toString(),
        }} 
      />
      )}
    </Layout>
  );
}
