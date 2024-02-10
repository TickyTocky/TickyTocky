import { create } from 'zustand';

const useDashBoardStore = create(() => ({
  dashboard: null,
  dashboardList: null,
  invitationList: null,
}));

export default useDashBoardStore;
