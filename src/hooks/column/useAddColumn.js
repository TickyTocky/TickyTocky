import Columns from '@/api/columns';

const useAddColumn = ({ dashboardId, closeModal }) => {
  const MAX_TEXT_LENGTH = 13;

  const onSubmit = async (data) => {
    if (data.title !== '' && data.title.length <= MAX_TEXT_LENGTH) {
      await Columns.create(dashboardId, data.title);
      closeModal();
      await Columns.getList(dashboardId);
    }
  };

  return { MAX_TEXT_LENGTH, onSubmit };
};

export default useAddColumn;
