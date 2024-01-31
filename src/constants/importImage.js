import IconAdd from 'public/svg/ic-add.svg';
import IconAddActive from 'public/svg/ic-add-active.svg';
import IconLogout from 'public/svg/ic-logout.svg';
import IconLogoutHover from 'public/svg/ic-logout-hover.svg';
import IconNavActive from 'public/svg/ic-nav-active.svg';
import IconNav from 'public/svg/ic-nav.svg';
import IconDelete from 'public/svg/ic-delete.svg';
import IconArrowRight from 'public/svg/ic-arrow-right.svg';
import IconLogo from 'public/svg/ic-logo.svg';
import IconHome from 'public/svg/ic-home.svg';
import IconSettings from 'public/svg/ic-settings.svg';
import IconArrowUp from 'public/svg/ic-arrow-up.svg';
import IconArrowUpActive from 'public/svg/ic-arrow-up-active.svg';
import IconArrowDown from 'public/svg/ic-arrow-down.svg';

export const ICON = {
  add: {
    default: {
      url: IconAdd,
      alt: 'icon-add',
    },
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
  arrowRight: {
    url: IconArrowRight,
    alt: 'icon-arrow-right',
  logo: {
    url: IconLogo,
    alt: 'icon-logo',
  },
  home: {
    url: IconHome,
    alt: 'icon-home',
  },
  settings: {
    url: IconSettings,
    alt: 'icon-settings',
  },
  arrowUp: {
    default: {
      url: IconArrowUp,
      alt: 'icon-arrow-up',
    },
    active: {
      url: IconArrowUpActive,
      alt: 'icon-arrow-up-active',
    },
  },
  arrowDown: {
    url: IconArrowDown,
    alt: 'icon-arrow-down',
  },
};
