import { useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames/bind';
import Users from '@/api/users';
import Comment from '@/api/comments';
import Avatar from '@/components/common/Avatar';
import UpdatedTag from '@/components/cards/UpdatedTag';
import useUserStore from '@/stores/useUserStore';
import useCommentStore from '@/stores/useCommentStore';
import useInput from '@/hooks/useInput';
import useAsync from '@/hooks/useAsync';
import { getDiffDate } from '@/utils';
import styles from './CommentItem.module.scss';

const cx = classNames.bind(styles);

const CommentItem = ({ id, cardId, columnId, dashboardId }) => {
  useAsync(() => Users.get());
  const { user } = useUserStore();
  const { commentList } = useCommentStore();
  const commentData = commentList.find((comment) => comment.id === id);
  const { author, content, createdAt, updatedAt } = commentData;

  const [isEdit, setIsEdit] = useState(false);
  const { value, setValue, handleValueChange } = useInput({
    content: content,
    cardId: cardId,
    columnId: columnId,
    dashboardId: dashboardId,
  });

  const isCommentValue = !!value?.content?.length;
  const isEditPermission = author?.id === user?.id;
  const isUpdated = dayjs(updatedAt).diff(createdAt) !== 0;

  const handleCommentEdit = () => {
    setIsEdit(true);
  };

  const handleCommentCancel = () => {
    setValue((prev) => ({ ...prev, content: content }));
    setIsEdit(false);
  };

  const handleCommitSubmit = async () => {
    if (isCommentValue) {
      await Comment.edit(id, value);
      await Comment.getList(cardId);
      setIsEdit(false);
    }
    return;
  };

  const handleCommentDelete = async () => {
    await Comment.delete(id);
    await Comment.getList(cardId);
  };

  return (
    <article className={cx('comment')}>
      <div className={cx('comment-avatar')}>
        <Avatar
          profileName={author.nickname}
          profileImage={author.profileImageUrl}
          avatarSize='sm'
        />
      </div>
      <div className={cx('comment-content')}>
        <div className={cx('comment-content-top')}>
          <div className={cx('comment-content-top-header')}>
            <span className={cx('comment-content-top-header-nickname')}>
              {author?.nickname}
            </span>
            <span className={cx('comment-content-top-header-time')}>
              ・{getDiffDate(createdAt)}
            </span>
            {isUpdated && <UpdatedTag />}
          </div>
          <div className={cx('comment-content-main')}>
            {isEdit ? (
              <input
                type='text'
                name='content'
                value={value.content}
                onChange={handleValueChange}
                className={cx('comment-content-main-input', { error: !isCommentValue })}
              />
            ) : (
              <p className={cx('comment-content-main-desc')}>{content}</p>
            )}
          </div>
        </div>

        {isEditPermission ? (
          <div className={cx('comment-content-footer')}>
            {isEdit ? (
              <>
                <button className={cx('btn-cancel')} onClick={handleCommentCancel}>
                  Cancel
                </button>
                <button className={cx('btn-apply')} onClick={handleCommitSubmit}>
                  Apply
                </button>
              </>
            ) : (
              <>
                <button className={cx('btn-edit')} onClick={handleCommentEdit}>
                  Edit
                </button>
                <button className={cx('btn-delete')} onClick={handleCommentDelete}>
                  Delete
                </button>
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
};

export default CommentItem;
