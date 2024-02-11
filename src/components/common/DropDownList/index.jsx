import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';
import { DROPDOWN_MENU } from '@/constants';
import styles from './DropDownList.module.scss';

const cx = classNames.bind(styles);

const DropdownList = ({ isOpen, setIsOpen, onClickInput }) => {
  const { reset } = useFormContext();

  const handleItemClick = (e, value) => {
    e.stopPropagation();
    onClickInput(value);
    setIsOpen((prev) => !prev);
    reset();
  };

  return (
    isOpen && (
      <div className={cx('dropdownlist')}>
        <ul className={cx('dropdownlist-list')}>
          {DROPDOWN_MENU.map((item) => (
            <li
              className={cx('dropdownlist-list-item')}
              key={`key-dropdownlist-${item.id}`}
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
