import { useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Users from '@/api/users';
import useUserStore from '@/stores/useUserStore';
import useModalState from '@/hooks/useModalState';

const useProfileModalLogic = () => {
  const { user } = useUserStore();
  const { modalState, toggleModal } = useModalState([
    'profileChangeSuccessModal',
    'initialConfirmModal',
    'profileInitializeSuccessModal',
  ]);
  const { handleSubmit, formState, watch, setValue } = useFormContext();
  const [isChanged, setIsChanged] = useState(false);
  const [profileImageInit, setProfileImageInit] = useState(false);
  const profileImageValue = watch('profileImageUrl');
  const nicknameValue = watch('nickname');

  const onProfileSubmit = async (data) => {
    data.profileImageUrl =
      data.profileImageUrl?.length === 0 ? user.profileImageUrl : data.profileImageUrl;
    const { status } = await Users.edit(data);
    if (status === 200) {
      toggleModal('profileChangeSuccessModal');
      setIsChanged(true);
    }
  };

  const handleInitializeClick = async () => {
    const initialImageData = {
      profileImageUrl: null,
      nickname: user.nickname,
    };
    const { status } = await Users.edit(initialImageData);
    if (status === 200) {
      setIsChanged(true);
      setProfileImageInit(true);
      setValue('profileImageUrl', null);
      toggleModal('profileInitializeSuccessModal');
    }
  };

  useEffect(() => {
    if (user) {
      if (
        nicknameValue === user.nickname &&
        (profileImageValue === user.profileImageUrl || profileImageValue?.length === 0)
      ) {
        setIsChanged(true);
        return;
      }
      setIsChanged(false);
    }
  }, [nicknameValue, profileImageValue, user]);

  return {
    user,
    handleSubmit,
    formState,
    isChanged,
    profileImageInit,
    setProfileImageInit,
    onProfileSubmit,
    handleInitializeClick,
    modalState,
    toggleProfileChangeSuccessModal: () => toggleModal('profileChangeSuccessModal'),
    toggleProfileInitializeSuccessModal: () =>
      toggleModal('profileInitializeSuccessModal'),
    toggleInitialConfirmModal: () => toggleModal('initialConfirmModal'),
  };
};

export default useProfileModalLogic;
