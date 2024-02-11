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
    Auth.signup(data, setError);
  };

  return (
    <div className={cx('signup')}>
      <fieldset>
        <legend className='visually-hidden'>Login TickyTocky Account</legend>
        <FormHeader />
        <form className={cx('signup-form')} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label='Email'
            name='email'
            type='email'
            placeholder='Email'
            autoComplete='email'
          />
          <InputField
            label='Nickname'
            name='nickname'
            type='text'
            placeholder='Nickname'
            autoComplete='off'
            maxLength={10}
          />
          <InputField
            label='Password'
            name='password'
            type='password'
            placeholder='Password'
            maxLength={15}
            autoComplete='new-password'
          />
          <InputField
            label='Password Confirm'
            name='passwordConfirm'
            type='password'
            placeholder='Password Confirm'
            maxLength={15}
            autoComplete='off'
          />
          <div className={cx('signup-btn-box')}>
            <BaseButton type='submit' size='xl' variant='primary' text='Sign up' />
          </div>
        </form>
        <div className={cx('signup-info')}>
          <p className={cx('signup-info-desc')}>Do you have an account?</p>
          <Link href={'/login'}>
            <button className={cx('btn-login')}>Log in</button>
          </Link>
        </div>
      </fieldset>
    </div>
  );
};

export default AuthForm;
