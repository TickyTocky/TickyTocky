import { useRouter } from 'next/router';
import MainLayout from '@/components/layout/Layouts/MainLayout';
import BoardHeader from '@/components/layout/Header/BoardHeader';
import ColumnLayout from '@/components/layout/dashboard/Column';

const DashboardPage = () => {
  const router = useRouter();
  const { query, pathname } = router;
  const { id } = query;
  const pageTitle = pathname.split('/')[1];

  if (id === undefined) return;

  return (
    <>
      <BoardHeader title={pageTitle} dashBoardId={Number(id)} />
      <ColumnLayout dashBoardId={Number(id)} />
    </>
  );
};

export default DashboardPage;

DashboardPage.FullLayout = MainLayout;
