import IconModal from '@/components/layout/modal/IconModal';
import { ICON } from '@/constants/importImage';
import BaseButton from '@/components/common/button/BaseButton';

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
    <BaseButton
      size='lg'
      text='close'
      type='button'
      variant='outline'
      onClick={closeModal}
    />
  </IconModal>
);

export default SuccessModal;
