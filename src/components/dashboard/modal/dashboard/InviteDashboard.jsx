import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import CommonModal from '@/components/layout/modal/CommonModal';
import InputField from '@/components/common/InputField';
import BaseButton from '@/components/common/button/BaseButton';
import Dashboard from '@/api/dashboards';
import styles from './DashboardEditPage.module.scss';

const cx = classNames.bind(styles);

const InviteDashboard = ({ isModalOpen, closeModal, dashboardId }) => {
  const { handleSubmit } = useFormContext();
  const onSubmit = async (data) => {
    await Dashboard.invite(dashboardId, data);
    await Dashboard.getInvite(dashboardId);
    closeModal();
  };

  return (
    <CommonModal isModalOpen={isModalOpen} label='Invite members' closeModal={closeModal}>
      <form className={cx('invite-dashboard-form')} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('invite-dashboard-form-container')}>
          <InputField label='Email' name='email' />
          <div className={cx('invite-dashboard-form-container-button-container')}>
            <BaseButton onClick={closeModal} variant='outline' text='Cancel' size='xl' />
            <BaseButton type='submit' variant='secondary' text='Invite' size='xl' />
          </div>
        </div>
      </form>
    </CommonModal>
  );
};

export default InviteDashboard;
