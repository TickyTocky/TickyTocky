import { useRouter } from 'next/router';
import MainLayout from '@/components/layout/Layouts/MainLayout';
import BoardHeader from '@/components/layout/Header/BoardHeader';
import ColumnLayout from '@/components/layout/dashboard/Column';

const DashboardPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id === undefined) return;

  return (
    <>
      <BoardHeader dashBoardId={Number(id)} />
      <ColumnLayout dashBoardId={Number(id)} />
    </>
  );
};

export default DashboardPage;

DashboardPage.FullLayout = MainLayout;
