import ImageUpload from 'public/images/img-upload.jpg';
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
import IconArrowDownDefault from 'public/svg/ic-arrow-down-default.svg';
import IconArrowDownActive from 'public/svg/ic-arrow-down-active.svg';
import IconTagRemove from 'public/svg/ic-remove-default.svg';
import IconKebab from 'public/svg/ic-kebab.svg';
import ImageHeaderBackground from 'public/images/landing-header-background.png';
import ImageBodyBackground from 'public/images/landing-body-background.png';
import ImageOverviewBackground from 'public/images/landing-overview-background.png';
import IconLandingDarkMode from 'public/svg/ic-landing-darkmode.svg';
import IconLandingDashboard from 'public/svg/ic-landing-dashboard.svg';
import IconLandingDevice from 'public/svg/ic-landing-device.svg';
import IconLandingInvite from 'public/svg/ic-landing-invite.svg';
import IconLandingThumbnail from 'public/svg/ic-landing-thumbnail.svg';
import IconLandingGithub from 'public/svg/ic-landing-github.svg';
import IconLandingOverviewInvite from 'public/images/landing-overview-invite.png';
import IconLandingOverviewThumbnail from 'public/images/landing-overview-thumbnail.jpg';
import IconLandingOverviewDashboard from 'public/images/landing-overview-dashboard.jpg';
import IconCalendarActive from 'public/svg/ic-calendar.svg';
import IconCalendar from 'public/svg/ic-calendar-default.svg';

export const IMAGE = {
  uploadImage: {
    url: ImageUpload,
    alt: 'upload-image',
  },
};

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
  },
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
  DropDownArrowDown: {
    default: {
      url: IconArrowDownDefault,
      alt: 'ic-arrow-down-default',
    },
    active: {
      url: IconArrowDownActive,
      alt: 'ic-arrow-down-active',
    },
  },
  tagRemove: {
    url: IconTagRemove,
    alt: 'remove-icon',
  },
  kebab: {
    url: IconKebab,
    alt: 'icon-kebab',
  },
  background: {
    header: {
      url: ImageHeaderBackground,
      alt: 'img-background-header',
    },
    body: {
      url: ImageBodyBackground,
      alt: 'img-background-body',
    },
    overview: {
      darkmode: {
        url: ImageOverviewBackground,
        alt: 'ic-landing-overview-darkmode',
      },
      dashboard: {
        url: IconLandingOverviewDashboard,
        alt: 'ic-landing-overview-dashboard',
      },
      device: {
        url: ImageOverviewBackground,
        alt: 'ic-landing-overview-device',
      },
      invite: {
        url: IconLandingOverviewInvite,
        alt: 'ic-landing-overview-invite',
      },
      thumbnail: {
        url: IconLandingOverviewThumbnail,
        alt: 'ic-landing-overview-thumbnail',
      },
    },
  },
  landing: {
    darkmode: {
      url: IconLandingDarkMode,
      alt: 'ic-landing-darkmode',
    },
    dashboard: {
      url: IconLandingDashboard,
      alt: 'ic-landing-dashboard',
    },
    device: {
      url: IconLandingDevice,
      alt: 'ic-landing-device',
    },
    invite: {
      url: IconLandingInvite,
      alt: 'ic-landing-invite',
    },
    thumbnail: {
      url: IconLandingThumbnail,
      alt: 'ic-landing-thumbnail',
    },
    github: {
      url: IconLandingGithub,
      alt: 'ic-landing-github',
    },
  },
  calendar: {
    default: {
      url: IconCalendar,
      alt: 'calendar-icon',
    },
    active: {
      url: IconCalendarActive,
      alt: 'calendar-icon',
    },
  },
};
