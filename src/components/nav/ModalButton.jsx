import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from '@/components/nav/navButton.module.scss';

const cx = classNames.bind(styles);

const ModalButton = ({ type, onClickInput }) => {
  return (
    <button
      className={cx('modal-button-wrapper', { logout: type === 'logout' })}
      onClick={onClickInput}
    >
      {type === 'add' && (
        <Image
          src={ICON.add.active.url}
          alt={ICON.add.active.alt}
          width={24}
          height={24}
        />
      )}
      {type === 'logout' && (
        <Image
          src={ICON.logout.default.url}
          alt={ICON.logout.default.alt}
          width={24}
          height={24}
          onMouseOver={(e) => {
            return (e.currentTarget.src = ICON.logout.hover.src);
          }}
          onMouseOut={(e) => {
            return (e.currentTarget.src = ICON.logout.default.src);
          }}
        />
      )}
    </button>
  );
};

export default ModalButton;
