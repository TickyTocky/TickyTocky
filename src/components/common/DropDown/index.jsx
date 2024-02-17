import { useRef } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Avatar from '@/components/common/Avatar';
import DropDownTag from '@/components/common/DropDownTag';
import useDropDownLogic from '@/hooks/logic/useDropDownLogic';
import { ICON } from '@/constants';
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
  const {
    isOpen,
    timelineValue,
    dropDownList,
    selectedItem,
    handleOpenClick,
    handleListItemClick,
  } = useDropDownLogic({
    columnListData,
    assigneeListData,
    listValue,
    setListValue,
    type,
    DROPDOWN_TIMELINE_MENU,
    onClickInput,
    dropDownRef,
  });

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
            userId={selectedItem.userId}
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
                key={`key-dropdown-column-${id}`}
                className={cx('dropdown-list-item')}
                onClick={(e) => handleListItemClick(e, id)}
              >
                <DropDownTag value={title} />
              </li>
            ))}
          {type === 'assignee' &&
            dropDownList.map(({ id, userId, nickname, profileImageUrl }) => (
              <li
                key={`key-dropdown-assignee-${id}`}
                className={cx('dropdown-list-item')}
                onClick={(e) => handleListItemClick(e, userId)}
              >
                <Avatar
                  userId={userId}
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
                key={`key-dropdown-timeline-${id}`}
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
