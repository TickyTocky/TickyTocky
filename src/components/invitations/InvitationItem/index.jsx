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
          desc='dfsdf'
          title='delete'
          iconName={ICON.logout.hover}
        >
          <button
            type='button'
            onClick={handleItemApprove}
            className={cx('invitation-item-buttons-accept')}
          >
            Accept
          </button>
          <button
            type='button'
            onClick={() => toggleModal('acceptinvitation')}
            className={cx('invitation-item-buttons-deny')}
          >
            Deny
          </button>
        </IconModal>
        <IconModal
          isModalOpen={modalState.denyinvitation}
          closeModal={() => toggleModal('denyinvitation')}
          iconSize={58}
          desc='dfsdf'
          title='delete'
          iconName={ICON.delete}
        >
          <button
            type='button'
            onClick={handleItemIgnore}
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
        </IconModal>
      </div>
    </div>
  );
};

export default InvitationItem;
