import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Invitations from '@/api/invitations';
import Image from 'next/image';
import useAsync from '@/hooks/useAsync';
import { INIT_INVITATIONS_DATA } from '@/constants/initialDataType';
import { ICON } from '@/constants/importImage';
import InvitationItem from '../InvitationItem';
import styles from './InvitationPopUp.module.scss';

const cx = classNames.bind(styles);
const { search, tagRemove } = ICON;

const InvitationPopUp = () => {
  const INVITATIONS_NUMBER = 999;
  const [refreshKey, setRefreshKey] = useState(0);
  const searchInputRef = useRef(null);

  const { data, execute } = useAsync(
    () => Invitations.get(INVITATIONS_NUMBER),
    INIT_INVITATIONS_DATA,
    false
  );

  useEffect(() => {
    execute();
  }, [refreshKey]);

  const HandleRefreshInvitations = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleClearSearchInput = () => {
    setSearchTerm('');
    searchInputRef.current.value = '';
    searchInputRef.current.focus();
  };

  const filteredInvitations = data?.invitations.filter((invitation) =>
    invitation.dashboard.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={cx('invitation')}>
      <div className={cx('invitation-title')}>
        <span>Invitations</span>
        <div className={cx('invitation-title-number')}>{data.invitations.length}</div>
      </div>
      <div className={cx('invitation-search')}>
        <Image
          width={20}
          height={20}
          src={search.url}
          alt={search.alt}
          sizes='100%'
          priority
        />
        <input
          ref={searchInputRef}
          className={cx('invitation-search-input')}
          type='search'
          id='search-input'
          placeholder='Enter board name to search'
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <Image
            className={cx('invitation-search-reset')}
            onClick={handleClearSearchInput}
            width={20}
            height={20}
            src={tagRemove.url}
            alt={tagRemove.alt}
            sizes='100%'
            priority
          />
        )}
      </div>
      <ul className={cx('invitation-list')}>
        {filteredInvitations?.length > 0 ? (
          filteredInvitations.map((invitation) => (
            <li
              key={`key-invitation-popup-${invitation.id}`}
              className={cx('invitation-list-item')}
            >
              <InvitationItem
                id={invitation.id}
                title={invitation.dashboard.title}
                name={invitation.inviter.nickname}
                HandleRefreshInvitations={HandleRefreshInvitations}
              />
            </li>
          ))
        ) : (
          <li key={'key-invitation-popup-1'} className={cx('invitation-list-none')}>
            No invitations found.
          </li>
        )}
      </ul>
    </div>
  );
};

export default InvitationPopUp;
