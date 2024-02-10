import DashboardList from '@/components/dashboard/DashboardList';
import MainLayout from '@/components/layout/Layouts/MainLayout';
import useDashBoardStore from '@/stores/useDashboardStore';

const MydashboardPage = () => {
  const { dashboardList } = useDashBoardStore();

  return <DashboardList dashboardData={dashboardList} />;
};

export default MydashboardPage;

MydashboardPage.FullLayout = MainLayout;
