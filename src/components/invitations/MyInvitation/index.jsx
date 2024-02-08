// "email": "test0001@codeit.com",
// "nickname": "test0001"
// "email": "test@codeit.com",
// "nickname": " test1234"

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Invitations from '@/api/invitations';
import useAsync from '@/hooks/useAsync';
import { INIT_INVITATIONS_DATA } from '@/constants/initialDataType';
import styles from './MyInvitation.module.scss';
import InvitationItem from '../InvitationItem';

const cx = classNames.bind(styles);

const InvitationList = () => {
  const INVITATIONS_NUMBER = 999;
  const { data } = useAsync(
    () => Invitations.get(INVITATIONS_NUMBER),
    INIT_INVITATIONS_DATA
  );

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredInvitations = data?.invitations.filter((invitation) =>
    invitation.dashboard.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <input
        type='text'
        id='search-input'
        placeholder='Search here'
        onChange={handleSearchChange}
      />
      <ul className={cx('invitation-list')}>
        {filteredInvitations?.length > 0 ? (
          filteredInvitations.map((invitation) => (
            <li key={`invitation-${invitation.id}`} className={cx('invitation-item')}>
              <InvitationItem
                id={invitation.id}
                title={invitation.dashboard.title}
                name={invitation.inviter.nickname}
              />
            </li>
          ))
        ) : (
          <li key={'invitation-1'} className={cx('invitation-list-none')}>
            No invitations found.
          </li>
        )}
      </ul>
    </div>
  );
};

export default InvitationList;
