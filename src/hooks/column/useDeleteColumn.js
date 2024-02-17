import Columns from '@/api/columns';

const useDeleteColumn = ({ dashboardId, columnId }) => {
  const handleDeleteClick = async () => {
    await Columns.delete(columnId);
    await Columns.getList(dashboardId);
  };

  return { handleDeleteClick };
};

export default useDeleteColumn;
