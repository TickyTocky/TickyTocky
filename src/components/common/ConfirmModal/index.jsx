import classNames from 'classnames/bind';
import IconModal from '@/components/layout/modal/IconModal';
import BaseButton from '@/components/common/button/BaseButton';
import { ICON } from '@/constants';
import styles from './InitializeConfirmModal.module.scss';

const { reset } = ICON;

const cx = classNames.bind(styles);

const InitializeConfirmModal = ({
  desc,
  isModalOpen,
  closeModal,
  handleInitializeClick,
}) => (
  <IconModal
    isModalOpen={isModalOpen}
    closeModal={closeModal}
    iconSize={58}
    iconName={reset}
    title='Initialize'
    desc={desc}
  >
    <div className={cx('modal-btns')}>
      <BaseButton size='lg' text='Cancel' variant='outline' onClick={closeModal} />
      <BaseButton
        size='lg'
        text='Apply'
        variant='remove'
        onClick={() => {
          handleInitializeClick();
          closeModal();
        }}
      />
    </div>
  </IconModal>
);

export default InitializeConfirmModal;
