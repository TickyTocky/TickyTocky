import Image from 'next/image';
import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import DashboardCard from '@/components/dashboard/DashboardCard';
import DropDown from '@/components/common/DropDown';
import CreateDashboard from '@/components/dashboard/modal/dashboard/CreateDashboard';
import useDashboardList from '@/hooks/useDashboardList';
import useModalState from '@/hooks/useModalState';
import { ICON } from '@/constants/importImage';
import styles from './DashboardList.module.scss';

const cx = classNames.bind(styles);
const { page } = ICON;
const { arrowLeft, arrowRight } = page;

const DashboardList = ({ dashboardData }) => {
  const {
    currentPageData,
    currentFilter,
    handleFilterClick,
    handleDropdownClick,
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
  } = useDashboardList(dashboardData);
  const { modalState, toggleModal } = useModalState(['createDashboard']);

  return (
    <div className={cx('dashboard-list-container')}>
      <CreateDashboard
        isModalOpen={modalState.createDashboard}
        toggleModal={toggleModal}
      />
      <header className={cx('dashboard-list-container-header')}>
        <div className={cx('dashboard-list-container-header-container')}>
          <span className={cx('dashboard-name')}>Dashboard</span>
          <div className={cx('dashboard-number')}>{dashboardData.totalCount}</div>
        </div>
      </header>
      <section className={cx('dashboard-list-container-section')}>
        <div className={cx('dashboard-list-container-section-header')}>
          <div className={cx('dashboard-list-container-section-header-filter')}>
            <button
              onClick={() => handleFilterClick('All')}
              className={cx('all', { active: currentFilter === 'All' })}
            >
              All
            </button>
            <button
              onClick={() => handleFilterClick('My Dashboard')}
              className={cx('my', { active: currentFilter === 'My Dashboard' })}
            >
              My Dashboard
            </button>
            <button
              onClick={() => handleFilterClick('Invited Dashboard')}
              className={cx('invited', { active: currentFilter === 'Invited Dashboard' })}
            >
              Invited Dashboard
            </button>
          </div>
          <div
            className={cx('dashboard-list-container-section-header-dropdown-container')}
          >
            <DropDown
              className={cx(
                'dashboard-list-container-section-header-dropdown-container-dropdown'
              )}
              onClickInput={handleDropdownClick}
              type='timeline'
            />
            <div
              className={cx(
                'dashboard-list-container-section-header-dropdown-container-create-button'
              )}
            >
              <BaseButton
                onClick={() => toggleModal('createDashboard')}
                variant='secondary'
                size='xl'
                text='Create'
              />
            </div>
          </div>
        </div>
        <div className={cx('dashboard-list-container-section-card-container')}>
          {currentPageData.map((dashboard, i) => (
            <DashboardCard key={`dashboard-${dashboard.id}+${i}`} dashboard={dashboard} />
          ))}
        </div>
      </section>
      <footer className={cx('dashboard-list-container-footer')}>
        <div className={cx('dashboard-list-container-footer-page-container')}>
          <span
            className={cx('dashboard-list-container-footer-page-container-current-page')}
          >
            {currentPage}
          </span>
          <span
            className={cx('dashboard-list-container-footer-page-container-total-page')}
          >
            /{totalPages}
          </span>
        </div>
        <div className={cx('dashboard-list-container-footer-pagination-container')}>
          <button
            onClick={goToPrevPage}
            className={cx(
              'dashboard-list-container-footer-pagination-container-button-left'
            )}
          >
            <Image src={arrowRight.url} alt={arrowRight.alt} width={16} height={16} />
          </button>
          <button
            onClick={goToNextPage}
            className={cx(
              'dashboard-list-container-footer-pagination-container-button-right'
            )}
          >
            <Image src={arrowLeft.url} alt={arrowLeft.alt} width={16} height={16} />
          </button>
        </div>
      </footer>
    </div>
  );
};
export default DashboardList;
