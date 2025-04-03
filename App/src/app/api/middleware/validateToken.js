// utils/validateToken.js
export const validateToken = async ({ setIsAuthenticated, setLoading, router,uuid }) => {
<<<<<<< HEAD
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
=======
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
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Token validation failed:', error);
      router.push('/');
    } finally {
      setLoading(false);
    }
  };
  
>>>>>>> 3d60494a9f8185d54242eeb594f5fbc69dc7bb22
