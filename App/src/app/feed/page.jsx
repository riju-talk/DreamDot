"use client";
import { Layout, Row, Col } from 'antd';
import Navbar from '../(components)/Navbar';
import {Feed, Marketplace, AppSidebar} from './page_components';

export default function DreamdotLayout() {
  return (
    <Layout className="min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <Layout>
        <Row className="h-[calc(100vh-4rem)]">
          {/* Left Sidebar - Fixed Width */}
          <Col className="h-full border-r border-gray-200" flex="0 0 320px">
            <AppSidebar />
          </Col>

          {/* Middle Feed - Flexible Content */}
          <Col className="h-full overflow-y-auto" flex="auto">
            <div className="p-6 max-w-4xl mx-auto">
              <Feed />
            </div>
          </Col>

          {/* Right Marketplace - Fixed Width */}
          <Col className="h-full border-l border-gray-200" flex="0 0 400px">
            <div className="p-6 sticky top-0">
              <Marketplace />
            </div>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
}