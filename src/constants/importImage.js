import IconAddDefault from 'public/svg/ic-add-s.svg';
import IconAddActive from 'public/svg/ic-add-active-m.svg';
import IconLogout from 'public/svg/ic-logout.svg';
import IconLogoutHover from 'public/svg/ic-logout-hover.svg';
import IconNavActive from 'public/svg/ic-nav-active.svg';
import IconArrowUpS from 'public/svg/ic-arrow-up-s.svg';
import IconArrowUpM from 'public /svg/ic-arrow-up-m.svg';
import IconArrowDownS from 'public/svg/ic-arrow-down-s.svg';
import IconArrowDownM from 'public/svg/ic-arrow-down-m.svg';
import IconSettings from 'public/svg/ic-settings.svg';

export const Icon = {
  add: {
    default: {
      url: IconAddDefault,
      alt: 'add icon',
    },
    active: {
      url: IconAddActive,
      alt: 'icon-add-active-m',
    },
  },
  logout: {
    default: {
      url: IconLogout,
      alt: 'icon-logout-default',
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
  },
  arrowUp: {
    s: {
      url: IconArrowUpS,
      alt: 'arrow up icon',
    },
    m: {
      url: IconArrowUpM,
      alt: 'arrow up icon',
    },
  },
  arrowDown: {
    s: {
      url: IconArrowDownS,
      alt: 'arrow down icon',
    },
    m: {
      url: IconArrowDownM,
      alt: 'arrow down icon',
    },
  },
  settings: {
    url: IconSettings,
    alt: 'settings icon',
  },
};
