import { useEffect, useRef, useState } from 'react';

const useCreateDashboard = () => {
  const [color, setColor] = useState('');
  const [inputValue, setInputValue] = useState();
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
