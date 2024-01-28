import { useEffect } from 'react';
import ReactModal from 'react-modal';
import useModalStore from '@/stores/useModalStore';

const useIconModal = () => {
  const { isIconModalOpened, openIconModal, closeIconModal } = useModalStore();

  useEffect(() => {
    ReactModal.setAppElement(document.getElementById('#__next'));
  }, []);

  return { isIconModalOpened, openIconModal, closeIconModal };
};

export default useIconModal;
