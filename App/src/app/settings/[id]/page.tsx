"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { Layout, Row, Col, Card, Form, Input, Button, Avatar } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import Navbar from "../../(components)/Navbar";

export default function SettingsPage() {
  const { id } = useParams(); // User's UUID from the URL

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    username: "",
    displayName: "",
    bio: "",
    avatarUrl: "",
    website: "",
    dob: "",
  });
  const [message, setMessage] = useState("");

  // Password reset fields
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // On mount, if user data exists in context, populate the form;
  // Otherwise, fetch from the API using the header "x-user-id".
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user) {
      setFormData({
        email: user.email || "",
        phone: user.phone || "",
        username: user.user_name || "",
        displayName: user.name || "",
        bio: user.bio || "",
        avatarUrl: user.profile_picture || "",
        website: user.website || "",
        dob: user.date_of_birth || "",
      });
    } else {
      fetch("/api/settings", {
        headers: { "x-user-id": id },
      })
        .then((response) => response.json())
        .then((data) =>
          setFormData({
            email: data.email || "",
            phone: data.phone || "",
            username: data.username || "",
            displayName: data.displayName || "",
            bio: data.bio || "",
            avatarUrl: data.avatarUrl || "",
            website: data.website || "",
            dob: data.dob || "",
          })
        )
        .catch((err) => console.error("Error loading settings:", err));
    }
  }, [id]);

  // Handle form field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit profile changes
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": id,
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setMessage(result.message || "Settings updated successfully.");
      // Update global context with the new user data
      if (result) {
        login(result.user)
      }
    } catch (err: any) {
      console.error("Update failed:", err);
      setMessage("Update failed. Please try again.");
    }
  };

  // Handle reset password
  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setMessage("New password and confirmation do not match.");
      return;
    }
    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": id,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Password reset failed");
      }
      setMessage(result.message || "Password updated successfully.");
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <Layout className="min-h-screen bg-gray-100">
      {/* Navbar using the id from the route */}
      <Navbar userId={id} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header Section */}
        <div className="mb-8 relative group">
          <div 
            className="h-48 bg-gray-200 rounded-lg relative cursor-pointer"
            style={{ background: "#f0f2f5" }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button type="primary" icon={<CameraOutlined />} className="flex items-center">
                Change Banner
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-16 left-8 group">
            <Avatar
              size={128}
              src={formData.avatarUrl}
              className="border-4 border-white cursor-pointer"
            >
              {!formData.avatarUrl && formData.displayName?.[0]}
            </Avatar>
            <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <label htmlFor="avatar-upload" className="cursor-pointer">
                <CameraOutlined className="bg-white p-2 rounded-full shadow-lg" />
              </label>
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                className="hidden"
                onChange={() => {}} // TODO: Implement file upload logic
              />
            </div>
          </div>
        </div>

        <Row gutter={[32, 32]} className="mt-20">
          {/* Left Column - Account Settings */}
          <Col xs={24} lg={12}>
            <Card className="rounded-xl shadow-lg">
              <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
              <form onSubmit={handleSubmit}>
                <Form.Item label="Display Name" className="mb-4">
                  <Input
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    size="large"
                  />
                </Form.Item>
                <Form.Item label="Username" className="mb-4">
                  <Input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    size="large"
                    addonBefore="@"
                  />
                </Form.Item>
                <Form.Item label="Bio" className="mb-4">
                  <Input.TextArea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    showCount
                  />
                </Form.Item>
                <Form.Item label="Website" className="mb-4">
                  <Input
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    size="large"
                    placeholder="https://"
                  />
                </Form.Item>
                <Button type="primary" htmlType="submit" size="large" className="w-full">
                  Update Profile
                </Button>
              </form>
            </Card>
          </Col>

          {/* Right Column - Security Settings */}
          <Col xs={24} lg={12}>
            <Card className="rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
              <form onSubmit={handleResetPassword}>
                <Form.Item label="Old Password" className="mb-4">
                  <Input.Password
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    size="large"
                    required
                  />
                </Form.Item>
                <Form.Item label="New Password" className="mb-4">
                  <Input.Password
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    size="large"
                    required
                  />
                </Form.Item>
                <Form.Item label="Confirm New Password" className="mb-4">
                  <Input.Password
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    size="large"
                    required
                  />
                </Form.Item>
                <Button type="primary" htmlType="submit" size="large" className="w-full mb-6">
                  Change Password
                </Button>
              </form>

              {/* Additional Security Options */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Advanced Settings</h3>
                <div className="space-y-4">
                  <Button block size="large">
                    Two-Factor Authentication
                  </Button>
                  <Button block size="large">
                    Connected Devices
                  </Button>
                  <Button block size="large" danger>
                    Delete Account
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Status Message */}
        {message && (
          <div className="mt-6 text-center text-green-600 font-semibold">
            {message}
          </div>
        )}
      </div>
    </Layout>
  );
}
