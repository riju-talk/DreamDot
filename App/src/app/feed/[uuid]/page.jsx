"use client";
import { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../../(components)/Navbar';
import { Feed, Marketplace, AppSidebar } from './page_components';

export default function DreamdotLayout() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Layout className="overflow-hidden">
      <Navbar />

      <Layout>
        <Row className="h-[calc(100vh-4rem)]">
          {/* Reduced Sidebar Width */}
          <Col flex="0 0 240px" className="h-full">
            <AppSidebar />
          </Col>

          {/* Adjusted Feed Width */}
          <Col flex="1 1 600px" className="h-full overflow-y-auto">
            <div className="p-4">
              <Feed />
            </div>
          </Col>

          {/* Marketplace maintains width */}
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
