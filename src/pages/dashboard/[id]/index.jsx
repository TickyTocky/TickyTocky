import { useRouter } from 'next/router';
import ColumnLayout from '@/components/layout/dashboard/Column';
import Layout from '@/components/layout';
import BoardHeader from '@/components/layout/Header/BoardHeader';
import { members } from '@/constants/mock-assignees.json'; //TODO 임시 Mock 데이터

const DashboardPage = () => {
  const router = useRouter();
  const { query, pathname } = router;
  const { id } = query;
  const pageTitle = pathname.split('/')[1];

  if (id === undefined) return;

  return (
    <Layout boardHeader={<BoardHeader members={members} title={pageTitle} />}>
      <ColumnLayout dashBoardId={Number(id)} />
    </Layout>
  );
};

export default DashboardPage;
