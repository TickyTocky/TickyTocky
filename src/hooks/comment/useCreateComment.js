import Comment from '@/api/comments';

const useCreateComment = ({ cardId, columnId, dashboardId, reset }) => {
  const onSubmit = async (data) => {
    let submitData = {
      ...data,
      cardId,
      columnId,
      dashboardId,
    };

    await Comment.create(submitData);
    reset({ content: '' });
    await Comment.getList(cardId);
  };

  return { onSubmit };
};

export default useCreateComment;
