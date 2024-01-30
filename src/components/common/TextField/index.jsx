import Image from 'next/image';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import { ICON } from '@/constants';
import styles from './TextField.module.scss';

const cx = classNames.bind(styles);
const { reset } = ICON;

const TextField = ({ name, ...props }) => {
  const { register } = useFormContext();

  return (
    <form className={cx('comment')}>
      <textarea
        {...register(name)}
        {...props}
        className={cx('comment-textarea')}
      ></textarea>
      <div className={cx('comment-footer')}>
        <button type='reset' className={cx('comment-footer-btn-reset')}>
          <Image src={reset.url} alt={reset.alt} width={24} height={24}></Image>
        </button>
        <button type='submit' className={cx('comment-footer-btn-submit')}>
          Send
        </button>
      </div>
    </form>
  );
};

export default TextField;
