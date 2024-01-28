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
            label='Password'
            name='password'
            type='password'
            placeholder='Password'
            maxLength={15}
          />
          <button type='submit' className={cx('btn-login')}>
            Login
          </button>
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
