import Router from 'next/router';
import LocalStorage from '@/services/localStorage';
import useUserStore from '@/stores/useUserStore';
import { AUTH_API, USER_API, USER_INPUT_VALIDATION } from '@/constants';
import instance from './axios';

const { email, password } = USER_INPUT_VALIDATION;

export const redirectTo = (path) => {
  Router.push(path);
};

export const replaceTo = (path) => {
  Router.replace(path);
};

const Auth = {
  signup: async (value, setError) => {
    try {
      const res = await instance.post(USER_API, value);
      if (res.status === 201) {
        redirectTo('/login');
      }
    } catch (e) {
      if (e.response.status === 409) {
        setError('email', { message: email.errorMessage.confirm });
      }
    }
  },
  login: async (value, setError) => {
    try {
      const res = await instance.post(`${AUTH_API}/login`, value);
      if (res.data.accessToken) {
        LocalStorage.setItem('accessToken', res.data.accessToken);
        redirectTo('/mydashboard');
        useUserStore.setState({ user: res.data });
      }
    } catch (e) {
      if (e.response.status === 400 || e.response.status === 404) {
        setError('email', { message: email.errorMessage.check });
        setError('password', { message: password.errorMessage.check });
      }
    }
  },
  logout: () => {
    useUserStore.setState({ user: null });
    LocalStorage.removeItem('accessToken');
    replaceTo('/login');
  },
  changePassword: async (value, setError, reset) => {
    try {
      const res = await instance.put(`${AUTH_API}/password`, value);
      if (res.status === 204) {
        reset();
        return res;
      }
    } catch (e) {
      if (e.response.status === 400) {
        setError('password', { message: password.errorMessage.checkPassword });
      }
    }
  },
};

export default Auth;
