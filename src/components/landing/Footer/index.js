import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './LandingFooter.module.scss';

const cx = classNames.bind(styles);
const { landing } = ICON;

const LandingFooter = () => (
  <footer className={cx('landing-footer')}>
    <div className={cx('landing-footer-body')}>
      <span>©TickyTocky - 2024</span>
      <div className={cx('landing-footer-policy')}>
        <span>Privacy Policy</span>
        <span>FAQ</span>
      </div>
      <div className={cx('landing-footer-links')}>
        <Link href='https://gmail.com/' target='_blank'>
          <Image src={landing.email.url} width={20} height={20} alt={landing.email.alt} />
        </Link>
        <Link href='https://www.facebook.com/' target='_blank'>
          <Image
            src={landing.facebook.url}
            width={22}
            height={22}
            alt={landing.facebook.alt}
          />
        </Link>
        <Link href='https://www.instagram.com/' target='_blank'>
          <Image
            src={landing.instagram.url}
            width={22}
            height={22}
            alt={landing.instagram.alt}
          />
        </Link>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
