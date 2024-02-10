import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import DashboardInvitations from '@/components/dashboard/dashboardEdit/DashboardInvitations';
import DashboardTitle from '@/components/dashboard/dashboardEdit/DashboardTitle';
import DashboardMembers from '@/components/dashboard/dashboardEdit/DashboardMembers';
import MainLayout from '@/components/layout/Layouts/MainLayout';
import BaseButton from '@/components/common/button/BaseButton';
import BoardHeader from '@/components/layout/Header/BoardHeader';
import DeleteDashboard from '@/components/dashboard/modal/dashboard/DeleteDashboard';
import useModalState from '@/hooks/useModalState';
import styles from './DashboardEditPage.module.scss';

const cx = classNames.bind(styles);

const DashboardEditPage = () => {
  const { modalState, toggleModal } = useModalState(['dashboardDelete']);
  const router = useRouter();
  const { id } = router.query;

  if (!id) return;

  return (
    <>
      <BoardHeader />
      <div className={cx('dashboard-edit')}>
        <div className={cx('dashboard-edit-container')}>
          <span className={cx('title')}>Edit</span>
          <BaseButton
            onClick={() => toggleModal('dashboardDelete')}
            text='Delete'
            size='md'
            variant='remove'
          />
          <DeleteDashboard
            isModalOpen={modalState.dashboardDelete}
            closeModal={() => toggleModal('dashboardDelete')}
            dashboardId={id}
          />
        </div>
        <div className={cx('container')}>
          <div className={cx('container-title-members')}>
            <DashboardTitle dashboardId={id} />
            <DashboardMembers dashboardId={id} />
          </div>
          <div className={cx('container-invitations')}>
            <DashboardInvitations dashboardId={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardEditPage;

DashboardEditPage.FullLayout = MainLayout;
