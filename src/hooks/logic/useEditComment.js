import { useState } from 'react';
import Comment from '@/api/comments';

const useEditComment = ({ id, cardId, setValue, value, content, isCommentValue }) => {
  const [isEdit, setIsEdit] = useState(false);

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

  return {
    isEdit,
    handleCommentEdit,
    handleCommentCancel,
    handleCommitSubmit,
    handleCommentDelete,
  };
};

export default useEditComment;
