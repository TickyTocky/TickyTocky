import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants';
import styles from './LandingHeader.module.scss';

const cx = classNames.bind(styles);
const { background } = ICON;

const LandingHeader = () => (
  <header className={cx('landing-header')}>
    <div className={cx('landing-header-background')}>
      <Image
        src={background.header.url}
        alt={background.header.alt}
        priority={true}
        fill
        sizes='100%'
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className={cx('landing-header-body')}>
      <div>
        <p>The Smartest Way</p>
        <p>To Manage Projects</p>
        <p>With Your Team</p>
      </div>
    </div>
  </header>
);

export default LandingHeader;
