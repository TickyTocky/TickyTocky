import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import Columns from '@/api/columns';
import InputField from '@/components/common/InputField';
import BaseButton from '@/components/common/button/BaseButton';
import styles from './ColumnModal.module.scss';

const cx = classNames.bind(styles);

const EditColumn = ({ dashboardId, columnId, title, closeModal }) => {
  const { handleSubmit, reset } = useFormContext();

  const MAX_TEXT_LENGTH = 13;

  const onSubmit = async (data) => {
    if (data.title !== '' && data.title.length <= MAX_TEXT_LENGTH) {
      await Columns.edit(columnId, data.title);
      await Columns.getList(dashboardId);
      closeModal();
      reset();
    }
  };

  return (
    <>
      <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label='Title'
          name='title'
          type='text'
          placeholder='Enter the title'
          defaultValue={title}
          maxLength={MAX_TEXT_LENGTH}
          isRequired
        />
        <div className={cx('button', 'button-top')}>
          <div onClick={closeModal}>
            <BaseButton size='lg' variant='outline' type='button' text='Cancel' />
          </div>
          <BaseButton size='lg' variant='secondary' type='submit' text='Edit' />
        </div>
      </form>
    </>
  );
};

export default EditColumn;
