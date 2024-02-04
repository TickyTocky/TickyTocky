import { create } from 'zustand';

const useCardStore = create(() => ({
  cardList: null,
  card: null,
  totalCount: 0,
}));

export default useCardStore;
