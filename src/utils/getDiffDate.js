import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

export const getDiffDate = (data) => {
  dayjs.extend(utc);
  dayjs.locale('en');
  dayjs.extend(relativeTime);

  return dayjs().to(dayjs(data).utc().format('YYYY-MM-DD HH:mm:ss'));
};
