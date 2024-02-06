import { useRouter } from 'next/router';
import ColumnLayout from '@/components/layout/dashboard/Column';

const DashboardPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id === undefined) return;

  return (
    <>
      <ColumnLayout dashBoardId={Number(id)} />
    </>
  );
};

export default DashboardPage;
