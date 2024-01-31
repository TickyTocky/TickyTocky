import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DropDownList.module.scss';

const cx = classNames.bind(styles);

const DropdownList = ({ data, isOpen, setIsOpen, onClickInput }) => {
  const dropdownRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(dropdownRef.current?.offsetHeight || 0);
  }, [isOpen]);

  const handleItemClick = (e, value) => {
    onClickInput(value);
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cx('dropdownlist', { open: isOpen }, { close: !isOpen })}
      style={{ maxHeight: isOpen ? `${height}px` : '0' }}
    >
      <ul className={cx('dropdownlist-list')} ref={dropdownRef}>
        {data.map((item) => (
          <li
            className={cx('dropdownlist-list-item')}
            key={`key-${item.index}`}
            onClick={(e) => handleItemClick(e, item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
