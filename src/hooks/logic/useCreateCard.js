import Cards from '@/api/cards';

const useCreateCard = ({ id, columnId, toggleModal }) => {
  const handleModalOpen = (value) => {
    if (!value) {
      toggleModal('detailCard');
      toggleModal('editCard');
    } else {
      toggleModal('deleteCard');
    }
  };

  const handleDeleteModalClose = () => {
    toggleModal('deleteCard');
  };

  const handleCardDelete = async () => {
    await Cards.delete(id);
    await Cards.getList(columnId);
    toggleModal('deleteCard');
    toggleModal('detailCard');
  };

  return { handleModalOpen, handleDeleteModalClose, handleCardDelete };
};

export default useCreateCard;
