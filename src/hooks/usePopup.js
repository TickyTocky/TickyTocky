import { useEffect, useRef, useState } from 'react';

function usePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, togglePopup, popupRef };
}

export default usePopup;
