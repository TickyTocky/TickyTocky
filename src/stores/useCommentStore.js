import { create } from 'zustand';

const useCommentStore = create(() => ({
  commentList: null,
}));

export default useCommentStore;
