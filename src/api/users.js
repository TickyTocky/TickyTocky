import useUserStore from '@/stores/useUserStore';
import { USER_API } from '@/constants';
import instance from './axios';

const Users = {
  get: async () => {
    const res = await instance.get(`${USER_API}/me`);
    if (res.status === 200) {
      useUserStore.setState((prev) => ({ ...prev, user: res.data }));
      return res;
    }
  },
  edit: async (value) => {
    const res = await instance.put(`${USER_API}/me`, value);
    if (res.status === 200) {
      useUserStore.setState((prev) => ({ ...prev.user, user: res.data }));
      return res;
    }
  },

  addProfileImage: async (value) => {
    const formData = new FormData();
    formData.append('image', value);
    const res = await instance.post(`${USER_API}/me/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.status === 201) {
      return res.data;
    }
  },
};

export default Users;
