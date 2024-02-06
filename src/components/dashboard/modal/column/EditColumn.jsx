import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import Columns from '@/api/columns';
import InputField from '@/components/common/InputField';
import BaseButton from '@/components/common/button/BaseButton';
import styles from './ColumnModal.module.scss';

const cx = classNames.bind(styles);

const EditColumn = ({ dashboardId, columnId, title, closeModal }) => {
  const { handleSubmit, setValue } = useFormContext();

  const onSubmit = async (data) => {
    await Columns.edit(columnId, data.title);
    await Columns.getList(dashboardId);
    closeModal();
    setValue('title', '');
  };

  return (
    <>
      <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label='title'
          name='title'
          type='text'
          placeholder='Enter the title'
          defaultValue={title}
          maxLength={13}
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
