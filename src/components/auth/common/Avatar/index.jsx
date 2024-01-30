import Image from 'next/image';
import classNames from 'classnames/bind';
import useToggleButton from '@/hooks/useToggleButton';
import { ICON } from '@/constants/importImage';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

const Avatar = ({
  profileImage,
  profileName,
  textColor,
  avatarSize = 'xl',
  isArrow = false,
}) => {
  const { isVisible, handleToggleClick } = useToggleButton();

  return (
    <div className={cx('container')}>
      <div
        className={cx(`avatar-size-${avatarSize}`, {
          active: isVisible,
        })}
      >
        {profileImage ? (
          <Image className={cx('image')} src={profileImage} alt='profile-image' fill />
        ) : (
          <div className={cx('badge')}>{profileName.charAt(0)}</div>
        )}
      </div>
      {textColor && (
        <div className={cx('text-icon-wrap')} onClick={handleToggleClick}>
          <span className={cx(`text-color-${textColor}`)}>{profileName}</span>
          {isArrow &&
            (isVisible ? (
              <Image
                src={ICON.arrowUp.s.url}
                alt={ICON.arrowUp.s.alt}
                width={16}
                height={16}
              />
            ) : (
              <Image
                src={ICON.arrowDown.s.url}
                alt={ICON.arrowDown.s.alt}
                width={16}
                height={16}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Avatar;
