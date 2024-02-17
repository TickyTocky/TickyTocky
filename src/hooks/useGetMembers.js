import Members from '@/api/members';
import useMemberStore from '@/stores/useMemberStore';
import useAsync from '@/hooks/useAsync';
import { INIT_MEMBER_DATA } from '@/constants/initialDataType';

const useGetMembers = ({ dashboardId }) => {
  useAsync(() => Members.getList(1, 100, dashboardId), INIT_MEMBER_DATA);
  const { memberList } = useMemberStore();

  return { memberList };
};

export default useGetMembers;
