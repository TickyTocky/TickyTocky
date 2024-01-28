import Image from 'next/image';
import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Icon } from '@/constants/importImage';
import useDropDownDetectClose from '@/hooks/useDropDownDetectClose';
import styles from './dropdown.module.scss';

const cx = classNames.bind(styles);
const { arrow } = Icon;

const DropDown = () => {
  const [listIdentify, setListIdentify] = useState('');
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDropDownDetectClose(dropDownRef, false);
  const dropDownList = [1, 2, 3]; // [1, 2, 3, ...]

  const handleOpenClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const ValueClick = (value) => {
    setListIdentify(value);
    handleOpenClick();
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
            src={isOpen ? arrow.active.md.url : arrow.default.md.url}
            alt={isOpen ? arrow.active.md.alt : arrow.default.md.alt}
            className={cx('image-transition', { 'image-open': isOpen })}
          />
        </div>
        {isOpen && (
          <ul className={cx('dropdown-list')}>
            {dropDownList.map((value, index) => {
              return (
                <li
                  key={`key-${index}`}
                  className={cx('dropdown-list-item')}
                  onClick={(e) => {
                    e.stopPropagation();
                    ValueClick(value);
                  }}
                >
                  {value}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
