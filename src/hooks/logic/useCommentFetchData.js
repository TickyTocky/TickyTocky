import useCommentStore from '@/stores/useCommentStore';

const useCommentFetchData = ({ id }) => {
  const { commentList } = useCommentStore();
  const commentData = commentList.find((comment) => comment.id === id);
  const { author, content, createdAt, updatedAt } = commentData;

  return { author, content, createdAt, updatedAt };
};

export default useCommentFetchData;
