import { useEffect, useState } from 'react';

const useInvitationMembers = () => {
  const [visibleMembersNum, setVisibleMembersNum] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const currentWindowSize = window.innerWidth;

      if (currentWindowSize > 767 && visibleMembersNum === 1) {
        setVisibleMembersNum(4);
      } else if (currentWindowSize <= 767 && visibleMembersNum === 4) {
        setVisibleMembersNum(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [visibleMembersNum]);

  return { visibleMembersNum };
};

export default useInvitationMembers;
