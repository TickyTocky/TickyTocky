import IconAddActive from 'public/svg/ic-add-active.svg';
import IconLogout from 'public/svg/ic-logout.svg';
import IconLogoutHover from 'public/svg/ic-logout-hover.svg';
import IconNavActive from 'public/svg/ic-nav-active.svg';
import IconNav from 'public/svg/ic-nav.svg';
import IconDelete from 'public/svg/ic-delete.svg';
import IconAddDefault from 'public/svg/ic-add-s.svg';
import IconArrowUpS from 'public/svg/ic-arrow-up-s.svg';
import IconArrowDownS from 'public/svg/ic-arrow-down-s.svg';
import IconSettings from 'public/svg/ic-settings.svg';

export const ICON = {
  add: {
    default: {
      url: IconAddDefault,
      alt: 'add icon',
    },
  },
  arrowUp: {
    s: {
      url: IconArrowUpS,
      alt: 'arrow up icon',
    },
  },
  arrowDown: {
    s: {
      url: IconArrowDownS,
      alt: 'arrow down icon',
    },
  },
  settings: {
    url: IconSettings,
    alt: 'settings icon',
  },
  add: {
    active: {
      url: IconAddActive,
      alt: 'icon-add-active',
    },
  },
  logout: {
    default: {
      url: IconLogout,
      alt: 'icon-logout',
      src: '/svg/ic-logout.svg',
    },
    hover: {
      url: IconLogoutHover,
      alt: 'icon-logout-hover',
      src: '/svg/ic-logout-hover.svg',
    },
  },
  nav: {
    active: {
      url: IconNavActive,
      alt: 'icon-nav-active',
    },
    default: {
      url: IconNav,
      alt: 'icon-nav',
    },
  },
   delete: {
    url: IconDelete,
    alt: 'icon-delete',
  },
};
