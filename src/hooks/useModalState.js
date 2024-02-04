import { useState } from 'react';

const useModalState = (ids) => {
  const [modalState, setModalState] = useState(
    ids.reduce((acc, id) => {
      acc[id] = false;
      return acc;
    }, {})
  );

  const toggleModal = (id) => {
    setModalState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return { modalState, toggleModal };
};

export default useModalState;
