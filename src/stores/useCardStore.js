import { create } from 'zustand';

const useCardStore = create(() => ({
  cardList: [],
  card: {},
  totalCount: 0,
}));

export default useCardStore;
