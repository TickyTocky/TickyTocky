import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
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

  useEffect(() => {
    if (!listValue) {
      if (type === 'column' && columnListData.length > 0) {
        setListValue(columnListData[0].id);
      } else if (type === 'assignee' && assigneeListData.length > 0) {
        setListValue(assigneeListData[0].userId);
      }
    }
  }, [listValue, setListValue, type, columnListData, assigneeListData]);

  const dropDownList =
    type === 'column'
      ? columnListData
      : type === 'assignee'
        ? assigneeListData
        : DROPDOWN_TIMELINE_MENU;

  const selectedColumnItem = dropDownList?.find((item) => item.id === listValue);

  const selectedItem = dropDownList
    ? dropDownList?.find((item) => item.userId === listValue)
    : '';

  const selectedNickname = selectedItem ? selectedItem.nickname : '';
  const selectedProfileImageUrl = selectedItem ? selectedItem.profileImageUrl : '';

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
        {type === 'column' && <DropDownTag value={selectedColumnItem?.title} />}
        {type === 'assignee' && listValue && (
          <Avatar
            profileName={selectedNickname}
            profileImage={selectedProfileImageUrl}
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
