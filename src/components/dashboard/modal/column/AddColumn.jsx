import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import InputField from '@/components/common/InputField';
import BaseButton from '@/components/common/button/BaseButton';
import useColumnModal from '@/hooks/column/useColumnModal';
import styles from './ColumnModal.module.scss';

const cx = classNames.bind(styles);

const AddColumn = ({ dashboardId, closeModal }) => {
  const { handleSubmit } = useFormContext();

  const { MAX_TEXT_LENGTH, onSubmit } = useColumnModal({ dashboardId, closeModal });

  return (
    <>
      <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label='Title'
          name='title'
          type='text'
          placeholder='Enter the title'
          maxLength={MAX_TEXT_LENGTH}
          isRequired
        />
        <div className={cx('button', 'button-top')}>
          <div onClick={closeModal}>
            <BaseButton size='lg' variant='outline' type='button' text='Cancel' />
          </div>
          <BaseButton size='lg' variant='secondary' type='submit' text='Create' />
        </div>
      </form>
    </>
  );
};

export default AddColumn;
