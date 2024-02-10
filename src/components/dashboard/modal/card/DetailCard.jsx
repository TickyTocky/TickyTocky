import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import Comment from '@/api/comments';
import BaseButton from '@/components/common/button/BaseButton';
import CardTags from '@/components/common/CardTags';
import CommentItem from '@/components/cards/CommentItem';
import TextField from '@/components/common/TextField';
import useCardStore from '@/stores/useCardStore';
import useCommentStore from '@/stores/useCommentStore';
import useAsync from '@/hooks/useAsync';
import { INIT_COMMENTS_DATA } from '@/constants/initialDataType';
import styles from './DetailCard.module.scss';

const cx = classNames.bind(styles);

const DetailCard = ({ colId, cardId, toggleModal }) => {
  const cardList = useCardStore((prev) => prev.cardList[colId]);
  const cardItemData = cardList?.cards.find((card) => card.id === cardId);

  const { assignee, columnId, dashboardId, tags, dueDate, description } = cardItemData;

  useAsync(() => Comment.getList(cardId), INIT_COMMENTS_DATA);
  const { commentList } = useCommentStore();
  const { reset } = useFormContext();

  const handleModalClose = () => {
    toggleModal('detailCard');
    reset();
  };

  return (
    <div className={cx('container')}>
      <div className={cx('col-2')}>
        <section className={cx('detail-content')}>
          <h1 className='visually-hidden'>할 일 상세보기</h1>
          <div className={cx('detail-content-header')}>
            <div className={cx('header-info')}>
              <div className={cx('header-info-item')}>
                <h2 className={cx('header-info-item-title')}>Manager</h2>
                <p className={cx('header-info-item-content')}>{assignee.nickname}</p>
              </div>
              <div className={cx('header-info-item')}>
                <h2 className={cx('header-info-item-title')}>Deadline</h2>
                <p className={cx('header-info-item-content')}>{dueDate}</p>
              </div>
            </div>
            <div className={cx('header-tag')}>
              <h2 className={cx('header-tag-title')}>Tags</h2>
              <div>
                <CardTags data={tags} isDetailed />
              </div>
            </div>
          </div>
          <div className={cx('detail-content-main')}>
            <p
              className={cx('main-desc')}
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </section>

        <section className={cx('comment-content')}>
          <h1 className='visually-hidden'>댓글 남기기</h1>
          <TextField
            name='content'
            cardId={cardId}
            columnId={columnId}
            dashboardId={dashboardId}
          />

          <ol className={cx('comment-content-list')}>
            {commentList?.map(({ id }) => (
              <li
                key={`key-comment-content-${id}`}
                className={cx('comment-content-list-item')}
              >
                <CommentItem
                  id={id}
                  cardId={cardId}
                  columnId={columnId}
                  dashboardId={dashboardId}
                />
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className={cx('button-content')}>
        <BaseButton
          size='lg'
          variant='outline'
          text='Cancel'
          onClick={handleModalClose}
        />
      </div>
    </div>
  );
};

export default DetailCard;
