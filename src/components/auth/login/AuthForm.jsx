import Link from 'next/link';
import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';
import InputField from '@/components/common/InputField';
import FormHeader from '@/components/auth/common/FormHeader';
import BaseButton from '@/components/common/button/BaseButton';
import styles from './AuthForm.module.scss';
import Auth from '@/api/auth';

const cx = classNames.bind(styles);

const AuthForm = () => {
  const { handleSubmit, setError } = useFormContext();

  const onSubmit = (data) => {
    Auth.login(data, setError);
  };

  return (
    <div className={cx('login')}>
      <fieldset>
        <legend className='visually-hidden'>Login TickyTocky Account</legend>
        <FormHeader />
        <form className={cx('login-form')} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label='Email'
            name='email'
            type='email'
            placeholder='Email'
            autoComplete='email'
          />
          <InputField
            label='Password'
            name='password'
            type='password'
            placeholder='Password'
            maxLength={15}
            autoComplete='current-password'
          />
          <div className={cx('login-btn-box')}>
            <BaseButton type='submit' size='xl' variant='primary' text='Login' />
          </div>
        </form>
        <div className={cx('login-info')}>
          <p className={cx('login-info-desc')}>Don’t have an account?</p>
          <Link href={'/signup'}>
            <button className={cx('btn-signup')}>Sign up</button>
          </Link>
        </div>
      </fieldset>
    </div>
  );
};

export default AuthForm;
