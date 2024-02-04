import useColumnStore from '@/stores/useColumnStore';
import { COLUMN_API } from '@/constants';
import instance from './axios';

const Columns = {
  create: (dashboardId, title) => instance.post(COLUMN_API, { title, dashboardId }),
  getList: async (dashboardId) => {
    const res = await instance.get(COLUMN_API, { params: { dashboardId } });
    if (res.status === 200) {
      useColumnStore.setState((prev) => ({ ...prev, columnList: res.data }));
      return res;
    }
  },
  edit: (columnId, title) => instance.put(`${COLUMN_API}/${columnId}`, { title }),
  delete: (columnId) => instance.delete(`${COLUMN_API}/${columnId}`),
};

export default Columns;
