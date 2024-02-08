import React from 'react';
import classNames from 'classnames/bind';
import Users from '@/api/users';
import Nav from '@/components/layout/Nav';
import MyHeader from '@/components/layout/Header/MyHeader';
import useUserStore from '@/stores/useUserStore';
import useAsync from '@/hooks/useAsync';
import { INIT_USER_DATA } from '@/constants/initialDataType';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  useAsync(() => Users.get(), INIT_USER_DATA);
  const { user } = useUserStore();

  return (
    <div className={cx('layout')}>
      <div className='sm-hidden'>
        <Nav />
      </div>
      <div className={cx('container')}>
        <MyHeader user={user} />
        <div className={cx('sm-only', 'sm-nav')}>
          <Nav />
        </div>
        <main className={cx('main')}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
