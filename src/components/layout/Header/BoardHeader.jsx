import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames/bind';
import Dashboard from '@/api/dashboards';
import InvitationMembers from '@/components/common/InvitationMembers';
import MixButton from '@/components/common/button/MixButton';
import Breadcrumb from '@/components/common/Breadcrumb';
import useDashBoardStore from '@/stores/useDashboardStore';
import useAsync from '@/hooks/useAsync';
import { INIT_DASHBOARD_DATA } from '@/constants/initialDataType';
import { ICON } from '@/constants/importImage';
import styles from './BoardHeader.module.scss';

const cx = classNames.bind(styles);
const { settings } = ICON;

const BoardHeader = ({ dashBoardId }) => {
  const router = useRouter();
  const { id } = router.query;

  useAsync(() => Dashboard.get(Number(dashBoardId)), INIT_DASHBOARD_DATA);
  const { dashboard } = useDashBoardStore();

  return (
    <div className={cx('container')}>
      <Link href={`/dashboard/${id}/edit`}>
        <MixButton
          svg={settings.url}
          alt={settings.alt}
          reverse
          size={24}
          type='button'
          gap={4}
          text={dashboard?.title}
          fontSize={24}
        />
      </Link>
      <div className={cx('info-wrap')}>
        <InvitationMembers dashBoardId={Number(dashBoardId)} />
        <div className={cx('line')}></div>
        <Breadcrumb title={dashboard?.title} />
      </div>
    </div>
  );
};

export default BoardHeader;
