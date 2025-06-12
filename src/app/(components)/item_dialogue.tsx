"use client";

import { useState } from "react";
import {
  Modal,
  Input,
  Radio,
  Upload,
  Select,
  message,
  Button
} from "antd";
import {
  UploadOutlined,
  PictureOutlined,
  FileTextOutlined,
  DollarOutlined
} from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";

const { TextArea } = Input;
const { Option } = Select;

interface CreateItemModalProps {
  visible: boolean;
  onCancel: () => void;
  userId: string;
}

export default function CreateItemModal({
  visible,
  onCancel,
  userId,
}: CreateItemModalProps) {
  const [contentType, setContentType] = useState<"art" | "writing">("art");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [monetizationType, setMonetizationType] = useState<"single" | "free">("single");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [writingContent, setWritingContent] = useState("");
  const [thumbnail, setThumbnail] = useState<UploadFile | null>(null);

  const convertFileToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async () => {
    try {
      let base64Images: (string | ArrayBuffer | null)[] = [];
      if (contentType === "art" && fileList.length > 0) {
        base64Images = await Promise.all(
          fileList.map((file) => convertFileToBase64(file.originFileObj as File))
        );
      }

      let base64Thumbnail: string | ArrayBuffer | null = null;
      if (thumbnail) {
        base64Thumbnail = await convertFileToBase64(thumbnail.originFileObj as File);
      }

      const payload = {
        user_id: userId,
        title,
        description,
        price,
        monetization_type: monetizationType,
        text_content: contentType === "writing" ? writingContent : "",
        images: base64Images,
        thumbnail: base64Thumbnail,
      };

      const res = await fetch("/api/creation/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create item.");
      }

      message.success("Item created successfully!");
      resetFields();
      onCancel();
    } catch (error) {
      console.error("Error creating item:", error);
      message.error("Unable to create item. Please try again.");
    }
  };

  const resetFields = () => {
    setContentType("art");
    setTitle("");
    setDescription("");
    setPrice("");
    setMonetizationType("single");
    setFileList([]);
    setWritingContent("");
    setThumbnail(null);
  };

  const uploadProps = {
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
        return Upload.LIST_IGNORE;
      }
      return false;
    },
    fileList,
    onChange: ({ fileList: newFileList }: { fileList: UploadFile[] }) => setFileList(newFileList),
    multiple: false,
    listType: "picture-card" as const,
    accept: "image/*",
  };

  const thumbnailUploadProps = {
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("Thumbnail must be an image file!");
        return Upload.LIST_IGNORE;
      }
      return false;
    },
    fileList: thumbnail ? [thumbnail] : [],
    onChange: ({ fileList }: { fileList: UploadFile[] }) =>
      setThumbnail(fileList[0] || null),
    multiple: false,
    listType: "picture-card" as const,
    accept: "image/*",
  };

  return (
    <Modal
      title="Create New Item"
      centered
      open={visible}
      onCancel={() => {
        resetFields();
        onCancel();
      }}
      footer={[
        <Button key="cancel" onClick={onCancel}>Cancel</Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleSubmit}
          disabled={
            !title ||
            !description ||
            !price ||
            (contentType === "art" && fileList.length === 0) ||
            (contentType === "writing" && !writingContent) ||
            !thumbnail
          }
        >
          Publish
        </Button>,
      ]}
      width={800}
    >
      <div className="space-y-6">
        <Radio.Group
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          className="w-full flex gap-4"
        >
          <Radio.Button value="art" className="flex-1 text-center">
            <PictureOutlined /> Artwork/Media
          </Radio.Button>
          <Radio.Button value="writing" className="flex-1 text-center">
            <FileTextOutlined /> Writing
          </Radio.Button>
        </Radio.Group>

        <Input
          placeholder="Item Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          rows={3}
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {contentType === "art" && <Upload.Dragger {...uploadProps}>Upload Artwork</Upload.Dragger>}
        {contentType === "writing" && (
          <TextArea
            rows={6}
            value={writingContent}
            onChange={(e) => setWritingContent(e.target.value)}
            placeholder="Write your content here..."
          />
        )}

        <Upload.Dragger {...thumbnailUploadProps}>Upload Thumbnail</Upload.Dragger>

        <div className="grid grid-cols-2 gap-4">
          <Input
            prefix={<DollarOutlined />}
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Select
            value={monetizationType}
            onChange={setMonetizationType}
            className="w-full"
          >
            <Option value="single">Single Purchase</Option>
            <Option value="free">Free</Option>
          </Select>
        </div>
      </div>
    </Modal>
  );
}
