import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import useDeleteColumn from '@/hooks/column/useDeleteColumn';
import styles from './ColumnModal.module.scss';

const cx = classNames.bind(styles);

const DeleteColumn = ({ dashboardId, columnId, closeModal }) => {
  const { handleDeleteClick } = useDeleteColumn({ dashboardId, columnId });

  return (
    <>
      <div className={cx('button')}>
        <div onClick={closeModal}>
          <BaseButton size='lg' variant='outline' type='button' text='Cancel' />
        </div>
        <div onClick={handleDeleteClick}>
          <BaseButton size='lg' variant='remove' type='submit' text='Delete' />
        </div>
      </div>
    </>
  );
};

export default DeleteColumn;
