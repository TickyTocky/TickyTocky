import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import useToggleButton from '@/hooks/useToggleButton';
import { NAV_HOME_STATUS } from '@/constants/nav';
import styles from './navButton.module.scss';

const cx = classNames.bind(styles);

const LinkButton = ({ type, boardData }) => {
  const { isVisible, handleToggleClick } = useToggleButton();
  const { icon, alt } = isVisible ? NAV_HOME_STATUS.active : NAV_HOME_STATUS.default;

  const boardName = boardData?.title;
  const maxLengh = 7;
  const truncatedString = boardName?.slice(0, maxLengh);

  return (
    <>
      {type === 'home' && (
        <Link href={'/mydashboard'}>
          <button
            className={cx('home-button-wrapper')}
            onMouseEnter={handleToggleClick}
            onMouseLeave={handleToggleClick}
          >
            <Image src={icon} alt={alt} width={24} height={24} />
          </button>
        </Link>
      )}
      {type === 'board' && (
        <Link href={`/dashboard/${boardData.id}`}>
          <button
            className={cx('board-button-wrapper')}
            style={{ background: boardData.color }}
          >
            {truncatedString}
          </button>
        </Link>
      )}
    </>
  );
};

export default LinkButton;
