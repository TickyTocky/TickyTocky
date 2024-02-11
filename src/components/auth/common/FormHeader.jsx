import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './FormHeader.module.scss';

const cx = classNames.bind(styles);
const { logo } = ICON;

const FormHeader = () => (
  <header className={cx('login-header')}>
    <h1 className={cx('login-header-title')}>
      <Link href={'/'}>
        <Image
          src={logo.url}
          alt={logo.alt}
          width={257}
          height={40}
          priority={true}
          as='image'
        ></Image>
      </Link>
    </h1>
    <p className={cx('login-header-desc')}>Manage your projects more powerful</p>
  </header>
);

export default FormHeader;
