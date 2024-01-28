import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from '@/components/Layout/Modal/modal.module.scss';

const cx = classNames.bind(styles);

const CardModal = ({ isCardModalOpened, children }) => {
  return (
    <ReactModal
      isOpen={isCardModalOpened}
      className={cx('card-modal-container')}
      overlayClassName={cx('modal-overlay')}
    >
      <div className={cx('wrapper')}>{children}</div>
    </ReactModal>
  );
};

export default CardModal;
