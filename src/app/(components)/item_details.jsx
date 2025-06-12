import { Modal, Typography, Spin, Alert, Image } from 'antd';
import { prismaContent, prismaItems } from '../../lib/db/client';

const { Title, Text } = Typography;

const ItemDetailsModal = async ({ itemId, buyerId, creatorId, onClose }) => {
  if (!itemId) {
    return (
      <Modal
        title="Item Details"
        open={!!itemId}
        onCancel={onClose}
        footer={null}
        centered
        width={800}
      >
        <Alert message="Error" description="Missing item ID" type="error" showIcon />
      </Modal>
    );
  }

  let itemMetadata = null;
  let itemContent = null;
  let isOwned = false;
  let error = null;

  try {
    // Fetch item metadata from PostgreSQL
    itemMetadata = await prismaItems.items.findUnique({
      where: { item_id: itemId },
    });

    if (!itemMetadata) {
      throw new Error("Item not found");
    }

    // Fetch item content from MongoDB
    itemContent = await prismaContent.Item.findUnique({
      where: { item_d: itemId },
    });

    // Check ownership in item_ownership table (for status display only)
    if (buyerId && creatorId) {
      const ownership = await prismaItems.item_ownership.findFirst({
        where: {
          item_id: itemId,
          creator_id: creatorId,
          customer_id: buyerId,
        },
      });
      isOwned = !!ownership;
    }
  } catch (err) {
    error = err instanceof Error ? err.message : "An error occurred while fetching item details";
  }

  return (
    <Modal
      title="Item Details"
      open={!!itemId}
      onCancel={onClose}
      footer={null}
      centered
      width={800}
    >
      {error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : itemMetadata ? (
        <div className="flex flex-col gap-4">
          {itemContent?.thumbnail && (
            <Image
              src={itemContent.thumbnail}
              alt="Item thumbnail"
              className="w-full h-64 object-cover rounded-lg"
              preview={true}
            />
          )}
          <Title level={4}>{itemMetadata.title}</Title>
          <Text className="text-lg">{itemMetadata.description || 'No description available'}</Text>
          <div className="flex items-center justify-between border-t pt-4">
            <div>
              <Text strong>Price:</Text>
              <Title level={4} className="!mt-1 !mb-0 text-blue-600">
                {itemMetadata.price ? `$${itemMetadata.price}` : 'Free'}
              </Title>
            </div>
            <Text>Category: {itemMetadata.category || 'None'}</Text>
          </div>
          <div>
            <Text strong>Text Content:</Text>
            <Text className="block mt-1">{itemContent?.text_content || 'No text content'}</Text>
          </div>
          <div>
            <Text strong>Artwork:</Text>
            {itemContent?.art_urls?.length ? (
              <div className="grid grid-cols-2 gap-2 mt-1">
                {itemContent.art_urls.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt={`Artwork ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                    preview={true}
                  />
                ))}
              </div>
            ) : (
              <Text className="block mt-1">No artwork available</Text>
            )}
          </div>
          {itemContent?.owners?.length > 0 && (
            <div>
              <Text strong>Owners:</Text>
              <Text className="block mt-1">{itemContent.owners.join(', ') || 'None'}</Text>
            </div>
          )}
          {buyerId && creatorId && (
            <div>
              <Text strong>Ownership Status:</Text>
              <Text className="block mt-1">
                {isOwned ? 'You own this item' : 'You do not own this item'}
              </Text>
            </div>
          )}
        </div>
      ) : (
        <Text>No item data available</Text>
      )}
    </Modal>
  );
};

export default ItemDetailsModal;