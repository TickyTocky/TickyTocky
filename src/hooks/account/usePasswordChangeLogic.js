import { useForm } from 'react-hook-form';
import Auth from '@/api/auth';
import useModalState from '@/hooks/useModalState';

const usePasswordChangeLogic = () => {
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

  return {
    formMethods,
    isDirty,
    isValid,
    onPasswordSubmit,
    modalState,
    togglePasswordChangeSuccessModal: () => toggleModal('passwordSuccess'),
  };
};

export default usePasswordChangeLogic;
