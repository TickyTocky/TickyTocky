import IconArrowDownMdDefault from 'public/svg/ic-arrow-down-m-dropdown.svg';
import IconArrowDownMdActive from 'public/svg/ic-arrow-up-m-dropdown.svg';
import IconAddDefault from 'public/svg/ic-add-s.svg';
import IconArrowUpS from 'public/svg/ic-arrow-up-s.svg';
import IconArrowUpM from 'public/svg/ic-arrow-up-m.svg';
import IconArrowDownS from 'public/svg/ic-arrow-down-s.svg';
import IconArrowDownM from 'public/svg/ic-arrow-down-m.svg';
import IconSettings from 'public/svg/ic-settings.svg';

export const ICON = {
  arrow: {
    default: {
      md: { url: IconArrowDownMdDefault, alt: 'ic-arrow-down-m-default' },
    },
    active: {
      md: { url: IconArrowDownMdActive, alt: 'ic-arrow-down-m-active' },
    },
  },
  add: {
    default: {
      url: IconAddDefault,
      alt: 'add icon',
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
  },
};
