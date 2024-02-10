import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import IconModal from '@/components/layout/modal/IconModal';
import { ICON } from '@/constants/importImage';
import Members from '@/api/members';
import styles from './DashboardEditPage.module.scss';

const cx = classNames.bind(styles);
const { remove } = ICON;
const DeleteDashboard = ({ isModalOpen, closeModal, memberId, dashboardId }) => {
  const handleDeleteMember = async () => {
    await Members.delete(memberId);
    await Members.getList(1, 100, dashboardId);
    closeModal('dashboardDelete');
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
        <BaseButton
          onClick={handleDeleteMember}
          variant='remove'
          size='xl'
          text='Delete'
        />
      </div>
    </IconModal>
  );
};

export default DeleteDashboard;
