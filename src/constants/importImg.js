import IconLogo from 'public/svg/ic-logo.svg';
import IconCalendar from 'public/svg/ic-calendar.svg';
import IconReset from 'public/svg/ic-reset.svg';
import IconEyeOn from 'public/svg/ic-eye-on.svg';
import IconEyeOff from 'public/svg/ic-eye-off.svg';

export const ICON = {
  logo: {
    url: IconLogo,
    alt: 'TickyTocky 로고',
  },
  calendar: {
    url: IconCalendar,
    alt: '캘린더 아이콘',
  },
  reset: {
    url: IconReset,
    alt: '초기화 아이콘',
  },
  eye: {
    on: {
      url: IconEyeOn,
      alt: '비밀번호 보기',
    },
    off: {
      url: IconEyeOff,
      alt: '비밀번호 숨기기',
    },
  },
};
