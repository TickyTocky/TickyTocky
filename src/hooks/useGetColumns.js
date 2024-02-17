import Columns from '@/api/columns';
import useColumnStore from '@/stores/useColumnStore';
import useAsync from '@/hooks/useAsync';
import { INIT_COLUMNS_DATA } from '@/constants/initialDataType';

const useGetColumns = ({ dashboardId }) => {
  useAsync(() => Columns.getList(dashboardId), INIT_COLUMNS_DATA);
  const { columnList } = useColumnStore();

  return { columnList };
};

export default useGetColumns;
