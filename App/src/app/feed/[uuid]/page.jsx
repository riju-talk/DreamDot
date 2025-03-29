"use client";
import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../../(components)/Navbar';
import { Feed, Marketplace, AppSidebar } from './page_components';
import { useParams, useRouter } from 'next/navigation';
import { validateToken } from '../../api/middleware/validateToken';
import CreatePost from '../../(components)/post_dialogue';

export default function DreamdotLayout() {
  const { uuid } = useParams(); // Extract uuid from the URL
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPostModal, setShowPostModal] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    validateToken({ setIsAuthenticated, setLoading, router, uuid });
  }, [router]);

  // Avoid rendering until mounted and authenticated
  if (!isMounted || loading) return <div className='h-screen flex justify-center items-center'>Loading...</div>;
  // If token is invalid, redirect to /auth/
  if (!isAuthenticated) return null;

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
            <div className="p-4 sticky top-0 bg-white z-10">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded" 
                onClick={() => setShowPostModal(true)}
              >
                Create Post
              </button>
            </div>
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
      {/* Render CreatePost modal */}
      {showPostModal && (
        <CreatePost onClose={() => setShowPostModal(false)} />
      )}
    </Layout>
  );
}
// Note: The CreatePost component should handle the actual post creation logic and UI.
//       }
//       The AppSidebar component is a simplified version of the sidebar with direct messages and groups.