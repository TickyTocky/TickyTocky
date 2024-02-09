import Image from 'next/image';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import Avatar from '@/components/common/Avatar';
import DeleteDashboard from '@/components/dashboard/modal/dashboard/DeleteDashboard';
import useModalState from '@/hooks/useModalState';
import useAsync from '@/hooks/useAsync';
import useMemberStore from '@/stores/useMemberStore';
import Members from '@/api/members';
import { INIT_MEMBER_DATA } from '@/constants/initialDataType';
import { ICON } from '@/constants/importImage';
import styles from './DashboardMembers.module.scss';

const cx = classNames.bind(styles);
const { page } = ICON;
const left = page.arrowLeft;
const right = page.arrowRight;

const DashboardMembers = ({ dashboardId }) => {
  useAsync(() => Members.getList(1, 100, Number(dashboardId)), INIT_MEMBER_DATA);
  const { memberList } = useMemberStore();
  const members = memberList?.filter((item) => !item.isOwner);
  const totalItems = members?.length;
  const ITEMS_PER_PAGE = 2;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState(null);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / ITEMS_PER_PAGE));
  const { modalState, toggleModal } = useModalState(['dashboardDelete']);

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const renderData = () => {
    const START_INDEX = (currentPage - 1) * ITEMS_PER_PAGE;
    const END_INDEX = START_INDEX + ITEMS_PER_PAGE;
    const currentPageData = members.slice(START_INDEX, END_INDEX);
    setCurrentPageData(currentPageData);
  };

  useEffect(() => {
    if (totalPages >= 1) {
      setTotalPages(Math.ceil(totalItems / ITEMS_PER_PAGE));
    } else if (!totalPages) {
      setTotalPages(1);
    }
  }, [totalItems, ITEMS_PER_PAGE]);

  useEffect(() => {
    if (memberList) {
      renderData();
    }
  }, [currentPage, memberList]);

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
                key={`dashboardMembers-${member.id}`}
                className={cx('container-username-list-container-members')}
              >
                <div className={cx('user')}>
                  <Avatar
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
