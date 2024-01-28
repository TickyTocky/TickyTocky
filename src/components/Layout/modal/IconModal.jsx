import Image from 'next/image';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from '@/components/Layout/Modal/modal.module.scss';
import { Icon } from '@/constants/importImage';

const cx = classNames.bind(styles);

const IconModal = ({ type, isIconModalOpened, children }) => {
  return (
    <ReactModal
      isOpen={isIconModalOpened}
      className={cx('icon-modal-container')}
      overlayClassName={cx('icon-modal-overlay')}
      contentLabel='icon-modal'
    >
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          {type === 'delete' && (
            <Image src={Icon.delete.url} alt={Icon.delete.alt} width={58} height={58} />
          )}
          {type === 'logout' && (
            <Image src={Icon.logout.url} alt={Icon.logout.alt} width={48} height={48} />
          )}
          <div className={cx('span-container')}>
            <span className={cx('span-lg')}>Are you sure</span>
            <span className={cx('span-sm')}>
              {type === 'delete' && 'You wanna delete this?'}
              {type === 'logout' && 'You wanna logout?'}
            </span>
          </div>
        </div>
        {children}
      </div>
    </ReactModal>
  );
};

export default IconModal;
