import { useRef } from 'react';
import classNames from 'classnames/bind';
import useDropDownDetectClose from '@/hooks/useDropDownDetectClose';
import { ICON } from '@/constants';
import IconButton from '@/components/common/button/IconButton';
import DropdownList from '@/components/common/DropDownList';
import styles from './KebabDropDown.module.scss';

const cx = classNames.bind(styles);
const { kebab } = ICON;

const KebabDropDown = ({ onClickInput }) => {
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDropDownDetectClose(dropDownRef);

  const handleOpenClick = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
    if (isOpen) {
      document.activeElement.blur();
    }
  };

  return (
    <div className={cx('kebabdropdown')} ref={dropDownRef} onClick={handleOpenClick}>
      <IconButton svg={kebab.url} size='md' alt={kebab.alt} outline type='button' />
      <DropdownList isOpen={isOpen} setIsOpen={setIsOpen} onClickInput={onClickInput} />
    </div>
  );
};

export default KebabDropDown;
