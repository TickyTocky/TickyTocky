import { useRef } from 'react';
import classNames from 'classnames/bind';
import useDropDownDetectClose from '@/hooks/useDropDownDetectClose';
import { ICON } from '@/constants/importImage';
import { list } from './mock-dropdownlist.json';

import IconButton from '../button/IconButton';
import DropdownList from '../DropDownList';
import styles from './KebabDropDown.module.scss';

const cx = classNames.bind(styles);
const { kebab } = ICON;

const KebabDropDown = ({ onClickInput, size = 'lg' }) => {
  const SIZE = { lg: 32, sm: 24 };
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDropDownDetectClose(dropDownRef);

  const handleOpenClick = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cx('kebabdropdown', { size })}
      ref={dropDownRef}
      onClick={handleOpenClick}
    >
      <IconButton
        svg={kebab.url}
        size={SIZE[size]}
        alt={kebab.alt}
        type='button'
        outline={size === 'sm'}
      />
      <DropdownList
        size={size}
        data={list}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClickInput={onClickInput}
      />
    </div>
  );
};

export default KebabDropDown;
