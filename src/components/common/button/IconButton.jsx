import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './iconButton.module.scss';

const cx = classNames.bind(styles);

const IconButton = ({ svg, size, alt, outline, isActive, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      className={cx(
        'ic-btn',
        `ic-btn-${size}`,
        { 'ic-btn-outline': outline },
        { 'ic-btn-outline-active': outline && isActive === true }
      )}
      {...props}
    >
      <div className={cx('ic-box')}>
        <Image src={svg} alt={alt} className={cx('ic-fit')} />
      </div>
    </button>
  );
};

export default IconButton;
