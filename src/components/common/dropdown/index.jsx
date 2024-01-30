import Image from 'next/image';
import { useRef } from 'react';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import useDropDownDetectClose from '@/hooks/useDropDownDetectClose';
import DropDownTag from '@/components/common/DropDownTag';
import Avatar from '@/components//common/avatar';
import styles from './DropDown.module.scss';

const cx = classNames.bind(styles);
const { arrow } = ICON;

const DropDown = ({
  columnListData,
  assigneeListData,
  listValue,
  setListValue,
  type = 'column',
}) => {
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDropDownDetectClose(dropDownRef, false);
  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  const dropDownList = type === 'column' ? columnListData : assigneeListData;

  const selectedItem = dropDownList.find((item) => item.userId === listValue);

  const selectedNickname = selectedItem ? selectedItem.nickname : '';
  const selectedProfileImageUrl = selectedItem ? selectedItem.profileImageUrl : '';

  const handleListItemClick = (e, value) => {
    e.stopPropagation();
    setListValue(value);
    handleOpenClick();
  };

  return (
    <div className={cx('dropdown')} ref={dropDownRef}>
      <div
        className={cx('dropdown-selected', { active: isOpen })}
        onClick={handleOpenClick}
      >
        {type === 'column' && (
          <DropDownTag value={listValue ? dropDownList[listValue - 1]?.title : ''} />
        )}
        {type === 'assignee' && listValue && (
          <Avatar
            profileName={selectedNickname}
            profileImage={selectedProfileImageUrl}
            textColor='gray10'
            avatarSize='md'
          />
        )}
      </div>
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
        </ul>
      )}
    </div>
  );
};

export default DropDown;
