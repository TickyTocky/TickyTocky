import { useState } from 'react';
import { list } from './mock-dropdownlist.json';
import DropdownList from '.';

const ParentsDropDownList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onClickInput = (value) => {
    console.log(value);
  };

  return (
    <DropdownList
      data={list}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickInput={onClickInput}
    />
  );
};

export default ParentsDropDownList;
