import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import IconModal from '@/components/layout/modal/IconModal';
import { ICON } from '@/constants';
import styles from './DashboardEditPage.module.scss';

const cx = classNames.bind(styles);
const { success } = ICON;

const SuccessDashboard = ({ isModalOpen, closeModal }) => (
  <IconModal
    isModalOpen={isModalOpen}
    closeModal={closeModal}
    iconName={success}
    iconSize={58}
    title='Successs'
    desc='New title applied'
  >
    <div className={cx('single-button-container')}>
      <BaseButton onClick={closeModal} variant='outline' size='xl' text='Close' />
    </div>
  </IconModal>
);

export default SuccessDashboard;
