import classNames from 'classnames/bind';
import ModalButton from '@/components/nav/ModalButton';
import LinkButton from '@/components/nav/LinkButton';
import mock from '@/constants/navMockData';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

const Nav = () => {
  const { dashboards } = mock;

  return (
    <div className={cx('nav-container')}>
      <div className={cx('button-container')}>
        <div className={cx('divider')}>
          <ModalButton type='add' />
        </div>
        <div className={cx('home-dashboard-container')}>
          <LinkButton type='home' />
          {dashboards.map((board) => (
            <LinkButton key={board.id} type='board' boardData={board} />
          ))}
        </div>
      </div>
      <div className={cx('logout-container')}>
        <ModalButton type='logout' />
      </div>
    </div>
  );
};

export default Nav;
