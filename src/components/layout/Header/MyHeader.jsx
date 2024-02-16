import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import ProfileModal from '@/components/common/ProfileModal';
import HeaderButtons from '@/components/HeaderButtons';
import useModalTogglePopup from '@/hooks/useModalTogglePopup';
import { ICON } from '@/constants/importImage';
import styles from './MyHeader.module.scss';
import useAuth from '@/hooks/useAuth';

const cx = classNames.bind(styles);
const { logo } = ICON;

const MyHeader = ({ user }) => {
  useAuth();
  const { isOpen, popupRef, buttonRef, openPopup, closePopup } = useModalTogglePopup();

  return (
    <header className={cx('container')}>
      <Link href={'/mydashboard'}>
        <Image
          className={cx('image')}
          src={logo.url}
          alt={logo.alt}
          width={130}
          height={20}
          priority={true}
          as='image'
        />
      </Link>
      <div className={cx('my-menu')}>
        <HeaderButtons />
        <div ref={buttonRef} onClick={isOpen ? closePopup : openPopup}>
          <div className={cx('sm-hidden', 'cursor')}>
            <Avatar
              userId={user?.id}
              profileName={user?.nickname}
              profileImage={user?.profileImageUrl}
              avatarSize='lg'
              textColor='gray10'
              isArrow={true}
              isOpen={isOpen}
            />
          </div>
          <div className={cx('sm-only', 'cursor')}>
            <Avatar
              userId={user?.id}
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
            userId={user?.id}
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
