import classNames from 'classnames/bind';
import IconModal from '@/components/layout/modal/IconModal';
import BaseButton from '@/components/common/button/BaseButton';
import Dashboard from '@/api/dashboards';
import { ICON } from '@/constants';
import styles from './DashboardEditPage.module.scss';

const cx = classNames.bind(styles);
const { remove } = ICON;

const WithdrawInvitation = ({ isModalOpen, closeModal, invitationId, dashboardId }) => {
  const handleOnClick = async () => {
    await Dashboard.deleteInvite(dashboardId, invitationId);
    await Dashboard.getInvite(dashboardId);
    closeModal('invitationWithdraw');
  };

  return (
    <IconModal
      isModalOpen={isModalOpen}
      closeModal={() => closeModal('invitationWithdraw')}
      iconName={remove}
      iconSize={58}
      title='Invitation Withdraw'
      desc='This action can not be undone'
    >
      <div className={cx('button-container')}>
        <BaseButton
          onClick={() => closeModal('invitationWithdraw')}
          variant='outline'
          size='xl'
          text='Cancel'
        />
        <BaseButton onClick={handleOnClick} variant='remove' size='xl' text='Withdraw' />
      </div>
    </IconModal>
  );
};

export default WithdrawInvitation;
