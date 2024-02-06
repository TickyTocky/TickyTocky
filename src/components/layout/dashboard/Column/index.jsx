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

  return (
    <ol className={cx('container')}>
      {columnList?.data.map((column) => (
        <li key={column.id}>
          <Column {...column} />
        </li>
      ))}
      {columnList?.data.length < 10 && (
        <li>
          <AddColumnButton dashBoardId={dashBoardId} />
        </li>
      )}
    </ol>
  );
};

export default ColumnLayout;
