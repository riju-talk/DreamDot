"use client";
import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../../(components)/Navbar';
import { Feed, Marketplace, AppSidebar } from './page_components';
import { useParams, useRouter } from 'next/navigation';
import { validateToken } from '../../api/middleware/validateToken';

export default function DreamdotLayout() {
  const { uuid } = useParams(); // Extract uuid from the URL
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    // const validateToken = async () => {
    //   const token = localStorage.getItem('token');
    //   if (!token) {
    //     router.push('/');
    //     return;
    //   }

    //   try {
    //     const res = await fetch('/api/middleware', {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });

    //     if (!res.ok) throw new Error('Unauthorized');
    //     const { user } = await res.json();
    //     console.log('Authenticated user:', user);
    //     setIsAuthenticated(true);
    //   } catch (error) {
    //     console.error('Token validation failed:', error);
    //     router.push('/');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    validateToken({ setIsAuthenticated, setLoading, router,uuid });
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
