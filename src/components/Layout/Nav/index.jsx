import classNames from 'classnames/bind';
import ModalButton from '@/components/nav/ModalButton';
import LinkButton from '@/components/nav/LinkButton';
import useNavModalStore from '@/stores/useNavModalStore';
import styles from '@/components/Layout/Nav/nav.module.scss';
import mock from '@/constants/navMockData';

const cx = classNames.bind(styles);

const Nav = () => {
  const { dashboardAdd, clickLogout } = useNavModalStore();
  const boards = mock.dashboards;

  return (
    <div className={cx('nav-container')}>
      <div className={cx('button-container')}>
        <div className={cx('devider')}>
          <ModalButton type='add' onClickInput={dashboardAdd} />
        </div>
        <div className={cx('home-dashboard-container')}>
          <LinkButton type='home' />
          {boards.map((board) => {
            return <LinkButton key={board.id} type='board' boardData={board} />;
          })}
        </div>
      </div>
      <div className={cx('logout-container')}>
        <ModalButton type='logout' onClickInput={clickLogout} />
      </div>
    </div>
  );
};

export default Nav;
