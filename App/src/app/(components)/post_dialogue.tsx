"use client";
import { useState } from "react";
import { Modal, Input, Button, Upload, message } from "antd";
import { PictureOutlined, DollarOutlined } from "@ant-design/icons";

export default function CreatePost({ onClose }) {
  const [postText, setPostText] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    // Enforce that at least one image is selected (mandatory)
    if (fileList.length === 0) {
      message.error("Please select at least one image.");
      return;
    }
    // Build payload using FormData
    const formData = new FormData();
    formData.append("text", postText);
    fileList.forEach((file) => {
      formData.append("images", file.originFileObj);
    });

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Post submission failed");
      message.success("Post added successfully!");
      // Reset fields and close modal
      setPostText("");
      setFileList([]);
      onClose();
    } catch (error) {
      message.error(error.message);
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      if (!file.type.startsWith("image/")) {
        message.error("Only image files are allowed!");
        return Upload.LIST_IGNORE;
      }
      return false; // Prevent automatic upload
    },
    fileList,
    onChange: ({ fileList }) => setFileList(fileList),
    multiple: true,
  };

  return (
    <Modal
      title="Create a New Post"
      open={true}  // Always open; parent's render controls visibility
      onCancel={onClose}
      centered
      footer={[
        <Button
          key="cancel"
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md"
        >
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handlePostSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Post
        </Button>,
      ]}
    >
      <form onSubmit={handlePostSubmit} className="space-y-4">
        <Input.TextArea
          rows={4}
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Upload {...uploadProps}>
          <Button icon={<PictureOutlined />} className="flex items-center py-5 my-5">
            Upload Images
          </Button>
        </Upload>
      </form>
    </Modal>
  );
}
