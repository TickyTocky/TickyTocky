import { create } from 'zustand';

const getUserStore = create(() => ({
  user: null,
}));

export default getUserStore;
