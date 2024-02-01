import authentication from '@/api/authentications';
import LocalStorage from '@/services/localStorage';
import router from 'next/router';
import { USER_INPUT_VALIDATION } from '@/constants';

const { email, password } = USER_INPUT_VALIDATION;

const auth = async (authenticationType, values, setError) => {
  try {
    const response = await authentication[authenticationType](values);

    if (response.status === 201) {
      LocalStorage.setItem('accessToken', response.data.accessToken);

      if (authenticationType === 'login') {
        authentication.getUser();
      }
      router.replace('/dashboard');
    }
    if (authenticationType === 'signup') {
      router.push('/login');
    }
  } catch (e) {
    if (authenticationType === 'login') {
      setError('email', { message: email.errorMessage.check });
      setError('password', { message: password.errorMessage.check });
    }
    if (authenticationType === 'signup') {
      setError('email', { message: email.errorMessage.confirm });
    }
  }
};

export default auth;
