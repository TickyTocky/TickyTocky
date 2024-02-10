import Link from 'next/link';
import classNames from 'classnames/bind';
import Auth from '@/api/auth';
import Avatar from '@/components/common/Avatar';
import BaseButton from '@/components/common/button/BaseButton';
import styles from './ProfileModal.module.scss';

const cx = classNames.bind(styles);

const ProfileModal = ({ profileName, profileImage, profileEmail }) => (
  <div className={cx('container')}>
    <div className={cx('profile')}>
      <Avatar profileName={profileName} profileImage={profileImage} avatarSize='xl' />
      <span className={cx('name')}>{profileName}</span>
      <span className={cx('email')}>{profileEmail}</span>
    </div>
    <div className={cx('button-wrap')}>
      <Link className={cx('link')} href={'/mypage'}>
        <BaseButton size='xl' variant='outline' type='button' text='My Page' />
      </Link>
      <div className={cx('link')} onClick={() => Auth.logout()}>
        <BaseButton size='xl' variant='ghost' type='button' text='Logout' />
      </div>
    </div>
  </div>
);

export default ProfileModal;
