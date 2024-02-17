import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import ModalButton from '@/components/nav/ModalButton';
import LinkButton from '@/components/nav/LinkButton';
import CreateDashboard from '@/components/dashboard/modal/dashboard/CreateDashboard';
import IconModal from '@/components/layout/modal/IconModal';
import useModalState from '@/hooks/useModalState';
import useDashBoardStore from '@/stores/useDashboardStore';
import Auth from '@/api/auth';
import { ICON } from '@/constants';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

const Nav = () => {
  const router = useRouter();
  const { id } = router.query;
  const { dashboardList } = useDashBoardStore();
  const { modalState, toggleModal } = useModalState([
    'createDashboard',
    'navLogoutmodal',
  ]);

  const handleOnClick = (e) => {
    e.stopPropagation();
    (() => toggleModal('navLogoutmodal'))();
    Auth.logout();
  };

  return (
    <div className={cx('nav-container')}>
      <div className={cx('button-container')}>
        <div className={cx('divider')}>
          <ModalButton onClickInput={() => toggleModal('createDashboard')} type='add' />
          <CreateDashboard
            isModalOpen={modalState.createDashboard}
            closeModal={() => toggleModal('createDashboard')}
          />
        </div>
        <div className={cx('home-dashboard-container')}>
          <LinkButton type='home' isHomeFocused={id ? false : true} />
          {dashboardList?.map((board, i) => (
            <LinkButton
              key={`nav-dashboard-key-${board.id}-${i}`}
              type='board'
              boardData={board}
              isBoardFocused={board.id === Number(id) ? true : false}
            />
          ))}
        </div>
      </div>
      <div className={cx('logout-container')}>
        <ModalButton onClickInput={() => toggleModal('navLogoutmodal')} type='logout' />
        <IconModal
          isModalOpen={modalState.navLogoutmodal}
          closeModal={() => toggleModal('navLogoutmodal')}
          iconSize={58}
          title='Logout'
          desc='Are you sure you want to logout?'
          iconName={ICON.logout.default}
        >
          <div className={cx('modal-buttons')}>
            <button
              type='button'
              onClick={() => toggleModal('navLogoutmodal')}
              className={cx('modal-buttons-cancel')}
            >
              Stay
            </button>
            <button
              type='button'
              onClick={handleOnClick}
              className={cx('modal-buttons-logout')}
            >
              Log me out
            </button>
          </div>
        </IconModal>
      </div>
    </div>
  );
};

export default Nav;
