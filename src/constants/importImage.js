import IconAddActive from 'public/svg/ic-add-active.svg';
import IconLogout from 'public/svg/ic-logout.svg';
import IconLogoutHover from 'public/svg/ic-logout-hover.svg';
import IconNavActive from 'public/svg/ic-nav-active.svg';
import IconNav from 'public/svg/ic-nav.svg';

export const ICON = {
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
};
