import Image from 'next/image';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const IconModal = ({
  isModalOpen,
  closeModal,
  iconName,
  iconSize,
  title,
  children,
  desc = null,
}) => (
  <ReactModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    shouldCloseOnOverlayClick={true}
    className={cx('icon-modal-container')}
    overlayClassName={cx('icon-modal-overlay')}
    contentLabel='icon-modal'
  >
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Image src={iconName.url} alt={iconName.alt} width={iconSize} height={iconSize} />
        <div className={cx('span-container')}>
          <span className={cx('span-lg')}>{title}</span>
          <span className={cx('span-sm')}>{desc}</span>
        </div>
      </div>
      {children}
    </div>
  </ReactModal>
);

export default IconModal;
