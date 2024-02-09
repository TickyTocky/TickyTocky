import useMemberStore from '@/stores/useMemberStore';
import { MEMBER_API } from '@/constants';
import instance from './axios';

const Members = {
  getList: async (page, size, dashboardId) => {
    const res = await instance.get(MEMBER_API, { params: { page, size, dashboardId } });
    if (res.status === 200) {
      useMemberStore.setState((prev) => ({ ...prev, memberList: res.data.members }));
      return res;
    }
  },
  delete: (memberId) => instance.delete(`${MEMBER_API}/${memberId}`),
};

export default Members;
