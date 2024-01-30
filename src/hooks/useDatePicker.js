import { useState } from 'react';

const useDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return { selectedDate, setSelectedDate };
};

export default useDatePicker;
