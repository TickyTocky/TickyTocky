import React from 'react';
import classNames from 'classnames/bind';
import styles from './DropDownList.module.scss';

const cx = classNames.bind(styles);

const DropdownList = ({ data, isOpen, setIsOpen, onClickInput }) => {
  const handleItemClick = (e, value) => {
    onClickInput(value);
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={cx('dropdownlist')}>
      {isOpen && (
        <ul className={cx('dropdownlist-list')}>
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
      )}
    </div>
  );
};

export default DropdownList;
