import { create } from 'zustand';

const useColumnStore = create(() => ({
  columnList: null,
}));

export default useColumnStore;
