import { useState, useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import Invitations from '@/api/invitations';

const useInvitationPopUp = (initialData, searchInputRef, INVITATIONS_NUMBER = 999) => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const { data, execute, isLoading } = useAsync(
    () => Invitations.get(INVITATIONS_NUMBER),
    initialData,
    false
  );

  useEffect(() => {
    execute();
  }, [refreshKey]);

  const handleRefreshInvitations = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const clearSearchTerm = () => setSearchTerm('');

  const filteredInvitations = data?.invitations.filter(
    (invitation) =>
      invitation.dashboard.title.toLowerCase().includes(searchTerm) ||
      invitation.inviter.nickname.toLowerCase().includes(searchTerm)
  );

  const handleClearSearchInput = () => {
    clearSearchTerm();
    searchInputRef.current.value = '';
    searchInputRef.current.focus();
  };

  return {
    filteredInvitations,
    handleSearchChange,
    clearSearchTerm,
    handleRefreshInvitations,
    handleClearSearchInput,
    isLoading,
    searchTerm,
    data,
  };
};

export default useInvitationPopUp;
