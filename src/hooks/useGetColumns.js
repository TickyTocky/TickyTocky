import Columns from '@/api/columns';
import useColumnStore from '@/stores/useColumnStore';
import useAsync from '@/hooks/useAsync';

const useGetColumns = ({ dashboardId }) => {
  useAsync(() => Columns.getList(dashboardId));
  const { columnList } = useColumnStore();

  return { columnList };
};

export default useGetColumns;
