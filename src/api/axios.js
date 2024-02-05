import axios from 'axios';
import LocalStorage from '@/services/localStorage';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = LocalStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (e) => {
    Promise.reject(e);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (e) => Promise.reject(e)
);
export default instance;
