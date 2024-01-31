import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import InputField from '@/components/common/InputField';
import FormHeader from '@/components/auth/common/FormHeader';
import BaseButton from '@/components/common/button/BaseButton';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

const AuthForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx('login')}>
      <fieldset>
        <legend className='visually-hidden'>Login TickyTocky Account</legend>
        <FormHeader />
        <form className={cx('login-form')} onSubmit={handleSubmit}>
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
          <BaseButton
            style={{ marginTop: '0.8rem' }}
            type='submit'
            size='xl'
            variant='primary'
            text='Sign up'
          />
        </form>
        <div className={cx('login-info')}>
          <p className={cx('login-info-desc')}>Do you have an account?</p>
          <Link href={'/login'}>
            <button className={cx('btn-login')}>Log in</button>
          </Link>
        </div>
      </fieldset>
    </div>
  );
};

export default AuthForm;
