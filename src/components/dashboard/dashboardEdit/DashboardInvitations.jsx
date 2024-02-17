import Image from 'next/image';
import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import WithdrawInvitation from '@/components/dashboard/modal/dashboard/WithdrawInvitation';
import InviteDashboard from '@/components/dashboard/modal/dashboard/InviteDashboard';
import useAsync from '@/hooks/useAsync';
import useModalState from '@/hooks/useModalState';
import useDashboardEdit from '@/hooks/dashboard/useDashboardEdit';
import useDashBoardStore from '@/stores/useDashboardStore';
import Dashboard from '@/api/dashboards';
import { ICON } from '@/constants';
import { INIT_DASHBOARD_INVITATIONS_DATA } from '@/constants/initialDataType/dashboard';
import styles from './DashboardInvitations.module.scss';

const cx = classNames.bind(styles);
const { page } = ICON;
const left = page.arrowLeft;
const right = page.arrowRight;

const DashboardInvitations = ({ dashboardId }) => {
  useAsync(
    () => Dashboard.getInvite(Number(dashboardId)),
    INIT_DASHBOARD_INVITATIONS_DATA
  );
  const { invitationList } = useDashBoardStore();
  const totalItems = invitationList?.length;
  const ITEMS_PER_PAGE = 6;

  const { currentPageData, currentPage, totalPages, goToPrevPage, goToNextPage } =
    useDashboardEdit(invitationList, totalItems, ITEMS_PER_PAGE);
  const { modalState, toggleModal } = useModalState([
    'invitationWithdraw',
    'inviteMember',
  ]);

  return (
    <article className={cx('container')}>
      <header className={cx('container-header')}>
        <div className={cx('container-header-title-container')}>
          <span className={cx('container-header-title-container-title')}>
            Invitations
          </span>
          <div className={cx('container-header-title-container-count')}>{totalItems}</div>
        </div>
        <BaseButton
          onClick={() => toggleModal('inviteMember')}
          text='Invite'
          variant='secondary'
          size='md'
        />
        <InviteDashboard
          isModalOpen={modalState.inviteMember}
          closeModal={() => toggleModal('inviteMember')}
          dashboardId={dashboardId}
        />
      </header>
      <section className={cx('container-list')}>
        <label className={cx('container-list-emails-title')}>Email</label>
        <div className={cx('container-list-emails-container')}>
          {currentPageData?.map((item) => (
            <div
              key={`key-dashboardInvitations-${item.id}`}
              className={cx('container-list-emails-container-item')}
            >
              <div className={cx('email-title')}>{item.invitee.email}</div>
              <BaseButton
                onClick={() => toggleModal('dashboardWithdraw')}
                text='Withdraw'
                variant='outline'
                size='md'
              />
              <WithdrawInvitation
                isModalOpen={modalState.dashboardWithdraw}
                closeModal={() => toggleModal('dashboardWithdraw')}
                invitationId={item.id}
                dashboardId={dashboardId}
              />
            </div>
          ))}
        </div>
        <footer className={cx('container-footer')}>
          <div className={cx('container-footer-number')}>
            <span className={cx('current')}>{currentPage}</span>
            <span className={cx('total')}>/{totalPages}</span>
          </div>
          <div className={cx('container-footer-pagination-container')}>
            <button onClick={goToPrevPage} type='button' className={cx('button-left')}>
              <Image src={right.url} alt={right.alt} width={16} height={16} />
            </button>
            <button onClick={goToNextPage} type='button' className={cx('button-right')}>
              <Image src={left.url} alt={left.alt} width={16} height={16} />
            </button>
          </div>
        </footer>
      </section>
    </article>
  );
};

export default DashboardInvitations;
