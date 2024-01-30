import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './TagField.module.scss';

const cx = classNames.bind(styles);
const { tagDelete } = ICON;

const TagField = ({ tagList, setTagList }) => {
  const [tagItem, setTagItem] = useState('');

  const MINIMUM_LENGTH = 5;

  const handleKeyPress = (e) => {
    if (tagItem.length !== 0 && e.key === 'Enter') {
      handleSubmitTagItem();
    }
  };

  const handleDelete = (deleteTagItem) => {
    const filteredTagList = tagList.filter((tagItem) => tagItem !== deleteTagItem);
    setTagList(filteredTagList);
  };

  const handleInputChange = (e) => {
    setTagItem(e.target.value);
  };

  const handleSubmitTagItem = () => {
    setTagList((prev) => [...prev, tagItem]);
    setTagItem('');
  };

  return (
    <div className={cx('tagsinput')}>
      <span className={cx('tagsinput-name')}>Tag</span>
      <div className={cx('tagsinput-tags')}>
        {tagList.map((tagItem, index) => (
          <li className={cx('tagsinput-tags-item')} key={`key-${index}`}>
            <span className={cx('tagsinput-tag-name')}>
              {tagItem.length > MINIMUM_LENGTH
                ? `${tagItem.slice(0, MINIMUM_LENGTH)}...`
                : tagItem}
            </span>
            <Image
              width={10}
              height={10}
              src={tagDelete.url}
              alt={tagDelete.alt}
              className={cx('tagsinput-tags-item-deletebutton')}
              onClick={() => handleDelete(tagItem)}
            />
          </li>
        ))}
        <input
          className={cx('tagsinput-input')}
          type='text'
          placeholder='Press enter to add tags'
          tabIndex={2}
          onChange={handleInputChange}
          value={tagItem}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default TagField;
