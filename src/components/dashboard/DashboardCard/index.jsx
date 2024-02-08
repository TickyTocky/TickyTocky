import Image from 'next/image';
import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import useToggleButton from '@/hooks/useToggleButton';
import { ICON } from '@/constants/importImage';
import styles from './DashboardCard.module.scss';

const cx = classNames.bind(styles);
const { calendar } = ICON;

const DashboardCard = ({
  dashboard = {
    color: '#000000',
    title: '',
    createdAt: '',
    createdByMe: false,
  },
  member = {
    profileImage: '',
    profileName: 'H',
  },
}) => {
  const { isVisible, handleToggleClick } = useToggleButton();

  return (
    <article
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
                avatarSize='sm'
                profileImage={member.profileImage}
                profileName={member.profileName}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default DashboardCard;
