import Link from 'next/link';
import Image from 'next/image';
import styles from './MyHeader.module.scss';
import classNames from 'classnames/bind';
import Avatar from '@/components/common/avatar';
import { Icon } from '@/constants/importImage';

const cx = classNames.bind(styles);

const MyHeader = ({ user }) => (
  <header className={cx('container')}>
    <Link href={'/'}>
      <Image className={cx('image')} src={Icon.logo.url} alt={Icon.logo.alt} />
    </Link>
    <div className={cx('my-menu')}>
      <div className={cx('sm-hidden')}>
        <Avatar
          profileName={user.nickname}
          profileImage={user.profileImageUrl}
          avatarSize={'l'}
          textColor={'gray10'}
          isArrow={true}
        />
      </div>
      <div className={cx('sm-only')}>
        <Avatar
          profileName={user.nickname}
          profileImage={user.profileImageUrl}
          avatarSize={'l'}
        />
      </div>
    </div>
  </header>
);

export default MyHeader;
