import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './Breadcrumb.module.scss';

const cx = classNames.bind(styles);
const { arrowRight, nav } = ICON;

const Breadcrumb = ({ title }) => (
  <div className={cx('container')}>
    <Image src={nav.default.url} alt={nav.default.alt} width={24} height={24} />
    <span className={cx('previous')}>Dash Boards</span>
    <Image
      src={arrowRight.default.url}
      alt={arrowRight.default.alt}
      width={24}
      height={24}
    />
    <span className={cx('current')}>{title}</span>
  </div>
);

export default Breadcrumb;
