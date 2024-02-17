import Columns from '@/api/columns';

const useEditColumn = ({ dashboardId, columnId, closeModal, reset }) => {
  const MAX_TEXT_LENGTH = 13;

  const onSubmit = async (data) => {
    if (data.title !== '' && data.title.length <= MAX_TEXT_LENGTH) {
      await Columns.edit(columnId, data.title);
      closeModal();
      await Columns.getList(dashboardId);
      reset();
    }
  };

  return { MAX_TEXT_LENGTH, onSubmit };
};

export default useEditColumn;
