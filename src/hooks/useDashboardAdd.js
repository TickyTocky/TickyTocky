import { useEffect, useRef, useState } from 'react';

const useDashboardAdd = () => {
  const [color, setColor] = useState('');
  const [inputValue, setInputValue] = useState();
  const firstButtonRef = useRef();
  const COLOR_LIST = ['#924BFF', '#406AFF', '#00A3FF', '#1FB387', '#FF862E', '#F34642'];

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
    COLOR_LIST,
    handleOnChange,
    handleDefaultColorClick,
  };
};

export default useDashboardAdd;
