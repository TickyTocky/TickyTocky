import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);
const { arrowUp, arrowDown } = ICON;

const Avatar = ({
  profileName,
  textColor = '',
  profileImage = '',
  avatarSize = 'xl',
  isArrow = false,
  isOpen = false,
}) => (
  <>
    {profileName && (
      <div className={cx('container')}>
        <div
          className={cx(`avatar-size-${avatarSize}`, {
            active: isOpen,
          })}
        >
          {profileImage ? (
            <Image
              className={cx('image')}
              src={profileImage}
              alt='profile-image'
              fill
              sizes='100%'
              priority
            />
          ) : (
            <div className={cx('badge')}>{profileName?.charAt(0)}</div>
          )}
        </div>
        {textColor && (
          <div className={cx('text-icon-wrap')}>
            <span className={cx(`text-color-${textColor}`)}>{profileName}</span>
            {isArrow &&
              (isOpen ? (
                <Image
                  src={arrowUp.active.url}
                  alt={arrowUp.active.alt}
                  width={16}
                  height={16}
                />
              ) : (
                <Image src={arrowDown.url} alt={arrowDown.alt} width={16} height={16} />
              ))}
          </div>
        )}
      </div>
    )}
  </>
);

export default Avatar;
