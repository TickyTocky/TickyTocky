import React from 'react';
import classNames from 'classnames/bind';
import Invitation from '@/api/invitations';
import styles from './InvitationItem.module.scss';
import useModalState from '@/hooks/useModalState';
import IconModal from '@/components/layout/modal/IconModal';
import { ICON } from '@/constants/importImage';

const cx = classNames.bind(styles);

const InvitationItem = ({ id, title, name, HandleRefreshInvitations }) => {
  const { modalState, toggleModal } = useModalState([
    'denyinvitation',
    'acceptinvitation',
  ]);

  const handleItemApprove = async () => {
    await Invitation.respond(id, true);
    HandleRefreshInvitations();
    () => toggleModal('acceptinvitation');
  };

  const handleItemIgnore = async () => {
    await Invitation.respond(id, false);
    HandleRefreshInvitations();
    () => toggleModal('denyinvitation');
  };

  return (
    <div className={cx('invitation-item')}>
      <div className={cx('invitation-item-data')}>
        <div className={cx('invitation-item-data-name')}>
          <span>Username</span>
          <span>Board Name</span>
        </div>
        <div className={cx('invitation-item-data-body')}>
          <span>{name}</span>
          <span>{title}</span>
        </div>
      </div>
      <div className={cx('invitation-item-buttons')}>
        <button
          type='button'
          onClick={() => toggleModal('acceptinvitation')}
          className={cx('invitation-item-buttons-accept')}
        >
          Accept
        </button>
        <button
          type='button'
          onClick={() => toggleModal('denyinvitation')}
          className={cx('invitation-item-buttons-deny')}
        >
          Deny
        </button>
        <IconModal
          isModalOpen={modalState.acceptinvitation}
          closeModal={() => toggleModal('acceptinvitation')}
          iconSize={58}
          desc='Do you want to accept this invitation?'
          title='Invitation Received'
          iconName={ICON.success}
        >
          <div className={cx('modal-buttons')}>
            <button
              type='button'
              onClick={() => toggleModal('acceptinvitation')}
              className={cx('modal-buttons-cancel')}
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={handleItemApprove}
              className={cx('modal-buttons-accept')}
            >
              Accept
            </button>
          </div>
        </IconModal>
        <IconModal
          isModalOpen={modalState.denyinvitation}
          closeModal={() => toggleModal('denyinvitation')}
          iconSize={58}
          title='Invitation Decline'
          desc='Are you sure you want to decline this invitation?'
          iconName={ICON.remove}
        >
          <div className={cx('modal-buttons')}>
            <button
              type='button'
              onClick={() => toggleModal('denyinvitation')}
              className={cx('modal-buttons-cancel')}
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={handleItemIgnore}
              className={cx('modal-buttons-deny')}
            >
              Yes
            </button>
          </div>
        </IconModal>
      </div>
    </div>
  );
};

export default InvitationItem;
