import instance from './axios';
import { router } from 'next/router';
import LocalStorage from '@/services/localStorage';
import getUserStore from '@/stores/getUser';

const createAuthentication = () => ({
  login: (credential) => instance.post('/auth/login', credential),
  signup: (userInfo) => instance.post('/users', userInfo),
  logout: () => {
    LocalStorage.removeItem('accessToken');
    router.push('/login');
  },
  getUser: async () => {
    try {
      const getData = await instance.get('/users/me');
      getUserStore.setState((state) => ({
        ...state,
        user: getData.data,
      }));
    } catch (error) {
      console.error(error);
    }
  },
});

const authentication = createAuthentication();

export default authentication;
