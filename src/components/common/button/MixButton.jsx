import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './IconButton.module.scss';

const cx = classNames.bind(styles);

const MixButton = ({
  svg,
  alt,
  reverse,
  size = 24,
  type = 'button',
  gap = 4,
  text = 'Button',
  fontSize = 14,
  ...props
}) => (
  <button type={type} className={cx('mix-btn', `mix-btn-${gap}`)} {...props}>
    {reverse && <span className={cx(`mix-text-${fontSize}`)}>{text}</span>}
    <div className={cx(`mix-box-${size}`)}>
      <Image src={svg} alt={alt} className={cx('mix-fit')} />
    </div>
    {!reverse && <span className={cx(`mix-text-${fontSize}`)}>{text}</span>}
  </button>
);

export default MixButton;
