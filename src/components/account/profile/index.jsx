import { useFormContext } from 'react-hook-form';
import useUserStore from '@/stores/useUserStore';
import Users from '@/api/users';
import SuccessModal from '@/components/common/SuccessModal';
import AccountProfileView from './AccountProfileView';
import useModalState from '@/hooks/useModalState';
import { useEffect, useState } from 'react';

const AccountProfileLogic = () => {
  const { modalState, toggleModal } = useModalState(['successModal']);
  const { user } = useUserStore();
  const { handleSubmit, formState, watch } = useFormContext();
  const [isChanged, setIsChanged] = useState(false);
  const [profileImageInit, setProfileImageInit] = useState(false);
  const profileImageValue = watch('profileImageUrl');
  const nicknameValue = watch('nickname');

  const onProfileSubmit = async (data) => {
    data.profileImageUrl =
      data.profileImageUrl.length === 0 ? null : data.profileImageUrl;
    const { status } = await Users.edit(data);
    if (status === 200) {
      toggleModal('successModal');
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

  return (
    <>
      <SuccessModal
        desc='Profile modify success'
        isModalOpen={modalState.successModal}
        closeModal={() => toggleModal('successModal')}
      />
      <AccountProfileView
        user={user}
        handleSubmit={handleSubmit(onProfileSubmit)}
        formState={formState}
        isChanged={isChanged}
        handleInitializeClick={handleInitializeClick}
        profileImageInit={profileImageInit}
        setProfileImageInit={setProfileImageInit}
      />
    </>
  );
};

export default AccountProfileLogic;
