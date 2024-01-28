import React from 'react';
import Link from 'next/link';

import styles from './AuthForm.module.scss';
import classNames from 'classnames/bind';

import InputField from '@/components/common/InputField';
import FormHeader from '@/components/auth/common/FormHeader';

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
          <InputField label='Email' name='email' type='email' placeholder='Email' />
          <InputField
            label='Nickname'
            name='nickname'
            type='text'
            placeholder='Nickname'
          />
          <InputField
            label='Password'
            name='password'
            type='password'
            placeholder='Password'
            maxLength={15}
          />
          <InputField
            label='Password Confirm'
            name='passwordConfirm'
            type='password'
            placeholder='Password Confirm'
            maxLength={15}
          />
          <button type='submit' className={cx('btn-signup')}>
            Sign up
          </button>
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
