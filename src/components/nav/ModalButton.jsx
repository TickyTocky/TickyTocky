import Image from 'next/image';
import classNames from 'classnames/bind';
import { Icon } from '@/constants/importImage';
import styles from '@/components/nav/navButton.module.scss';

const cx = classNames.bind(styles);

const ModalButton = ({ type, onClickInput }) => {
  return (
    <button
      className={cx('modal-btn-wrapper', { logout: type === 'logout' })}
      onClick={onClickInput}
    >
      {type === 'add' && (
        <Image
          src={Icon.add.active.url}
          alt={Icon.add.active.alt}
          width={24}
          height={24}
        />
      )}
      {type === 'logout' && (
        <Image
          src={Icon.logout.default.url}
          alt={Icon.logout.default.alt}
          width={24}
          height={24}
          onMouseOver={(e) => {
            return (e.currentTarget.src = Icon.logout.hover.src);
          }}
          onMouseOut={(e) => {
            return (e.currentTarget.src = Icon.logout.default.src);
          }}
        />
      )}
    </button>
  );
};

export default ModalButton;
