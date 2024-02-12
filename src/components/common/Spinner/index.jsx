import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Spinner.module.scss';
import { ICON } from '@/constants/importImage';

const { reset } = ICON;
const cx = classNames.bind(styles);

const Spinner = () => (
  <div className={cx('spinner')}>
    <Image fill src={reset.url} alt={reset.alt} sizes='100%' priority />
  </div>
);

export default Spinner;
