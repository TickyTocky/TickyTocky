import MainLayout from '@/components/layout/Layouts/MainLayout';
import BoardHeader from '@/components/layout/Header/BoardHeader';
import ColumnLayout from '@/components/layout/dashboard/Column';
import useDashboardFetchData from '@/hooks/useDashboardFetchData';

const DashboardPage = () => {
  const { id } = useDashboardFetchData();

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
