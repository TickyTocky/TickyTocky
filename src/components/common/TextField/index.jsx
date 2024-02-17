import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import IconButton from '@/components/common/button/IconButton';
import BaseButton from '@/components/common/button/BaseButton';
import useCreateComment from '@/hooks/comment/useCreateComment';
import { ICON } from '@/constants';
import styles from './TextField.module.scss';

const cx = classNames.bind(styles);
const { reset: removeAll } = ICON;

const TextField = ({ cardId, columnId, dashboardId, name, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext();
  const isError = !!errors[name]?.message;
  const { onSubmit } = useCreateComment({ cardId, columnId, dashboardId, reset });

  return (
    <form className={cx('comment', { error: isError })} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register(name, {
          required: 'isRequired',
          minLength: {
            value: 1,
            message: 'Please write at least 1 characters',
          },
        })}
        {...props}
        maxLength={245}
        className={cx('comment-textarea')}
      ></textarea>
      <div className={cx('comment-footer')}>
        <IconButton svg={removeAll.url} alt={removeAll.alt} size={24} type='reset' />
        <BaseButton type='submit' variant='secondary' text='Send' size='md' />
      </div>
    </form>
  );
};

export default TextField;
