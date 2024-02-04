import { create } from 'zustand';

const useMemberStore = create(() => ({
  memberList: null,
}));

export default useMemberStore;
