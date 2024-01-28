import { useEffect } from 'react';
import ReactModal from 'react-modal';
import useModalStore from '@/stores/useModalStore';

const useCardModal = () => {
  const { isCardModalOpened, openCardModal, closeCardModal } = useModalStore();

  useEffect(() => {
    ReactModal.setAppElement(document.getElementById('#__next'));
  }, []);

  return { isCardModalOpened, openCardModal, closeCardModal };
};

export default useCardModal;
