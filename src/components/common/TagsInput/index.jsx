import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './TagsInput.module.scss';

const cx = classNames.bind(styles);
const { tagDelete } = ICON;

const TagsInput = ({ tagList, setTagList }) => {
  const [tagItem, setTagItem] = useState('');

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter((tagItem) => {
      return tagItem !== deleteTagItem;
    });
    setTagList(filteredTagList);
  };

  return (
    <div className={cx('tagsinput')}>
      <span className={cx('tagsinput-name')}>Tag</span>
      <div className={cx('tagsinput-tags')}>
        {tagList.map((tagItem, index) => {
          return (
            <li className={cx('tagsinput-tags-item')} key={`key-${index}`}>
              <span className={cx('tagsinput-tag-name')}>{tagItem}</span>
              <Image
                width={10}
                height={10}
                src={tagDelete.url}
                alt={tagDelete.alt}
                className={cx('tagsinput-tags-item-deletebutton')}
                onClick={deleteTagItem}
              />
            </li>
          );
        })}
        <input
          className={cx('tagsinput-input')}
          type='text'
          placeholder='Press enter to add tags'
          tabIndex={2}
          onChange={(e) => {
            return setTagItem(e.target.value);
          }}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default TagsInput;
