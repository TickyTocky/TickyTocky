import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import BaseButton from '@/components/common/button/BaseButton';
import styles from './ProfileModal.module.scss';

const cx = classNames.bind(styles);

const ProfileModal = ({ profileName, profileImage, profileEmail }) => (
  <div className={cx('container')}>
    <div className={cx('profile')}>
      <Avatar profileImage={profileImage} avatarSize='xl' />
      <span className={cx('name')}>{profileName}</span>
      <span className={cx('email')}>{profileEmail}</span>
    </div>
    <div className={cx('button-wrap')}>
      <BaseButton size='xl' variant='outline' type='button' text='My Page' />
      <BaseButton size='xl' variant='ghost' type='button' text='Logout' />
    </div>
  </div>
);

export default ProfileModal;
