import { useRouter } from 'next/router';
import MainLayout from '@/components/layout/Layouts/MainLayout';
import BoardHeader from '@/components/layout/Header/BoardHeader';
import ColumnLayout from '@/components/layout/dashboard/Column';

const DashboardPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <BoardHeader title='미정님 타이틀 뿌려주세요' />
      <ColumnLayout dashBoardId={Number(id)} />
    </>
  );
};

export default DashboardPage;

DashboardPage.FullLayout = MainLayout;
