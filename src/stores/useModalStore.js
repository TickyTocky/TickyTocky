import { create } from 'zustand';

const useModalStore = create((set) => {
  return {
    isCommonModalOpened: false,
    isIconModalOpened: false,
    isCardModalOpened: false,

    openCommonModal: () => {
      set({ isCommonModalOpened: true });
    },
    closeCommonModal: () => {
      set({ isCommonModalOpened: false });
    },
    openIconModal: () => {
      set({ isIconModalOpened: true });
    },
    closeIconModal: () => {
      set({ isIconModalOpened: false });
    },
    openCardModal: () => {
      set({ isCardModalOpened: true });
    },
    closeCardModal: () => {
      set({ isCardModalOpened: false });
    },
  };
});

export default useModalStore;
