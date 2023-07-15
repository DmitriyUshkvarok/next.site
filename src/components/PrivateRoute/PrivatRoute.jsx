'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/authApi/authSelector';
import { useEffect, useState } from 'react';

const PrivatRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const getAuthToken = useSelector(authSelector.authToken);

  useEffect(() => {
    if (!getAuthToken) {
      router.replace('/');
    } else {
      setLoading(false);
    }
  }, [getAuthToken, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default PrivatRoute;
