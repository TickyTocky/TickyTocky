import classNames from 'classnames/bind';
import IconModal from '@/components/layout/modal/IconModal';
import { ICON } from '@/constants';
import BaseButton from '@/components/common/button/BaseButton';
import styles from './SucessModal.module.scss';

const cx = classNames.bind(styles);
const { success } = ICON;

const SuccessModal = ({ desc, isModalOpen, closeModal }) => (
  <IconModal
    isModalOpen={isModalOpen}
    closeModal={closeModal}
    iconSize={58}
    iconName={success}
    title='Success'
    desc={desc}
  >
    <div className={cx('modal-btn')}>
      <BaseButton
        size='xl'
        text='Close'
        type='button'
        variant='outline'
        onClick={closeModal}
      />
    </div>
  </IconModal>
);

export default SuccessModal;
