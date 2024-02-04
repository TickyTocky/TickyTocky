import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import LinkButton from '@/components/common/button/LinkButton';
import styles from './LandingNav.module.scss';

const cx = classNames.bind(styles);
const { logo } = ICON;

const LandingNav = () => (
  <nav className={cx('landing-nav')}>
    <Link href='/'>
      <Image src={logo.url} alt={logo.alt} priority={true} width={153} height={24} />
    </Link>
    <div className={cx('landing-nav-login')}>
      <LinkButton
        path='/login'
        buttonType='base'
        size='lg'
        variant='primary'
        type='button'
        text='sign in'
      />
      <LinkButton
        path='/signup'
        buttonType='base'
        size='lg'
        variant='outline'
        type='button'
        text='sign up'
      />
    </div>
  </nav>
);

export default LandingNav;
