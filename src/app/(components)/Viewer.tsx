import { useState } from 'react';
import { Modal, Avatar, Button, Typography, Input, Spin } from 'antd';
import { DollarOutlined, HeartFilled, MessageFilled, ShareAltOutlined } from '@ant-design/icons';
import ProcessTransaction from './Transaction';
import { useRouter } from 'next/navigation';

const { Text, Title } = Typography;

// --------------------
// Types for Props
// --------------------
interface ContentData {
  imageURLs?: string[];
  thumbnail?: string;
}

interface PostObject {
  avatar?: string;
  display_name?: string;
  username?: string;
  description?: string;
  contentData?: ContentData;
  likes?: number;
}

interface ItemObject {
  title: string;
  description?: string;
  price?: number;
  contentData?: ContentData;
}

interface TransactionPacket {
  buyer_id: string;
  creator_id: string;
  item_id: string;
}

interface PostModalProps {
  postId: string | null;
  onClose: () => void;
  postObject: PostObject;
}

interface ItemModalProps {
  itemId: string | null;
  onClose: () => void;
  itemObject: ItemObject;
  transaction_packet: TransactionPacket;
}

interface ItemModalLookProps {
  itemId: string | null;
  onClose: () => void;
  itemObject: ItemObject;
}

// --------------------
// PostModal Component
// --------------------
const PostModal: React.FC<PostModalProps> = ({ postId, onClose, postObject }) => {
  const [post] = useState(postObject);
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
          {post.contentData?.imageURLs?.[0] && (
            <img src={post.contentData.imageURLs[0]} className="w-full h-96 object-cover rounded-lg" alt="Post content" />
          )}
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

// --------------------
// ItemModal Component
// --------------------
interface ContentData {
  imageURLs?: string[];
  thumbnail?: string;
}

interface ItemObject {
  title: string;
  description?: string;
  price?: number;
  contentData?: ContentData;
}

interface TransactionPacket {
  buyer_id: string;
  creator_id: string;
  item_id: string;
}

interface ItemModalProps {
  itemId: string | null;
  onClose: () => void;
  itemObject: ItemObject;
  transaction_packet: TransactionPacket;
}

const ItemModal: React.FC<ItemModalProps> = ({ itemId, onClose, itemObject, transaction_packet }) => {
  const [item] = useState(itemObject);
  const [showTransactionContent, setShowTransactionContent] = useState(false);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const [isTransactionComplete, setIsTransactionComplete] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const router = useRouter();

  const handlePurchaseClick = async () => {
    if (item.price === 0) {
      // Free item: Process transaction directly
      setIsTransactionLoading(true);
      try {
        const res = await ProcessTransaction({
          ...transaction_packet,
          amount: 0,
        });
        if (!res) throw new Error("Transaction failed");
        setIsTransactionComplete(true);
      } catch (error) {
        console.error("Transaction error:", error);
      } finally {
        setIsTransactionLoading(false);
      }
    } else {
      // Paid item: Show payment portal
      setShowTransactionContent(true);
    }
  };

  const handleTransactionCancel = () => {
    setShowTransactionContent(false);
    setAmount(0);
  };

  const handleTransactionSubmit = async () => {
    setIsTransactionLoading(true);
    try {
      const res = await ProcessTransaction({
        ...transaction_packet,
        amount,
      });
      if (!res) throw new Error("Transaction failed");
      setIsTransactionComplete(true);
    } catch (error) {
      console.error("Transaction error:", error);
    } finally {
      setIsTransactionLoading(false);
    }
  };

  const isButtonDisabled = amount <= 0 || amount !== Number(item.price);

  return (
    <Modal
      title={
        showTransactionContent || isTransactionComplete
          ? isTransactionComplete
            ? "Transaction Complete"
            : "Confirm Purchase"
          : "Item Details"
      }
      open={!!itemId}
      onCancel={onClose}
      footer={null}
      centered
      width={800}
    >
      {showTransactionContent || isTransactionComplete ? (
        isTransactionComplete ? (
          <div className="flex flex-col items-center gap-4">
            <div className="text-green-500 text-5xl">✓</div>
            <Title level={4}>Transaction Complete</Title>
            <Text className="text-lg">
              You have successfully {item.price === 0 ? "claimed" : "purchased"} <strong>{item.title}</strong>.
            </Text>
            <Button type="primary" onClick={onClose}>
              Close
            </Button>
          </div>
        ) : isTransactionLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Spin size="large" />
            <Text className="text-lg">Processing Transaction...</Text>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Confirm Purchase</h2>
            <p className="text-gray-400">
              You're about to buy <strong>{item.title}</strong>.
            </p>
            {item.description && (
              <p className="text-gray-500 text-sm">{item.description}</p>
            )}
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Price:</span>
              <span>${item.price}</span>
            </div>
            <p className="text-sm text-gray-500">
              Please enter the exact amount you wish to pay.
            </p>
            <Input
              name="amount"
              placeholder="Enter exact amount"
              className="bg-slate-200 border-gray-400 text-black rounded-lg"
              value={amount === 0 ? "" : amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
            />
            <div className="flex gap-2">
              <Button
                type="default"
                className="w-full bg-gray-600 hover:bg-gray-500 py-2 rounded-lg"
                onClick={handleTransactionCancel}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
                onClick={handleTransactionSubmit}
                disabled={isButtonDisabled}
              >
                Pay & Confirm
              </Button>
            </div>
          </div>
        )
      ) : (
        <div className="flex flex-col gap-4">
          {item.contentData?.thumbnail && (
            <img
              src={item.contentData.thumbnail}
              className="w-full h-64 object-cover rounded-lg"
              alt="Item thumbnail"
            />
          )}
          <Title level={4}>{item.title}</Title>
          <Text className="text-lg">{item.description}</Text>
          <div className="flex items-center justify-between border-t pt-4">
            <div>
              <Text strong>Price:</Text>
              <Title level={4} className="!mt-1 !mb-0 text-blue-600">
                {item.price ? `$${item.price}` : 'Free'}
              </Title>
            </div>
            <Button
              type="primary"
              size="large"
              icon={<DollarOutlined />}
              onClick={handlePurchaseClick}
            >
              {item.price === 0 ? 'Claim Now' : 'Purchase Now'}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

// --------------------
// ItemModalLook Component
// --------------------
const ItemModalLook: React.FC<ItemModalLookProps> = ({ itemId, onClose, itemObject }) => {
  const [item] = useState(itemObject);
  return (
    <Modal title="Item Details" open={!!itemId} onCancel={onClose} footer={null} centered width={800}>
      {item && (
        <div className="flex flex-col gap-4">
          {item.contentData?.thumbnail && (
            <img
              src={item.contentData.thumbnail}
              className="w-full h-64 object-cover rounded-lg"
              alt="Item thumbnail"
            />
          )}
          <Title level={4}>{item.title}</Title>
          <Text className="text-lg">{item.description}</Text>
          <div className="flex items-center justify-between border-t pt-4">
            <div>
              <Text strong>Price:</Text>
              <Title level={4} className="!mt-1 !mb-0 text-blue-600">
                {item.price ? `$${item.price}` : 'Free'}
              </Title>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export { PostModal, ItemModal, ItemModalLook };
