import AccountProfileView from './AccountProfileView';
import SuccessModal from '@/components/common/SuccessModal';
import InitializeConfirmModal from '@/components/common/ConfirmModal';
import useProfileModalLogic from '@/hooks/account/useProfileChangeLogic';

const AccountProfileChange = () => {
  const {
    user,
    handleSubmit,
    formState,
    isChanged,
    profileImageInit,
    setProfileImageInit,
    onProfileSubmit,
    handleInitializeClick,
    modalState,
    toggleProfileChangeSuccessModal,
    toggleProfileInitializeSuccessModal,
    toggleInitialConfirmModal,
  } = useProfileModalLogic();
  return (
    <>
      <SuccessModal
        desc='Profile modify success'
        isModalOpen={modalState.profileChangeSuccessModal}
        closeModal={toggleProfileChangeSuccessModal}
      />
      <SuccessModal
        desc='Profile image initialized'
        isModalOpen={modalState.profileInitializeSuccessModal}
        closeModal={toggleProfileInitializeSuccessModal}
      />
      <InitializeConfirmModal
        desc='Are you sure you want to reset?'
        isModalOpen={modalState.initialConfirmModal}
        closeModal={toggleInitialConfirmModal}
        handleInitializeClick={handleInitializeClick}
      />
      <AccountProfileView
        user={user}
        handleSubmit={handleSubmit(onProfileSubmit)}
        formState={formState}
        isChanged={isChanged}
        handleInitializeClick={handleInitializeClick}
        profileImageInit={profileImageInit}
        setProfileImageInit={setProfileImageInit}
        toggleModal={toggleInitialConfirmModal}
      />
    </>
  );
};

export default AccountProfileChange;
