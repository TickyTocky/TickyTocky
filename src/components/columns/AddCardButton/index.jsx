import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './AddCardButton.module.scss';

const cx = classNames.bind(styles);
const { add } = ICON;

const AddCardButton = () => (
  <>
    <button className={cx('container')}>
      <Image src={add.active.url} alt={add.active.alt} width={24} height={24} />
      <span className={cx('text')}>Add Card</span>
    </button>
  </>
);

export default AddCardButton;
