import Image from 'next/image';
import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import Avatar from '@/components/common/Avatar';
import DeleteDashboard from '@/components/dashboard/modal/dashboard/DeleteDashboard';
import useModalState from '@/hooks/useModalState';
import useGetMembers from '@/hooks/useGetMembers';
import useDashboardEdit from '@/hooks/dashboard/useDashboardEdit';
import { ICON } from '@/constants';
import styles from './DashboardMembers.module.scss';

const cx = classNames.bind(styles);
const { page } = ICON;
const left = page.arrowLeft;
const right = page.arrowRight;

const DashboardMembers = ({ dashboardId }) => {
  const { memberList } = useGetMembers(dashboardId);
  const members = memberList?.filter((item) => !item.isOwner);
  const totalItems = members?.length;
  const ITEMS_PER_PAGE = 6;
  const { modalState, toggleModal } = useModalState(['dashboardDelete']);
  const { currentPageData, currentPage, totalPages, goToPrevPage, goToNextPage } =
    useDashboardEdit(memberList, totalItems, ITEMS_PER_PAGE, members);

  return (
    <article className={cx('container')}>
      <header className={cx('container-header')}>
        <label className={cx('container-header-title')}>Members</label>
        <div className={cx('container-header-count')}>{totalItems}</div>
      </header>
      <section className={cx('container-username-list')}>
        <label className={cx('container-username-list-title')}>Username</label>
        <div className={cx('container-username-list-container')}>
          {currentPageData &&
            currentPageData?.map((member) => (
              <div
                key={`key-dashboardMembers-${member.id}`}
                className={cx('container-username-list-container-members')}
              >
                <div className={cx('user')}>
                  <Avatar
                    userId={member.userId}
                    avatarSize='sm'
                    profileName={member.nickname}
                    profileImage={member.profileImageUrl}
                  />
                  <div className={cx('user-name')}>{member.nickname}</div>
                </div>
                <BaseButton
                  onClick={() => toggleModal('dashboardDelete')}
                  variant='outline'
                  text='Delete'
                  size='md'
                />
                <DeleteDashboard
                  isModalOpen={modalState.dashboardDelete}
                  closeModal={() => toggleModal('dashboardDelete')}
                  memberId={member.id}
                  dashboardId={dashboardId}
                />
              </div>
            ))}
        </div>
        <footer className={cx('container-username-list-footer')}>
          <div className={cx('container-username-list-footer-number')}>
            <span className={cx('current')}>{currentPage}</span>
            <span className={cx('total')}>/{totalPages}</span>
          </div>
          <div className={cx('container-username-list-footer-pagination-container')}>
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

export default DashboardMembers;
