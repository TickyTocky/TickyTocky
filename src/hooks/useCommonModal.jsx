import useModalStore from '@/stores/useModalStore';
import { useEffect } from 'react';
import ReactModal from 'react-modal';

const useCommonModal = () => {
  const { isCommonModalOpened, openCommonModal, closeCommonModal } = useModalStore();

  useEffect(() => {
    ReactModal.setAppElement(document.getElementById('#__next'));
  }, []);

  return { isCommonModalOpened, openCommonModal, closeCommonModal };
};

export default useCommonModal;
