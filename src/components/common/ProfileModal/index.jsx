import Link from 'next/link';
import classNames from 'classnames/bind';
import Auth from '@/api/auth';
import Avatar from '@/components/common/Avatar';
import BaseButton from '@/components/common/button/BaseButton';
import useModalState from '@/hooks/useModalState';
import useTogglePopup from '@/hooks/useModalTogglePopup';
import IconModal from '@/components/layout/modal/IconModal';
import { ICON } from '@/constants';
import styles from './ProfileModal.module.scss';

const cx = classNames.bind(styles);

const ProfileModal = ({ userId, profileName, profileImage, profileEmail }) => {
  const { popupRef, buttonRef } = useTogglePopup();

  const { modalState, toggleModal } = useModalState(['logoutmodal']);

  const handleToggleLogouttModal = (e) => {
    e.stopPropagation();
    (() => toggleModal('logoutmodal'))();
    Auth.logout();
  };

  return (
    <div className={cx('container')}>
      <div className={cx('profile')}>
        <Avatar
          userId={userId}
          profileName={profileName}
          profileImage={profileImage}
          avatarSize='xl'
        />
        <span className={cx('name')}>{profileName}</span>
        <span className={cx('email')}>{profileEmail}</span>
      </div>
      <div className={cx('button-wrap')}>
        <Link className={cx('link')} href={'/mypage'}>
          <BaseButton size='xl' variant='outline' type='button' text='My Page' />
        </Link>
        <div
          ref={buttonRef}
          className={cx('link')}
          onClick={() => toggleModal('logoutmodal')}
        >
          <BaseButton size='xl' variant='ghost' type='button' text='Logout' />
        </div>
        <div ref={popupRef}>
          <IconModal
            isModalOpen={modalState.logoutmodal}
            closeModal={() => toggleModal('logoutmodal')}
            iconSize={58}
            title='Logout'
            desc='Are you sure you want to logout?'
            iconName={ICON.logout.default}
          >
            <div className={cx('modal-buttons')}>
              <button
                type='button'
                onClick={() => toggleModal('logoutmodal')}
                className={cx('modal-buttons-cancel')}
              >
                Stay
              </button>
              <button
                type='button'
                onClick={handleToggleLogouttModal}
                className={cx('modal-buttons-logout')}
              >
                Log me out
              </button>
            </div>
          </IconModal>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
