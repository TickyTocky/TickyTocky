import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from '@/components/Layout/Modal/modal.module.scss';

const cx = classNames.bind(styles);

const CommonModal = ({ size = '', label = '', isCommonModalOpened, children }) => {
  return (
    <ReactModal
      isOpen={isCommonModalOpened}
      className={cx('common-modal-container', {
        'common-modal-lg': size === 'lg',
      })}
      overlayClassName={cx('modal-overlay')}
    >
      <label className={cx('label')}>{label}</label>
      {children}
    </ReactModal>
  );
};

export default CommonModal;
