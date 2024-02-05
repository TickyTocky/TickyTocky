import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import DateField from '@/components/common/DateField';
import InputField from '@/components/common/InputField';
import ImageField from '@/components/common/ImageField';
import TagField from '@/components/common/TagField';
import DropDown from '@/components/common/DropDown/index';
import useTagList from '@/hooks/useTagList';
import styles from './CreateCard.module.scss';

const cx = classNames.bind(styles);

const CreateCrad = ({ columnTitle }) => {
  const { tagList, setTagList } = useTagList();

  return (
    <form className={cx('container')}>
      <div className={cx('field')}>
        <div className={cx('field-left')}>
          <ImageField name='imageUrl' />
        </div>
        <div className={cx('field-right')}>
          <div className={cx('col-2')}>
            <div className={cx('col-2-name')}>
              <p className={cx('label')}>Column Name</p>
              <div className={cx('disabled')}>
                <span className={cx('tag')}>{columnTitle}</span>
              </div>
            </div>
            <div className={cx('col-2-manager')}>
              <p className={cx('label')}>Manager</p>
              <DropDown />
            </div>
          </div>
          <InputField label='Title' name='title' type='text' isRequired />
          <InputField label='Explanation' name='description' type='textarea' isRequired />
          <DateField label='Deadline' />
          <TagField tagList={tagList} setTagList={setTagList} />
        </div>
      </div>
      <div className={cx('field-submit')}>
        <BaseButton type='button' size='lg' variant='outline' text='Cancel' />
        <BaseButton type='submit' size='lg' variant='secondary' text='Create' />
      </div>
    </form>
  );
};

export default CreateCrad;
