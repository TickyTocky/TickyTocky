import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { Icon } from '@/constants/importImage';
import styles from '@/components/nav/navButton.module.scss';

const cx = classNames.bind(styles);

const LinkButton = ({ type, boardData }) => {
  const boardName = boardData?.title;
  const maxLengh = 7;
  const truncatedStr = boardName?.slice(0, maxLengh);

  return (
    <>
      {type === 'home' && (
        <Link href={'/mydashboard'}>
          <button className={cx('home-btn-wrapper')}>
            <Image
              src={Icon.nav.active.url}
              alt={Icon.nav.active.alt}
              width={24}
              height={24}
            />
          </button>
        </Link>
      )}
      {type === 'board' && (
        <Link href={`/dashboard/${boardData.id}`}>
          <button
            className={cx('board-btn-wrapper')}
            style={{ background: boardData.color }}
          >
            {truncatedStr}
          </button>
        </Link>
      )}
    </>
  );
};

export default LinkButton;
