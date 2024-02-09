import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import ProfileModal from '@/components/common/ProfileModal';
import HeaderButtons from '@/components/HeaderButtons';
import useTogglePopup from '@/hooks/useTogglePopup';
import { ICON } from '@/constants/importImage';
import styles from './MyHeader.module.scss';

const cx = classNames.bind(styles);
const { logo } = ICON;

const MyHeader = ({ user }) => {
  const { isOpen, popupRef, buttonRef, openPopup, closePopup } = useTogglePopup();

  return (
    <header className={cx('container')}>
      <Link href={'/'}>
        <Image
          className={cx('image')}
          src={logo.url}
          alt={logo.alt}
          width={130}
          height={20}
        />
      </Link>
      <div className={cx('my-menu')}>
        <HeaderButtons />
        <div ref={buttonRef} onClick={isOpen ? closePopup : openPopup}>
          <div className={cx('sm-hidden')}>
            <Avatar
              profileName={user?.nickname}
              profileImage={user?.profileImageUrl}
              avatarSize='lg'
              textColor='gray10'
              isArrow={true}
              isOpen={isOpen}
            />
          </div>
          <div className={cx('sm-profile', 'sm-only')}>
            <Avatar
              profileName={user?.nickname}
              profileImage={user?.profileImageUrl}
              avatarSize='lg'
              isOpen={isOpen}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={cx('profile-modal')} ref={popupRef}>
          <ProfileModal
            profileName={user?.nickname}
            profileImage={user?.profileImageUrl}
            profileEmail={user?.email}
          />
        </div>
      )}
    </header>
  );
};

export default MyHeader;
