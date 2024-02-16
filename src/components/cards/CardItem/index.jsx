import Image from 'next/image';
import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import BaseButton from '@/components/common/button/BaseButton';
import CreateCard from '@/components/dashboard/modal/card/CreateCard';
import CardTags from '@/components/common/CardTags';
import CommonModal from '@/components/layout/modal/CommonModal';
import DetailCard from '@/components/dashboard/modal/card/DetailCard';
import IconModal from '@/components/layout/modal/IconModal';
import useCardFetchData from '@/hooks/logic/useCardFetchData';
import useCreateCard from '@/hooks/logic/useCreateCard';
import useModalState from '@/hooks/useModalState';
import { IMAGE_REGEX } from '@/constants';
import { ICON } from '@/constants/importImage';
import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);
const { calendar, remove } = ICON;

const CardItem = ({ columnId, id, columnName }) => {
  const { cardItemData } = useCardFetchData({ columnId, id });
  const { assignee, title, imageUrl, tags, dueDate } = cardItemData;
  const { modalState, toggleModal } = useModalState([
    'detailCard',
    'editCard',
    'deleteCard',
  ]);
  const isImageUrl = !!imageUrl && IMAGE_REGEX.test(imageUrl.toLowerCase());
  const { handleModalOpen, handleDeleteModalClose, handleCardDelete } = useCreateCard({
    id,
    columnId,
    toggleModal,
  });

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
            <span className={cx('card-footer-deadline-date')}>{dueDate}</span>
          </div>
          <Avatar
            userId={assignee.id}
            profileImage={assignee.profileImageUrl}
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
        <DetailCard colId={columnId} cardId={id} toggleModal={toggleModal} />
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
        <CreateCard
          columnId={columnId}
          columnTitle={columnName}
          toggleModal={toggleModal}
          cardItemData={cardItemData}
          isEdit
        />
      </CommonModal>
    </>
  );
};

export default CardItem;
