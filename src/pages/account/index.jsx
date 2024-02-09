import { router } from 'next/router';
import { useEffect } from 'react';
import AccountList from '@/components/account';
import MainLayout from '@/components/layout/Layouts/MainLayout';
import LocalStorage from '@/services/localStorage';

const Account = () => {
  useEffect(() => {
    const token = LocalStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <MainLayout>
      <AccountList />
    </MainLayout>
  );
};

export default Account;
