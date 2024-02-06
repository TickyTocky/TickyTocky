import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './LandingNav.module.scss';

const cx = classNames.bind(styles);
const { logo } = ICON;

const LandingNav = () => (
  <nav className={cx('landing-nav')}>
    <Link href='/login'>
      <Image src={logo.url} alt={logo.alt} priority={true} width={153} height={24} />
    </Link>
    <div className={cx('landing-nav-login')}>
      <Link href='/login'>
        <button type='button' className={cx('landing-nav-loginbutton')}>
          Signin
        </button>
      </Link>
      <Link href='/signup'>
        <button type='button' className={cx('landing-nav-signupbutton')}>
          Signup
        </button>
      </Link>
    </div>
  </nav>
);

export default LandingNav;
