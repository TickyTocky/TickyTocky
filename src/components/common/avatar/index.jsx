import { useState } from 'react';
import Image from 'next/image';

import styles from './avatar.module.scss';
import classNames from 'classnames/bind';

import { Icon } from '@/constants/importImage';

const cx = classNames.bind(styles);

// props 예시
// avatarSize : width가 64px이라면 avatarSize={xl}
// textColor : textcolor가 gray10이라면 textColor={gray10}
// isArrow : 화살표를 사용하고 싶다면 isArrow={true}

const Avatar = ({
  profileImage,
  profileName,
  avatarSize = 'xl',
  textColor,
  isArrow = false,
}) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleProfileClick = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div className={cx('container')}>
      <div className={cx(`avatar-size-${avatarSize}`, { active: isProfileVisible })}>
        {profileImage ? (
          <Image
            className={cx('image')}
            src={profileImage}
            alt={`${profileName}'s profile image`}
          />
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
