import useCommentStore from '@/stores/useCommentStore';

const useCommentFetchData = ({ id }) => {
  const { commentList } = useCommentStore();
  const commentData = commentList.find((comment) => comment.id === id);

  return { commentData };
};

export default useCommentFetchData;
