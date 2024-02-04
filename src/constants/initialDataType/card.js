export const INIT_CARD_DATA = {
  id: 0,
  title: '',
  description: '',
  tags: [''],
  dueDate: '',
  assignee: {
    profileImageUrl: '',
    nickname: '',
    id: 0,
  },
  imageUrl: '',
  teamId: '',
  columnId: 0,
  createdAt: '',
  updatedAt: '',
};

export const INIT_CARDS_DATA = {
  cursorId: 0,
  totalCount: 0,
  cards: [{ ...INIT_CARD_DATA }],
};
