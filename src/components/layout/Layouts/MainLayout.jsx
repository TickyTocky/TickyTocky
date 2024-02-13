import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Users from '@/api/users';
import Nav from '@/components/layout/Nav';
import MyHeader from '@/components/layout/Header/MyHeader';
import useAsync from '@/hooks/useAsync';
import useUserStore from '@/stores/useUserStore';
import Dashboard from '@/api/dashboards';
import { INIT_DASHBOARDS_DATA, INIT_USER_DATA } from '@/constants/initialDataType';
import Spinner from '@/components/common/Spinner';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  useAsync(() => Users.get(), INIT_USER_DATA);
  const { isLoading } = useAsync(() => Dashboard.getList(), INIT_DASHBOARDS_DATA);
  const { user } = useUserStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={cx('layout')}>
      <div className='sm-hidden'>{!isMobile && <Nav />}</div>
      <div className={cx('container')}>
        <MyHeader user={user} />
        <div className={cx('sm-only', 'sm-nav')}>{isMobile && <Nav />}</div>
        <main className={cx('main')}>{children}</main>
        {isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default MainLayout;
