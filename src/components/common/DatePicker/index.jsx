import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import useDatePicker from '@/hooks/useDatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';

const cx = classNames.bind(styles);

const DatePickerInput = ({ label, isRequired = false }) => {
  const { control } = useFormContext();
  const { selectedDate, setSelectedDate } = useDatePicker();

  return (
    <div className={cx('date-picker')}>
      <label className={cx('date-picker-label', { required: isRequired })}>{label}</label>
      <Controller
        control={control}
        name='date'
        defaultValue={selectedDate}
        render={({ field }) => {
          return (
            <DatePicker
              {...field}
              calendarClassName={cx('date-picker-calendar')}
              selected={field.value}
              onChange={(date) => {
                setSelectedDate(date);
                field.onChange(date);
              }}
              dateFormat='yyyy. MM. dd ・ hh:mm'
              showTimeSelect
              timeIntervals={30}
              timeFormat='hh:mm'
              formatWeekDay={(nameOfDay) => {
                return nameOfDay.substring(0, 1);
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default DatePickerInput;
