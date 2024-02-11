import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import ModalButton from '@/components/nav/ModalButton';
import LinkButton from '@/components/nav/LinkButton';
import CreateDashboard from '@/components/dashboard/modal/dashboard/CreateDashboard';
import useAsync from '@/hooks/useAsync';
import useModalState from '@/hooks/useModalState';
import useDashBoardStore from '@/stores/useDashboardStore';
import Dashboard from '@/api/dashboards';
import IconModal from '@/components/layout/modal/IconModal';
import Auth from '@/api/auth';
import { INIT_DASHBOARDS_DATA } from '@/constants/initialDataType';
import { ICON } from '@/constants/importImage';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

const Nav = () => {
  const router = useRouter();
  const { id } = router.query;

  useAsync(() => Dashboard.getList(), INIT_DASHBOARDS_DATA);
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
          {dashboardList?.map((board) => (
            <LinkButton
              key={`key-nav-dashboard-key-${board.id}`}
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
          // ref={popupRef}
          isModalOpen={modalState.navLogoutmodal}
          closeModal={() => toggleModal('navLogoutmodal')}
          iconSize={58}
          title='Are you sure'
          desc='You wanna logout?'
          iconName={ICON.logout.default}
        >
          <div className={cx('modal-buttons')}>
            <button
              type='button'
              onClick={() => toggleModal('navLogoutmodal')}
              className={cx('modal-buttons-cancel')}
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={handleOnClick}
              className={cx('modal-buttons-logout')}
            >
              Yes
            </button>
          </div>
        </IconModal>
      </div>
    </div>
  );
};

export default Nav;
