import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import IconModal from '@/components/layout/modal/IconModal';
import { ICON } from '@/constants/importImage';
import Members from '@/api/members';
import Dashboard from '@/api/dashboards';
import { redirectTo } from '@/api/auth';
import styles from './DashboardEditPage.module.scss';

const cx = classNames.bind(styles);
const { remove } = ICON;
const DeleteDashboard = ({ isModalOpen, closeModal, memberId = 0, dashboardId = 0 }) => {
  const handleOnClick = async () => {
    if (memberId) {
      await Members.delete(memberId);
      await Members.getList(1, 100, dashboardId);
    } else if (dashboardId) {
      await Dashboard.delete(dashboardId);
      await Dashboard.getList();
    }
    closeModal('dashboardDelete');
    redirectTo('/mydashboard');
  };

  return (
    <IconModal
      isModalOpen={isModalOpen}
      closeModal={() => closeModal('dashboardDelete')}
      iconName={remove}
      iconSize={58}
      title='Dashboard Delete'
      desc='This action can not be undone'
    >
      <div className={cx('button-container')}>
        <BaseButton
          onClick={() => closeModal('dashboardDelete')}
          variant='outline'
          size='xl'
          text='Cancel'
        />
        <BaseButton onClick={handleOnClick} variant='remove' size='xl' text='Delete' />
      </div>
    </IconModal>
  );
};

export default DeleteDashboard;
