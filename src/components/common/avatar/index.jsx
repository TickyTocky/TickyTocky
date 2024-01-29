import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './avatar.module.scss';
import { Icon } from '@/constants/importImage';

const cx = classNames.bind(styles);

const Avatar = ({
  profileImage,
  profileName,
  textColor,
  avatarSize = 'xl',
  isArrow = false,
}) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleProfileClick = () => {
    setIsProfileVisible((prev) => !prev);
  };

  return (
    <div className={cx('container')}>
      <div className={cx(`avatar-size-${avatarSize}`, { active: isProfileVisible })}>
        {profileImage ? (
          <Image className={cx('image')} src={profileImage} alt='profile-image' />
        ) : (
          <div className={cx('badge')}>{profileName.charAt(0)}</div>
        )}
      </div>
      {textColor && (
        <div className={cx('text-icon-wrap')} onClick={handleProfileClick}>
          <span className={cx(`text-color-${textColor}`)}>{profileName}</span>
          {isArrow &&
            (isProfileVisible ? (
              <Image src={Icon.arrowUp.s.url} alt={Icon.arrowUp.s.alt} />
            ) : (
              <Image src={Icon.arrowDown.s.url} alt={Icon.arrowDown.s.alt} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Avatar;
