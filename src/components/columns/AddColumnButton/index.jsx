import Image from 'next/image';
import classNames from 'classnames/bind';
import CommonModal from '@/components/layout/modal/CommonModal';
import AddColumn from '@/components/dashboard/modal/column/AddColumn';
import useModalState from '@/hooks/useModalState';
import { ICON } from '@/constants/importImage';
import styles from './AddColumnButton.module.scss';

const cx = classNames.bind(styles);
const { add } = ICON;

const AddColumnButton = ({ dashBoardId }) => {
  const { modalState, toggleModal } = useModalState([3, ['addColumnModal']]);

  return (
    <>
      <CommonModal
        isModalOpen={modalState.addColumnModal}
        closeModal={() => toggleModal('addColumnModal')}
        label='Add Column'
      >
        <AddColumn
          dashBoardId={dashBoardId}
          closeModal={() => toggleModal('addColumnModal')}
        />
      </CommonModal>
      <button className={cx('container')} onClick={() => toggleModal('addColumnModal')}>
        <Image src={add.gray.url} alt={add.gray.alt} width={24} height={24} />
        <span className={cx('text')}>Add Column</span>
      </button>
    </>
  );
};

export default AddColumnButton;
