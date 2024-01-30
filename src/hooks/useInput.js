import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e) => {
    e.preventDefault();

    const name = e.currentTarget.getAttribute('name');
    const { value } = e.currentTarget;

    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return { value, handleValueChange };
};

export default useInput;
