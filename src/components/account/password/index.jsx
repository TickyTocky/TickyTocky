import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import Auth from '@/api/auth';
import BaseButton from '@/components/common/button/BaseButton';
import IndividualInput from '@/components/account/individualInput';
import SuccessModal from '@/components/common/SuccessModal';
import useModalState from '@/hooks/useModalState';
import styles from './Password.module.scss';

const cx = classNames.bind(styles);

const PasswordChange = () => {
  const { modalState, toggleModal } = useModalState(['passwordSuccess']);
  const formMethods = useForm({ mode: 'all' });
  const onPasswordSubmit = async (data) => {
    const { password, newPassword } = data;
    const putData = { password, newPassword };
    try {
      const { status } = await Auth.changePassword(
        putData,
        formMethods.setError,
        formMethods.reset
      );
      if (status === 204) {
        toggleModal('passwordSuccess');
      }
    } catch (e) {
      console.error(e);
    }
  };
  const { isDirty, isValid } = formMethods.formState;
  return (
    <>
      <SuccessModal
        desc='Password modify success'
        isModalOpen={modalState.passwordSuccess}
        closeModal={() => toggleModal('passwordSuccess')}
      />
      <div className={cx('password')}>
        <form
          className={cx('password-form')}
          onSubmit={formMethods.handleSubmit(onPasswordSubmit)}
        >
          <IndividualInput
            label='Current password'
            name='password'
            placeholder='Current password'
            type='password'
            formMethods={formMethods}
            autoComplete='password'
          />
          <IndividualInput
            label='New password'
            name='newPassword'
            placeholder='New password'
            isCurrentPassword={false}
            type='password'
            formMethods={formMethods}
            autoComplete='new-password'
          />
          <IndividualInput
            label='New password confirm'
            name='passwordConfirm'
            placeholder='New password confirm'
            isCurrentPassword={false}
            type='password'
            formMethods={formMethods}
            autoComplete='new-password'
          />
          <div className={cx('password-btn-container')}>
            <div className={cx('password-btn-box')}>
              <BaseButton
                size='xl'
                text='Edit'
                variant='secondary'
                type='submit'
                disabled={!isDirty || !isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PasswordChange;
