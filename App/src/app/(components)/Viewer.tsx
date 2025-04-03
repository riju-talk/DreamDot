import { useState, useEffect } from 'react';
import { Modal, Avatar, Button, Typography, Input } from 'antd';
import { DollarOutlined, HeartFilled, MessageFilled, ShareAltOutlined, CheckCircleOutlined} from '@ant-design/icons';

const { Text, Title } = Typography;

const PostModal = ({ postId, onClose, postObject }) => {
  const [post, setPost] = useState(postObject);
  return (
    <Modal title="Post Details" open={!!postId} onCancel={onClose} footer={null} centered width={800}>
      {post && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar src={post.avatar} size={64} />
            <div>
              <Title level={5} className="!mb-0">{post.display_name}</Title>
              <Text type="secondary">@{post.username}</Text>
            </div>
          </div>
          {post.contentData?.imageURLs?.[0] && <img src={post.contentData.imageURLs[0]} className="w-full h-96 object-cover rounded-lg" alt="Post content" />}
          <Text className="text-lg">{post.description}</Text>
          <div className="flex gap-4 border-t pt-4">
            <Button icon={<HeartFilled />}>Like ({post.likes})</Button>
            <Button icon={<MessageFilled />}>Comment</Button>
            <Button icon={<ShareAltOutlined />}>Share</Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

const ItemModal = ({ itemId, onClose, itemObject }) => {
  const [item, setItem] = useState(itemObject);
  const [transactionComplete, setTransactionComplete] = useState(false);

  const handlePurchase = () => {
    setTransactionComplete(true);
  };

  return (
    <Modal title="Item Details" open={!!itemId} onCancel={onClose} footer={null} centered width={800}>
      {!transactionComplete ? (
        item && (
          <div className="flex flex-col gap-4">
            {item.contentData?.thumbnail && <img src={item.contentData.thumbnail} className="w-full h-64 object-cover rounded-lg" alt="Item thumbnail" />}
            <Title level={4}>{item.title}</Title>
            <Text className="text-lg">{item.description}</Text>
            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <Text strong>Price:</Text>
                <Title level={4} className="!mt-1 !mb-0 text-blue-600">{item.price ? `$${item.price}` : 'Free'}</Title>
              </div>
              <Button type="primary" size="large" icon={<DollarOutlined />} onClick={handlePurchase}>
                Purchase Now
              </Button>
            </div>
          </div>
        )
      ) : (
        <div className="text-center py-10">
          <CheckCircleOutlined style={{ fontSize: '48px', color: 'green' }} />
          <Title level={3} className="mt-4">Transaction Complete</Title>
          <Text>Your purchase was successful.</Text>
          <div className="mt-6">
            <Button type="primary" onClick={onClose}>Close</Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export { PostModal, ItemModal };
