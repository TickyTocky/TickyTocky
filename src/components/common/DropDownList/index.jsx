import classNames from 'classnames/bind';
import { DROPDOWN_MENU } from '@/constants';
import styles from './DropDownList.module.scss';

const cx = classNames.bind(styles);

const DropdownList = ({ isOpen, setIsOpen, onClickInput }) => {
  const handleItemClick = (e, value) => {
    e.stopPropagation();
    onClickInput(value);
    setIsOpen((prev) => !prev);
  };

  return (
    isOpen && (
      <div className={cx('dropdownlist')}>
        <ul className={cx('dropdownlist-list')}>
          {DROPDOWN_MENU.map((item) => (
            <li
              className={cx('dropdownlist-list-item')}
              key={item.id}
              onClick={(e) => handleItemClick(e, item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default DropdownList;
