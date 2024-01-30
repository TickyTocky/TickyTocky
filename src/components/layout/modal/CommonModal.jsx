import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

const CommonModal = ({
  isModalOpen,
  closeModal,
  children,
  label = '',
  isDetail = false,
  detailInfo = { columnTitle: 'To do', cardTitle: 'Side Project - Taskify' },
}) => (
  <ReactModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    shouldCloseOnOverlayClick={true}
    className={cx('common-modal-container')}
    overlayClassName={cx('modal-overlay')}
    contentLabel='common-modal'
  >
    {isDetail ? (
      <div className={cx('modal-header-container')}>
        <div className={cx('title-container')}>
          <div className={cx('column-title')}>{detailInfo.columnTitle}</div>
          <div className={cx('card-title')}>{detailInfo.cardTitle}</div>
        </div>
        <div>케밥버튼</div>
      </div>
    ) : (
      <label className={cx('label')}>{label}</label>
    )}
    {children}
  </ReactModal>
);

export default CommonModal;
