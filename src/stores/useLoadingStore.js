import create from 'zustand';

const useLoadingStore = create((set) => ({
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
}));

export default useLoadingStore;
