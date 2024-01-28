import Image from 'next/image';
import styles from '@/components/common/button/iconButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const IconButton = ({ type = 'button', svg, size, alt, outline, isActive, ...props }) => {
  console.log(isActive === true);

  return (
    /*TODO 모바일 사이즈 일때 hover 없애기*/
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
