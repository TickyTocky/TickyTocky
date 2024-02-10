import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Columns from '@/api/columns';
import Dashboard from '@/api/dashboards';

const useDashboardFetchData = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        await Columns.getList(Number(id));
        await Dashboard.get(Number(id));
      }
    };
    fetchData();
  }, [router.isReady, id]);

  return { id };
};

export default useDashboardFetchData;
