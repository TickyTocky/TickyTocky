import { DEFAULT_BLACK } from '@/constants';
import { useEffect, useRef, useState } from 'react';

const useCreateDashboard = (dashboardColor = DEFAULT_BLACK, dashboardName = '') => {
  const [color, setColor] = useState(dashboardColor);
  const [inputValue, setInputValue] = useState(dashboardName);
  const firstButtonRef = useRef();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDefaultColorClick = () => {
    setTimeout(() => {
      if (firstButtonRef.current) {
        firstButtonRef.current.click();
        firstButtonRef.current.focus();
      }
    }, 0);
  };

  useEffect(() => {
    handleDefaultColorClick();
  }, [firstButtonRef]);

  return {
    color,
    setColor,
    firstButtonRef,
    inputValue,
    handleOnChange,
    handleDefaultColorClick,
  };
};

export default useCreateDashboard;
