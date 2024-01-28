import { useState } from 'react';

import styles from './ProfileModal.module.scss';
import classNames from 'classnames/bind';

import Avatar from '@/components/common/avatar';

const cx = classNames.bind(styles);

const ProfileModal = ({ profileName, profileImage, profileEmail }) => {
  const [isHover, setIsHover] = useState(false);

  console.log(isHover);

  return (
    <div
      className={cx('container')}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className={cx('profile')}>
        <Avatar profileImage={profileImage} avatarSize={'xl'} />
        <span className={cx('name')}>{profileName}</span>
        <span className={cx('email')}>{profileEmail}</span>
      </div>
      <div></div>
    </div>
  );
};

export default ProfileModal;
