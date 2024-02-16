import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import useToggleButton from '@/hooks/useToggleButton';
import { ICON } from '@/constants/importImage';
import styles from './DashboardCard.module.scss';

const cx = classNames.bind(styles);
const { calendar } = ICON;

const DashboardCard = ({ dashboardId, dashboard, user }) => {
  const { isVisible, handleToggleClick } = useToggleButton();

  return (
    <Link
      href={`/dashboard/${dashboardId}`}
      style={{
        border: isVisible
          ? dashboard.color
            ? `0.1rem solid ${dashboard.color}`
            : '0.1rem solid transparent;'
          : '',
      }}
      onMouseOver={handleToggleClick}
      onMouseOut={handleToggleClick}
      className={cx('dashboard-article')}
    >
      <div
        style={{ background: dashboard.color ? `${dashboard.color}` : '#ffffff' }}
        className={cx('dashboard-article-side-pointer')}
      ></div>
      <div className={cx('dashboard-article-container')}>
        <header className={cx('dashboard-article-container-board-name')}>
          {dashboard.title}
        </header>
        <div className={cx('dashboard-article-container-contents')}>
          <div className={cx('dashboard-article-container-contents-container')}>
            <Image
              src={calendar.default.url}
              alt={calendar.default.alt}
              width={18}
              height={18}
            />
            <span>{dashboard.createdAt?.split('T')[0]}</span>
          </div>
          <div>
            {dashboard.createdByMe && (
              <Avatar
                userId={user?.id}
                avatarSize='sm'
                profileImage={user?.profileImageUrl}
                profileName={user?.nickname}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
