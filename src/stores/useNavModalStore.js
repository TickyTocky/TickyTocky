import { create } from 'zustand';

const useNavModalStore = create((set) => {
  return {
    isDashboardModalOpened: false,
    isLogoutModalOpened: false,
    clickDashboardAdd: () => {
      return set((state) => {
        return { isDashboardModalOpened: !state.isDashboardModalOpened };
      });
    },
    clickLogout: () => {
      return set((state) => {
        return { isLogoutModalOpened: !state.isLogoutModalOpened };
      });
    },
  };
});

export default useNavModalStore;
