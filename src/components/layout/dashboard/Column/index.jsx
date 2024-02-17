import classNames from 'classnames/bind';
import Column from '@/components/columns/Column';
import AddColumnButton from '@/components/columns/AddColumnButton';
import useGetColumns from '@/hooks/useGetColumns';
import styles from './ColumnLayout.module.scss';

const cx = classNames.bind(styles);

const ColumnLayout = ({ dashboardId }) => {
  const { columnList } = useGetColumns({ dashboardId });

  const MAX_COLUMN_COUNT = 10;

  return (
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
          <AddColumnButton dashboardId={dashboardId} />
        </li>
      )}
    </ol>
  );
};

export default ColumnLayout;
