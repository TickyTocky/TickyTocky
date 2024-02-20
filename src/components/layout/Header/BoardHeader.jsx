import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import Dashboard from '@/api/dashboards';
import InvitationMembers from '@/components/common/InvitationMembers';
import Breadcrumb from '@/components/common/Breadcrumb';
import MemberPopup from '@/components/common/MemberPopup';
import useDashBoardStore from '@/stores/useDashboardStore';
import useAsync from '@/hooks/useAsync';
import useGetMembers from '@/hooks/useGetMembers';
import useTogglePopup from '@/hooks/useTogglePopup';
import { ICON } from '@/constants';
import { INIT_DASHBOARD_DATA } from '@/constants/initialDataType';
import styles from './BoardHeader.module.scss';

const cx = classNames.bind(styles);
const { settings } = ICON;

const BoardHeader = ({ dashboardId }) => {
  useAsync(() => Dashboard.get(dashboardId), INIT_DASHBOARD_DATA);
  const { dashboard } = useDashBoardStore();
  const { memberList } = useGetMembers({ dashboardId });

  const { isOpen, popupRef, buttonRef, openPopup, closePopup } = useTogglePopup();

  return (
    <div className={cx('container')}>
      <div className={cx('title')}>
        <span className={cx('title-text')}>{dashboard?.title}</span>
        {dashboard?.createdByMe && (
          <Link className={cx('title-link')} href={`/dashboard/${dashboardId}/edit`}>
            <Image src={settings.url} alt={settings.alt} width={24} height={24} />
          </Link>
        )}
      </div>
      <div className={cx('info')}>
        <div className={cx('info-invitation')}>
          <InvitationMembers
            dashBoardId={dashboardId}
            createdByMe={dashboard?.createdByMe}
            memberList={memberList}
            isOpen={isOpen}
            buttonRef={buttonRef}
            openPopup={openPopup}
            closePopup={closePopup}
          />
          {isOpen && (
            <div className={cx('info-invitation-popup')} ref={popupRef}>
              <MemberPopup memberList={memberList} />
            </div>
          )}
        </div>
        <div className={cx('line')}></div>
        <Breadcrumb title={dashboard?.title} />
      </div>
    </div>
  );
};

export default BoardHeader;
