import Image from 'next/image';
import classNames from 'classnames/bind';
import Cards from '@/api/cards';
import KebabDropDown from '@/components/common/KebabDropDown';
import CardItem from '@/components/cards/CardItem';
import AddCardButton from '@/components/columns/AddCardButton';
import CommonModal from '@/components/layout/modal/CommonModal';
import IconModal from '@/components/layout/modal/IconModal';
import CreateCard from '@/components/dashboard/modal/card/CreateCard';
import EditColumn from '@/components/dashboard/modal/column/EditColumn';
import DeleteColumn from '@/components/dashboard/modal/column/DeleteColumn';
import useCardStore from '@/stores/useCardStore';
import useAsync from '@/hooks/useAsync';
import useToggleButton from '@/hooks/useToggleButton';
import useModalState from '@/hooks/useModalState';
import { INIT_CARDS_DATA } from '@/constants/initialDataType';
import { ICON } from '@/constants/importImage';
import Spinner from '@/components/common/Spinner';
import styles from './Column.module.scss';

const cx = classNames.bind(styles);
const { remove, empty } = ICON;

const Column = ({ columnId, title: columnName, dashboardId }) => {
  const { isLoading } = useAsync(() => Cards.getList(columnId), INIT_CARDS_DATA);
  const cardList = useCardStore((prev) => prev.cardList[columnId]);

  const { isVisible, handleToggleClick } = useToggleButton();
  const { modalState, toggleModal } = useModalState([
    'editColumnModal',
    'deleteColumnModal',
    'addCardModal',
  ]);

  const handleIconClick = (value) => {
    !value ? toggleModal('editColumnModal') : toggleModal('deleteColumnModal');
  };

  return (
    <>
      <section className={cx('container')}>
        <header className={cx('header', { close: !isVisible })}>
          <div className={cx('header-title-wrap')}>
            <span className={cx('header-title')}>{columnName}</span>
            <span className={cx('header-count')}>{cardList?.count}</span>
          </div>
          <button
            className={cx('header-sm-button', 'sm-only')}
            onClick={handleToggleClick}
          ></button>
          <div className={cx('header-drop-down', { close: !isVisible })}>
            <KebabDropDown onClickInput={handleIconClick} />
          </div>
        </header>
        <div className={cx('content', { close: !isVisible })}>
          <ol className={cx('content-cards-list')}>
            {cardList?.cards && cardList?.cards.length > 0 ? (
              cardList?.cards.map(
                ({ id, columnId, title }) =>
                  title && (
                    <li
                      key={`key-card-list-${id}`}
                      className={cx('content-cards-list-item')}
                    >
                      <CardItem id={id} columnName={columnName} columnId={columnId} />
                    </li>
                  )
              )
            ) : (
              <li className={cx('content-cards-list-empty')}>
                <Image src={empty.url} alt={empty.alt} width={40} height={40} />
                <span>No Card Found</span>
              </li>
            )}
          </ol>
          <footer
            className={cx('footer', { close: !isVisible })}
            onClick={() => toggleModal('addCardModal')}
          >
            <AddCardButton isVisible={isVisible} />
          </footer>
        </div>
      </section>
      <CommonModal
        isModalOpen={modalState.editColumnModal}
        closeModal={() => toggleModal('editColumnModal')}
        label='Edit Column'
      >
        <EditColumn
          dashboardId={dashboardId}
          columnId={columnId}
          title={columnName}
          closeModal={() => toggleModal('editColumnModal')}
        />
      </CommonModal>
      <IconModal
        isModalOpen={modalState.deleteColumnModal}
        closeModal={() => toggleModal('deleteColumnModal')}
        title='Are you sure'
        desc='This action cannot be undone.'
        iconName={{ url: remove.url, alt: remove.alt }}
        iconSize='58'
      >
        <DeleteColumn
          dashboardId={dashboardId}
          columnId={columnId}
          closeModal={() => toggleModal('deleteColumnModal')}
        />
      </IconModal>
      <CommonModal
        isModalOpen={modalState.addCardModal}
        closeModal={() => toggleModal('addCardModal')}
        label='Add Card'
      >
        <CreateCard
          columnTitle={columnName}
          columnId={columnId}
          dashboardId={dashboardId}
          toggleModal={toggleModal}
        />
      </CommonModal>
      {isLoading && <Spinner />}
    </>
  );
};

export default Column;
