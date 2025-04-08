"use client";
import { useState } from "react";
import { Modal, Input, Button, Upload, message } from "antd";
import { PictureOutlined, VideoCameraOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd"; // Import UploadProps type

export default function CreatePost({ onClose, userId }) {
  const [postText, setPostText] = useState("");
  const [fileList, setFileList] = useState([]);

  // Helper to convert a File object to a base64 string.
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!postText.trim() && fileList.length === 0) {
      message.error("Please add text or upload at least one media file.");
      return;
    }
    try {
      // Convert files to base64 strings.
      const base64Images = await Promise.all(
        fileList.map(async (file) => await toBase64(file.originFileObj))
      );

      // Prepare payload as JSON.
      const payload = {
        user_id: userId,
        content: postText,
        images: base64Images,
      };

      const res = await fetch("/api/creation/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Post submission failed");

      const newPostData = await res.json();
      message.success("Post added successfully!");

      // Dispatch a custom event with the new post data
      window.dispatchEvent(new CustomEvent("postCreated", { detail: newPostData }));

      setPostText("");
      setFileList([]);
      onClose();
    } catch (error) {
      console.error("Error in CreatePost:", error);
      message.error(error.message);
    }
  };

  // Define uploadProps with proper typing
  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      const isMedia = file.type.startsWith("image/") || file.type.startsWith("video/");
      if (!isMedia) {
        message.error("Only image and video files are allowed!");
        return Upload.LIST_IGNORE;
      }
      const isLt500MB = file.size / 1024 / 1024 < 500;
      if (!isLt500MB) {
        message.error("File must be smaller than 500MB!");
        return Upload.LIST_IGNORE;
      }
      return false; // Prevent automatic upload
    },
    fileList,
    onChange: ({ fileList }) => setFileList(fileList),
    multiple: true,
    listType: "picture-card", // Explicitly set as UploadListType
    accept: "image/*,video/*",
    showUploadList: {
      showPreviewIcon: false,
      showRemoveIcon: true,
      previewIcon: (file) =>
        file.type.startsWith("video/") ? (
          <VideoCameraOutlined className="text-white" />
        ) : null,
    },
  };

  return (
    <Modal
      title="Create New Post"
      open={true}
      onCancel={onClose}
      centered
      width={800}
      footer={[
        <Button key="cancel" onClick={onClose} className="mr-2">
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handlePostSubmit}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Post
        </Button>,
      ]}
    >
      <form onSubmit={handlePostSubmit} className="space-y-6">
        <Input.TextArea
          rows={4}
          placeholder="Share your thoughts..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          autoSize={{ minRows: 3, maxRows: 6 }}
        />

        <Upload.Dragger
          {...uploadProps}
          className="p-8 border-2 border-dashed rounded-xl hover:border-blue-500 bg-gray-50"
        >
          <div className="space-y-4 text-center">
            <div className="text-3xl">
              <PictureOutlined className="mr-4 text-blue-500" />
              <VideoCameraOutlined className="text-blue-500" />
            </div>
            <p className="font-semibold">Click or drag media to upload</p>
            <p className="text-gray-500 text-sm">
              Supports images (JPEG, PNG) and videos (MP4, MOV) up to 10MB
            </p>
          </div>
        </Upload.Dragger>

        <div className="grid grid-cols-3 gap-4">
          {fileList.map((file) => (
            <div key={file.uid} className="relative group">
              {file.type?.startsWith("image/") ? (
                <img
                  src={file.thumbUrl || URL.createObjectURL(file.originFileObj)}
                  alt="preview"
                  className="w-full h-32 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <VideoCameraOutlined className="text-3xl text-gray-400" />
                </div>
              )}
              <span className="absolute bottom-1 left-1 text-white text-xs bg-black/50 px-2 py-1 rounded">
                {file.name}
              </span>
            </div>
          ))}
        </div>
      </form>
    </Modal>
  );
}