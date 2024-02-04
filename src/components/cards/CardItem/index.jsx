import Image from 'next/image';
import classNames from 'classnames/bind';
import Cards from '@/api/cards';
import CardTags from '@/components/common/CardTags';
import Avatar from '@/components/common/Avatar';
import CommonModal from '@/components/layout/modal/CommonModal';
import DetailCard from '@/components/dashboard/modal/card/DetailCard';
import IconModal from '@/components/layout/modal/IconModal';
import BaseButton from '@/components/common/button/BaseButton';
import CreateCard from '@/components/dashboard/modal/card/CreateCard';
import useCardStore from '@/stores/useCardStore';
import useAsync from '@/hooks/useAsync';
import useModalState from '@/hooks/useModalState';
import { IMAGE_REGEX } from '@/constants';
import { ICON } from '@/constants/importImage';
import { INIT_CARD_DATA } from '@/constants/initialDataType';
import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);
const { calendar, delete: remove } = ICON;

const CardItem = ({ id, assignee, tags, imageUrl, title, columnName }) => {
  const { data } = useAsync(() => Cards.get(id), INIT_CARD_DATA);
  const { card } = useCardStore();
  const { modalState, toggleModal } = useModalState([
    '3',
    ['detailCard', 'editCard', 'deleteCard'],
  ]);
  const isImageUrl = !!imageUrl && IMAGE_REGEX.test(imageUrl.toLowerCase());

  const handleModalOpen = (value) => {
    if (!value) {
      toggleModal('detailCard');
      toggleModal('editCard');
    } else {
      toggleModal('deleteCard');
    }
  };

  const handleDeleteModalClose = () => {
    toggleModal('deleteCard');
  };

  const handleCardDelete = () => {
    toggleModal('deleteCard');
    toggleModal('detailCard');
  };

  return (
    <>
      <article className={cx('card')} onClick={() => toggleModal('detailCard')}>
        {isImageUrl && (
          <div className={cx('card-thumbnail')}>
            <Image
              src={imageUrl}
              alt='card-thumbnail-image'
              fill
              sizes='100%'
              priority
              className={cx('card-thumbnail-image')}
            ></Image>
          </div>
        )}
        <div className={cx('card-header')}>
          <h1 className={cx('card-header-title')}>{title}</h1>
          <CardTags data={tags} />
        </div>
        <div className={cx('card-footer')}>
          <div className={cx('card-footer-deadline')}>
            <Image
              src={calendar.default.url}
              alt={calendar.default.alt}
              width={18}
              height={18}
              className={cx('card-footer-deadline-icon')}
            ></Image>
            <span className={cx('card-footer-deadline-date')}>{card?.dueDate}</span>
          </div>
          <Avatar
            profileImage={assignee.profileImage}
            profileName={assignee.nickname}
            avatarSize='sm'
          />
        </div>
      </article>

      <CommonModal
        onClickInput={handleModalOpen}
        isModalOpen={modalState.detailCard}
        closeModal={() => toggleModal('detailCard')}
        isDetail={true}
        detailInfo={{ columnTitle: columnName, cardTitle: title }}
      >
        <DetailCard {...data} toggleModal={toggleModal} cardId={id} />
      </CommonModal>

      <IconModal
        isModalOpen={modalState.deleteCard}
        closeModal={handleDeleteModalClose}
        iconName={remove}
        iconSize={58}
        title='Are you sure?'
        desc='This action cannot be undone.'
      >
        <div className={cx('modal-footer-btn')}>
          <BaseButton
            variant='outline'
            size='lg'
            text='Cancel'
            onClick={handleDeleteModalClose}
          />
          <BaseButton
            variant='remove'
            size='lg'
            text='Delete'
            onClick={handleCardDelete}
          />
        </div>
      </IconModal>

      <CommonModal
        onClickInput={handleModalOpen}
        isModalOpen={modalState.editCard}
        closeModal={() => toggleModal('editCard')}
        label='Edit Card'
      >
        <CreateCard columnTitle={columnName} />
      </CommonModal>
    </>
  );
};

export default CardItem;
