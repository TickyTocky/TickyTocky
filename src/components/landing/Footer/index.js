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
        <Link href='https://github.com/TickyTocky' target='_blank'>
          <Image
            src={landing.github.url}
            width={25}
            height={25}
            alt={landing.github.alt}
          />
        </Link>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
