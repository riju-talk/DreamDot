// utils/validateToken.js
export const validateToken = async ({ setIsAuthenticated, setLoading, router,uuid }) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    router.push('/');
    return;
  }

  try {
    const res = await fetch('/api/middleware', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        uuid: uuid
      },
    });

    if (!res.ok) throw new Error('Unauthorized');

    const { user } = await res.json();
    console.log('Authenticated user:', user);
    setIsAuthenticated(true);
  } catch (error) {
    console.error('Token validation failed:', error);
    router.push('/');
  } finally {
    setLoading(false);
  }
};
