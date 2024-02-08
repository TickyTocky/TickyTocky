import { useFormContext, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import classNames from 'classnames/bind';
import useDatePicker from '@/hooks/useDatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateField.module.scss';

const cx = classNames.bind(styles);

const DateField = ({ label, name, isRequired = false }) => {
  const { control } = useFormContext();
  const { selectedDate } = useDatePicker();

  return (
    <div className={cx('date-picker')}>
      <label className={cx('date-picker-label', { required: isRequired })}>{label}</label>
      <Controller
        control={control}
        name={name}
        defaultValue={selectedDate}
        render={({ field: { value, onChange } }) => (
          <DatePicker
            selected={value}
            onChange={(date) => {
              onChange(date);
            }}
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={30}
            dateFormat='yyyy-MM-dd HH:mm'
            formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
            calendarClassName={cx('date-picker-calendar')}
          />
        )}
      />
    </div>
  );
};

export default DateField;
