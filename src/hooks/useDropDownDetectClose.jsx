import { useState, useEffect } from 'react';

const useDropDownDetectClose = (ref, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen((prev) => !prev);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen];
};

export default useDropDownDetectClose;
