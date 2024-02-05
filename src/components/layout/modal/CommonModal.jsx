import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import KebabDropDown from '@/components/common/KebabDropDown';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const CommonModal = ({
  onClickInput,
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
    bodyOpenClassName={cx('body-open')}
  >
    {isDetail ? (
      <div className={cx('modal-header-container')}>
        <div className={cx('title-container')}>
          <div className={cx('column-title')}>{detailInfo.columnTitle}</div>
          <div className={cx('card-title')}>{detailInfo.cardTitle}</div>
        </div>
        <div className={cx('dropdown')}>
          <KebabDropDown onClickInput={onClickInput} />
        </div>
      </div>
    ) : (
      <label className={cx('label')}>{label}</label>
    )}
    {children}
  </ReactModal>
);

export default CommonModal;
