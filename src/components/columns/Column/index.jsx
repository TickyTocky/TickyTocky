import classNames from 'classnames/bind';
import Cards from '@/api/cards';
import KebabDropDown from '@/components/common/KebabDropDown';
import CardItem from '@/components/cards/CardItem';
import AddCardButton from '@/components/columns/AddCardButton';
import CommonModal from '@/components/layout/modal/CommonModal';
import IconModal from '@/components/layout/modal/IconModal';
import CreateCrad from '@/components/dashboard/modal/card/CreateCard';
import EditColumn from '@/components/dashboard/modal/column/EditColumn';
import DeleteColumn from '@/components/dashboard/modal/column/DeleteColumn';
import useAsync from '@/hooks/useAsync';
import useToggleButton from '@/hooks/useToggleButton';
import useModalState from '@/hooks/useModalState';
import { INIT_CARDS_DATA } from '@/constants/initialDataType';
import { ICON } from '@/constants/importImage';
import styles from './Column.module.scss';

const cx = classNames.bind(styles);
const { remove } = ICON;

const Column = ({ id: columnId, title, dashboardId }) => {
  const { data } = useAsync(() => Cards.getList(columnId), INIT_CARDS_DATA);
  const { isVisible, handleToggleClick } = useToggleButton();
  const { modalState, toggleModal } = useModalState([
    3,
    ['editColumnModal', 'deleteColumnModal', 'addCardModal'],
  ]);

  const handleIconClick = (value) => {
    !value ? toggleModal('editColumnModal') : toggleModal('deleteColumnModal');
  };

  return (
    <>
      <section className={cx('container')}>
        <header className={cx('header')}>
          <div className={cx('title-wrap')}>
            <span className={cx('title')}>{title}</span>
            <span className={cx('count')}>{data.totalCount}</span>
          </div>
          <KebabDropDown onClickInput={handleIconClick} />
          <button
            className={cx('sm-button', 'sm-only')}
            onClick={handleToggleClick}
          ></button>
        </header>
        <ol className={cx('cards-list', { close: isVisible })}>
          {data.cards?.map(
            (card) =>
              card.title && (
                <li key={card.id} className={cx('cards-list-item')}>
                  <CardItem columnName={title} {...card} />
                </li>
              )
          )}
        </ol>
        <footer className={cx('footer')} onClick={() => toggleModal('addCardModal')}>
          <AddCardButton />
        </footer>
      </section>
      <CommonModal
        isModalOpen={modalState.editColumnModal}
        closeModal={() => toggleModal('editColumnModal')}
        label='Edit Column'
      >
        <EditColumn
          dashboardId={dashboardId}
          columnId={columnId}
          title={title}
          closeModal={() => toggleModal('editColumnModal')}
        />
      </CommonModal>
      <IconModal
        isModalOpen={modalState.deleteColumnModal}
        closeModal={() => toggleModal('deleteColumnModal')}
        title='Are you sure'
        desc='You wanna delete this?'
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
        <CreateCrad columnTitle={title} />
      </CommonModal>
    </>
  );
};

export default Column;
