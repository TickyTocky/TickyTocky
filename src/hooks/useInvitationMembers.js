import { useState } from 'react';

const useInvitationMembers = () => {
  const [visibleMembersNum, setVisibleMembersNum] = useState(4);

  const handleInvitationMembers = () => {
    const handleResize = () => {
      const currentWindowSize = window.innerWidth;

      if (currentWindowSize > 375 && visibleMembersNum === 1) {
        setVisibleMembersNum(4);
      } else if (currentWindowSize <= 375 && visibleMembersNum === 4) {
        setVisibleMembersNum(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };
  return { visibleMembersNum, handleInvitationMembers };
};

export default useInvitationMembers;
