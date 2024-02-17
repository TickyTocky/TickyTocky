import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import Dashboard from '@/api/dashboards';
import InvitationMembers from '@/components/common/InvitationMembers';
import Breadcrumb from '@/components/common/Breadcrumb';
import useDashBoardStore from '@/stores/useDashboardStore';
import useAsync from '@/hooks/useAsync';
import { ICON } from '@/constants';
import { INIT_DASHBOARD_DATA } from '@/constants/initialDataType';
import styles from './BoardHeader.module.scss';

const cx = classNames.bind(styles);
const { settings } = ICON;

const BoardHeader = ({ dashboardId }) => {
  useAsync(() => Dashboard.get(dashboardId), INIT_DASHBOARD_DATA);
  const { dashboard } = useDashBoardStore();

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
      <div className={cx('info-wrap')}>
        <InvitationMembers
          dashboardId={dashboardId}
          createdByMe={dashboard?.createdByMe}
        />
        <div className={cx('line')}></div>
        <Breadcrumb title={dashboard?.title} />
      </div>
    </div>
  );
};

export default BoardHeader;
