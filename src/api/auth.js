import Router from 'next/router';
import LocalStorage from '@/services/localStorage';
import { AUTH_API, USER_API, USER_INPUT_VALIDATION } from '@/constants';
import useUserStore from '@/stores/useUserStore';
import instance from './axios';

const { email, password } = USER_INPUT_VALIDATION;

const redirectTo = (path) => {
  Router.push(path);
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
  signout: () => {
    useUserStore.setState({ user: null });
    LocalStorage.removeItem('accessToken');
  },
  changePassword: (value) => instance.put(`${AUTH_API}/password`, value),
};

export default Auth;
