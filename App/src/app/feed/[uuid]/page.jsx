"use client";
import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../../(components)/Navbar';
import { Feed, Marketplace, AppSidebar } from './page_components';
import { useParams } from 'next/navigation';

export default function DreamdotLayout() {
  const { uuid } = useParams(); // Extract uuid from the URL
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Layout className="overflow-hidden">
      <Navbar userId={uuid} />
      <Layout>
        <Row className="h-[calc(100vh-4rem)]">
          {/* Left Sidebar */}
          <Col flex="0 0 240px" className="h-full">
            <AppSidebar />
          </Col>
          {/* Feed Section */}
          <Col flex="1 1 600px" className="h-full overflow-y-auto">
            <div className="p-4">
              <Feed />
            </div>
          </Col>
          {/* Marketplace Section */}
          <Col flex="1 1 300px" className="h-full overflow-y-auto">
            <div className="p-4 sticky top-0">
              <Marketplace />
            </div>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
}
