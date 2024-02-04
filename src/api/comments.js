import useCommentStore from '@/stores/useCommentStore';
import { COMMENT_API } from '@/constants';
import instance from './axios';

const Comment = {
  create: (value) => instance.post(COMMENT_API, value),
  getList: async (cardId) => {
    const res = await instance.get(COMMENT_API, { size: 10, params: { cardId } });
    if (res.status === 200) {
      useCommentStore.setState((prev) => ({ ...prev, commentList: res.data.comments }));
      return res;
    }
  },
  edit: (commentId, value) => instance.put(`${COMMENT_API}/${commentId}`, value),
  delete: (commentId) => instance.delete(`${COMMENT_API}/${commentId}`),
};

export default Comment;
