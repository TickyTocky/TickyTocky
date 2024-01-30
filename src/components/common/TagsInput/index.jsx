import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './TagsInput.module.scss';

const cx = classNames.bind(styles);
const { tagDelete } = ICON;

const Tagsinput = ({ tagList, setTagList }) => {
  const [tagItem, setTagItem] = useState('');

  const handleKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };
  const handleDelete = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter((tagItem) => tagItem !== deleteTagItem);
    setTagList(filteredTagList);
  };
  const handleInputChange = (e) => {
    setTagItem(e.target.value);
  };
  const submitTagItem = () => {
    const updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  return (
    <div className={cx('tagsinput')}>
      <span className={cx('tagsinput-name')}>Tag</span>
      <div className={cx('tagsinput-tags')}>
        {tagList.map((tagItem, index) => (
          <li className={cx('tagsinput-tags-item')} key={`key-${index}`}>
            <span className={cx('tagsinput-tag-name')}>{tagItem}</span>
            <Image
              width={10}
              height={10}
              src={tagDelete.url}
              alt={tagDelete.alt}
              className={cx('tagsinput-tags-item-deletebutton')}
              onClick={handleDelete}
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

export default Tagsinput;