import { useState } from 'react';
import { Modal, Avatar, Button, Typography, Input, Spin } from 'antd';
import { DollarOutlined, HeartFilled, MessageFilled, ShareAltOutlined, CheckCircleOutlined} from '@ant-design/icons';
import ProcessTransaction from './Transaction';
import { useRouter } from 'next/navigation';


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


const ItemModal = ({ itemId, onClose, itemObject, transaction_packet }) => {
  const [item] = useState(itemObject);
  const [showTransactionContent, setShowTransactionContent] = useState(false);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const [isTransactionComplete, setIsTransactionComplete] = useState(false);
  const [amount, setAmount] = useState<number>(0); // Controlled state for amount
  const router = useRouter();

  // Handle purchase click
  const handlePurchaseClick = () => {
    setShowTransactionContent(true);
  };

  // Handle transaction cancel
  const handleTransactionCancel = () => {
    setShowTransactionContent(false);
    setAmount(0); // Reset amount on cancel
  };

  // Handle transaction submit
  const handleTransactionSubmit = async () => {
    setIsTransactionLoading(true);
    try {
      const res = await ProcessTransaction({
        ...transaction_packet,
        amount, // Use the state-managed amount
      });
      if (!res) {
        throw new Error("Transaction failed");
      }
      setIsTransactionComplete(true);
      // Optionally, navigate or show a success message
      // router.push("/feed");
    } catch (error) {
      console.error("Transaction error:", error);
    } finally {
      setIsTransactionLoading(false);
    }
  };

  // Derive whether the button should be disabled based on amount
  const isButtonDisabled = amount <= 0 || amount !== Number(item.price);

  return (
    <Modal
      title={
        showTransactionContent
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
      {showTransactionContent ? (
        isTransactionComplete ? (
          <div className="flex flex-col items-center gap-4">
            <div className="text-green-500 text-5xl">✓</div>
            <Title level={4}>Transaction Complete</Title>
            <Text className="text-lg">
              You have successfully purchased <strong>{item.title}</strong>.
            </Text>
            <Button
              type="primary"
              onClick={() => {
                onClose();
              }}
            >
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
              value={amount === 0 ? "" : amount} // Display empty string when 0 for better UX
              onChange={(e) => {
                const value = Number(e.target.value) || 0;
                setAmount(value);
              }} // Update state with number
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
                disabled={isButtonDisabled} // Use derived disabled state
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
                {`$${item.price}`}
              </Title>
            </div>
            <Button
              type="primary"
              size="large"
              icon={<DollarOutlined />}
              onClick={handlePurchaseClick}
            >
              Purchase Now
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};



const ItemModalLook = ({ itemId, onClose, itemObject }) => {
  const [item, setItem] = useState(itemObject);
  return (
    <Modal title="Item Details" open={!!itemId} onCancel={onClose} footer={null} centered width={800}>
      {
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
            </div>
          </div>
        )
      }
    </Modal>
  );
};

export { PostModal, ItemModal, ItemModalLook };
