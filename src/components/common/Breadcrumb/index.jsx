import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './Breadcrumb.module.scss';

const cx = classNames.bind(styles);

const Breadcrumb = ({ title }) => (
  <div className={cx('container')}>
    <Image src={ICON.nav.default.url} alt={ICON.nav.default.alt} width={24} height={24} />
    <span className={cx('previous')}>Dash Boards</span>
    <Image
      src={ICON.arrow.right.url}
      alt={ICON.arrow.right.alt}
      width={24}
      height={24}
    ></Image>
    <span className={cx('current')}>{title}</span>
  </div>
);

export default Breadcrumb;
