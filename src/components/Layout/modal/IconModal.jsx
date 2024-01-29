import Image from 'next/image';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

const IconModal = ({ isModalOpen, closeModal, iconName, iconSize, info, children }) => (
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
          <span className={cx('span-lg')}>{info.title}</span>
          <span className={cx('span-sm')}>{info.desc}</span>
        </div>
      </div>
      {children}
    </div>
  </ReactModal>
);

export default IconModal;
