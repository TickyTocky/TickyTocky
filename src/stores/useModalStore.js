import { create } from 'zustand';

const useModalStore = create((set) => ({
  isCommonModalOpen: false,
  isIconModalOpen: false,
  isThirdModalOpen: false,

  openCommonModal: () => {
    set({ isCommonModalOpen: true });
  },
  closeCommonModal: () => {
    set({ isCommonModalOpen: false });
  },
  openIconModal: () => {
    set({ isIconModalOpen: true });
  },
  closeIconModal: () => {
    set({ isIconModalOpen: false });
  },
  openThirdModal: () => {
    set({ isThirdModalOpen: true });
  },
  closeThirdModal: () => {
    set({ isThirdModalOpen: false });
  },
}));

export default useModalStore;
