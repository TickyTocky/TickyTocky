import Image from 'next/image';
import { useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './dropdown.module.scss';
import { Icon } from '@/constants/importImage';

import useDropDownDetectClose from '@/hooks/useDropDownDetectClose';

const cx = classNames.bind(styles);
const { dropdownarrow } = Icon;

const ClickedValue = ({ value, setListIdentify, setIsOpen, isOpen }) => {
  const ValueClick = () => {
    setListIdentify(value);
    setIsOpen(!isOpen);
  };
  return (
    <li className={cx('dropdown-list-item')} onClick={ValueClick}>
      {value}
    </li>
  );
};

const DropDown = () => {
  const [listIdentify, setListIdentify] = useState('');
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDropDownDetectClose(dropDownRef, false);
  const dropDownList = [1, 2, 3]; // [1, 2, 3, ...]

  const handleOpenClick = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div className={cx('dropdown')} ref={dropDownRef}>
      <div
        className={cx('dropdown-selected', { active: isOpen })}
        onClick={handleOpenClick}
      >
        {listIdentify}
        <div className={cx('dropdown-img-container')}>
          <Image
            width={24}
            height={24}
            src={isOpen ? dropdownarrow.active.url : dropdownarrow.default.url}
            alt={isOpen ? dropdownarrow.active.alt : dropdownarrow.default.alt}
            className={cx('image-transition', { 'image-open': isOpen })}
          />
        </div>
        {isOpen && (
          <ul className={cx('dropdown-list')}>
            {dropDownList.map((value, index) => {
              return (
                <ClickedValue
                  key={index}
                  value={value}
                  setIsOpen={setIsOpen}
                  setListIdentify={setListIdentify}
                  isOpen={isOpen}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
