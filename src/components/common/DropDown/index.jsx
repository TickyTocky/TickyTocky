import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Avatar from '@/components/common/Avatar';
import DropDownTag from '@/components/common/DropDownTag';
import useDropDownDetectClose from '@/hooks/useDropDownDetectClose';
import { ICON } from '@/constants/importImage';
import { DROPDOWN_TIMELINE_MENU } from '@/constants/dropdownTimelineMenu';
import styles from './DropDown.module.scss';

const cx = classNames.bind(styles);
const { DropDownArrowDown } = ICON;

const DropDown = ({
  listValue,
  setListValue,
  onClickInput,
  columnListData = [],
  assigneeListData = [],
  type = 'column',
}) => {
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDropDownDetectClose(dropDownRef);
  const [timelineValue, setTimelineValue] = useState('Latest');
  const [dropDownList, setDropDownList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    let list = [];
    if (type === 'column') {
      list = columnListData;
    } else if (type === 'assignee') {
      list = assigneeListData;
    } else {
      list = DROPDOWN_TIMELINE_MENU;
    }
    setDropDownList(list);

    const foundItem = list?.find(
      (item) => item.id === listValue || item.userId === listValue
    );
    setSelectedItem(foundItem || {});
  }, [columnListData, assigneeListData, listValue, type]);

  useEffect(() => {
    if (type === 'assignee' && assigneeListData?.length > 0 && !listValue) {
      setListValue(assigneeListData[0]?.userId);
    }
  }, [assigneeListData, listValue, setListValue, type]);

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleListItemClick = (e, value) => {
    e.stopPropagation();
    if (type === 'timeline') {
      onClickInput(value);
      setTimelineValue(value);
    } else {
      setListValue(value);
    }
    handleOpenClick();
  };

  return (
    <div
      className={cx('dropdown', { 'timeline-dropdown': type === 'timeline' })}
      ref={dropDownRef}
    >
      <div
        className={cx('dropdown-selected', { active: isOpen })}
        onClick={handleOpenClick}
      >
        {type === 'column' && <DropDownTag value={selectedItem?.title} />}
        {type === 'assignee' && listValue && (
          <Avatar
            profileName={selectedItem.nickname}
            profileImage={selectedItem.profileImageUrl}
            textColor='gray10'
            avatarSize='md'
          />
        )}
        {type === 'timeline' && timelineValue}
      </div>
      <div className={cx('dropdown-img-container')}>
        <Image
          width={24}
          height={24}
          src={isOpen ? DropDownArrowDown.active.url : DropDownArrowDown.default.url}
          alt={isOpen ? DropDownArrowDown.active.alt : DropDownArrowDown.default.alt}
          className={cx('image-transition', { 'image-open': isOpen })}
        />
      </div>
      {isOpen && (
        <ul className={cx('dropdown-list')}>
          {type === 'column' &&
            dropDownList.map(({ title, id }) => (
              <li
                key={`key-${id}`}
                className={cx('dropdown-list-item')}
                onClick={(e) => handleListItemClick(e, id)}
              >
                <DropDownTag value={title} />
              </li>
            ))}
          {type === 'assignee' &&
            dropDownList.map(({ id, userId, nickname, profileImageUrl }) => (
              <li
                key={`key-${id}`}
                className={cx('dropdown-list-item')}
                onClick={(e) => handleListItemClick(e, userId)}
              >
                <Avatar
                  profileName={nickname}
                  profileImage={profileImageUrl}
                  textColor='gray10'
                  avatarSize='md'
                />
              </li>
            ))}
          {type === 'timeline' &&
            dropDownList.map(({ id, name }) => (
              <li
                key={`key-${id}`}
                className={cx('dropdown-list-item')}
                onClick={(e) => handleListItemClick(e, name)}
              >
                {name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
