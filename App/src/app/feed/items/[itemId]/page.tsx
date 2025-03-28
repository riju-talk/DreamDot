// app/dreamdot/items/[itemId]/page.js
"use client";
import { useState } from 'react';
import { Image, Card, Rate, Tabs, Typography, Button, Layout } from 'antd';
import Navbar from '../../../(components)/Navbar';
import { useParams } from 'next/navigation';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function ItemPage() {
    const { uuid , itemId } = useParams();
    const [item, setItem] = useState({
        id: itemId,
        title: 'Vintage Camera',
        price: 299.99,
        description: 'Lorem ipsum...',
        isPurchased: false,
        media: 'image.jpg',
        reviews: [
            { user: 'John', rating: 4, comment: 'Great product!' },
        ],
    });

    return (
        <Layout>
            <Navbar userId={uuid}/>
            <div className="max-w-4xl mx-auto p-4">
                <Card>
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            {item.isPurchased ? (
                                item.mediaType === 'image' ? (
                                    <Image src={item.media} className="w-full" />
                                ) : (
                                    <div className="p-4 bg-gray-100">{item.media}</div>
                                )
                            ) : (
                                <div className="relative">
                                    <Image src={item.thumbnail} className="w-full blur-sm" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button type="primary">Purchase to View</Button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-1/2">
                            <Title level={2}>{item.title}</Title>
                            <Paragraph>{item.description}</Paragraph>
                            <Title level={4}>${item.price}</Title>
                            <Button type="primary">Purchase Item</Button>
                        </div>
                    </div>

                    <Tabs className="mt-6">
                        <TabPane tab="Reviews" key="1">
                            {item.reviews.map((review, index) => (
                                <Card key={index} className="mb-3">
                                    <Rate disabled value={review.rating} />
                                    <Paragraph>{review.comment}</Paragraph>
                                    <Text>- {review.user}</Text>
                                </Card>
                            ))}
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        </Layout>
    );
}