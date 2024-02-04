export const INIT_COMMENT_DATA = {
  id: 0,
  content: '',
  createdAt: '',
  updatedAt: '',
  cardId: 0,
  author: {
    profileImageUrl: '',
    nickname: '',
    id: 0,
  },
};

export const INIT_COMMENTS_DATA = {
  cursorId: 0,
  comments: [{ ...INIT_COMMENT_DATA }],
};
