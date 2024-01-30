import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import IconButton from '@/components/common/button/IconButton';
import { ICON } from '@/constants/importImage';
import styles from './MyHeader.module.scss';

const cx = classNames.bind(styles);

const MyHeader = ({ user }) => (
  <header className={cx('container')}>
    <Link href={'/'}>
      <Image
        className={cx('image')}
        src={ICON.logo.url}
        alt={ICON.logo.alt}
        width={130}
        height={20}
      />
    </Link>
    <div className={cx('my-menu')}>
      <IconButton
        svg={ICON.home.url}
        alt={ICON.home.alt}
        size='lg'
        outline
        type='button'
      />
      <div className={cx('sm-hidden')}>
        <Avatar
          profileName={user.nickname}
          profileImage={user.profileImageUrl}
          avatarSize='lg'
          textColor='gray10'
          isArrow={true}
        />
      </div>
      <div className={cx('sm-only')}>
        <Avatar
          profileName={user.nickname}
          profileImage={user.profileImageUrl}
          avatarSize='lg'
        />
      </div>
    </div>
  </header>
);

export default MyHeader;
