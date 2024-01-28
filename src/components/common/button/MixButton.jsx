import styles from '@/components/common/button/iconButton.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cx = classNames.bind(styles);

const MixButton = ({
  svg,
  text = 'Invite',
  size = 24,
  alt,
  type = 'button',
  gap = 4,
  fontSize = 14,
  reverse,
  ...props
}) => {
  return (
    <button type={type} className={cx('mix-btn', `mix-btn-${gap}`)} {...props}>
      {reverse && <span className={cx(`mix-text-${fontSize}`)}>{text}</span>}
      <div className={cx(`mix-box-${size}`)}>
        <Image src={svg} alt={alt} className={cx('mix-fit')} />
      </div>
      {!reverse && <span className={cx(`mix-text-${fontSize}`)}>{text}</span>}
    </button>
  );
};

export default MixButton;
