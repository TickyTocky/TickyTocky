import classNames from 'classnames/bind';
import Columns from '@/api/columns';
import Column from '@/components/columns/Column';
import AddColumnButton from '@/components/columns/AddColumnButton';
import useColumnStore from '@/stores/useColumnStore';
import useAsync from '@/hooks/useAsync';
import { INIT_COLUMNS_DATA } from '@/constants/initialDataType';
import styles from './ColumnLayout.module.scss';

const cx = classNames.bind(styles);

const ColumnLayout = ({ dashBoardId }) => {
  useAsync(() => Columns.getList(dashBoardId), INIT_COLUMNS_DATA);

  const { columnList } = useColumnStore();

  const MAX_COLUMN_COUNT = 10;

  return (
    <>
      <ol className={cx('columns-list')}>
        {columnList?.map((column) => (
          <li className={cx('columns-list-item')} key={`key-column-list-${column.id}`}>
            <Column
              dashboardId={column.dashboardId}
              columnId={column.id}
              title={column.title}
            />
          </li>
        ))}
        {columnList?.length < MAX_COLUMN_COUNT && (
          <li className={cx('columns-list-item', 'columns-list-item-last')}>
            <AddColumnButton dashBoardId={dashBoardId} />
          </li>
        )}
      </ol>
    </>
  );
};

export default ColumnLayout;
