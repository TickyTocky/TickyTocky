import { create } from 'zustand';

const useInvitationStore = create(() => ({
  invitationList: null,
  searchResult: null,
}));

export default useInvitationStore;
