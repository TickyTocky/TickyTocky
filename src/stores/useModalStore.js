import { create } from 'zustand';

const useModalStore = create((set) => ({
  isCommonModalOpen: false,
  isIconModalOpen: false,

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
}));

export default useModalStore;
