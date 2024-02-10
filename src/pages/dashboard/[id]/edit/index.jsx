import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import DashboardInvitations from '@/components/dashboard/dashboardEdit/DashboardInvitations';
import DashboardTitle from '@/components/dashboard/dashboardEdit/DashboardTitle';
import DashboardMembers from '@/components/dashboard/dashboardEdit/DashboardMembers';
import MainLayout from '@/components/layout/Layouts/MainLayout';
import styles from './DashboardEditPage.module.scss';

const cx = classNames.bind(styles);

const DashboardEditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return;

  return (
    <div className={cx('container')}>
      <div className={cx('container-title-members')}>
        <DashboardTitle dashboardId={id} />
        <DashboardMembers dashboardId={id} />
      </div>
      <div className={cx('container-invitations')}>
        <DashboardInvitations dashboardId={id} />
      </div>
    </div>
  );
};

export default DashboardEditPage;

DashboardEditPage.FullLayout = MainLayout;
