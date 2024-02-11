import { router } from 'next/router';
import { useEffect } from 'react';
import LocalStorage from '@/services/localStorage';

const useAuth = () => {
  const token = LocalStorage.getItem('accessToken');

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token]);
};

export default useAuth;
