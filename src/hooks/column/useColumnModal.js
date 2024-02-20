import Columns from '@/api/columns';

const useColumnModal = ({ dashboardId, columnId, closeModal, reset }) => {
  const MAX_TEXT_LENGTH = 13;

  const onSubmit = async (data) => {
    if (data.title.length <= MAX_TEXT_LENGTH) {
      if (columnId) {
        await Columns.edit(columnId, data.title);
      } else {
        await Columns.create(dashboardId, data.title);
      }
      closeModal();
      await Columns.getList(dashboardId);
      if (reset) {
        reset();
      }
    }
  };

  const handleDeleteClick = async () => {
    await Columns.delete(columnId);
    await Columns.getList(dashboardId);
  };

  return { MAX_TEXT_LENGTH, onSubmit, handleDeleteClick };
};

export default useColumnModal;
