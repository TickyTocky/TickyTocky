import useDashBoardStore from '@/stores/useDashboardStore';
import { DASHBOARD_API, INVITATION_API } from '@/constants';
import instance from './axios';

const Dashboard = {
  create: (value) => instance.post(`${DASHBOARD_API}`, value),
  get: async (dashboardId) => {
    const res = await instance.get(`${DASHBOARD_API}/${dashboardId}`);
    if (res.status === 200) {
      useDashBoardStore.setState((prev) => ({ ...prev, dashboard: res.data }));
      return res;
    }
  },
  getList: async (navigationMethod, page, size) => {
    const res = await instance.get(DASHBOARD_API, {
      params: { navigationMethod, page, size },
    });
    if (res.status === 200) {
      useDashBoardStore.setState((prev) => ({
        ...prev,
        dashboardList: res.data.dashboards,
      }));
      return res;
    }
  },
  edit: (dashboardId, value) => instance.put(`${DASHBOARD_API}/${dashboardId}`, value),
  delete: (dashboardId) => instance.delete(`${DASHBOARD_API}/${dashboardId}`),
  invite: (dashboardId, value) =>
    instance.post(`${DASHBOARD_API}/${dashboardId}${INVITATION_API}`, value),
  getInvite: async (dashboardId) => {
    const res = await instance.get(`${DASHBOARD_API}/${dashboardId}${INVITATION_API}`, {
      params: { page: 1, size: 100 },
    });
    if (res.status === 200) {
      useDashBoardStore.setState((prev) => ({
        ...prev,
        invitationList: res.data.invitations,
      }));
      return res;
    }
  },
  deleteInvite: (dashboardId, invitaionId) =>
    instance.delete(`${DASHBOARD_API}/${dashboardId}${INVITATION_API}/${invitaionId}`),
};

export default Dashboard;
