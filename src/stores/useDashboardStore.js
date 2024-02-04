import { create } from 'zustand';

const useDashBoardsStore = create(() => ({
  dashboard: null,
  dashboardList: null,
  invitationList: null,
}));

export default useDashBoardsStore;
