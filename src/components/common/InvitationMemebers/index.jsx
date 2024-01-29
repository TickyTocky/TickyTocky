import { useEffect } from 'react';
import styles from './InvitationMembers.module.scss';
import classNames from 'classnames/bind';
import useInvitationMembers from '@/hooks/useInvitationMembers';
import Avatar from '@/components/common/avatar';

const cx = classNames.bind(styles);

const InvitationMembers = ({ members }) => {
  const { visibleMembersNum, handleInvitationMembers } = useInvitationMembers();

  useEffect(() => {
    handleInvitationMembers();
  }, [visibleMembersNum, handleInvitationMembers]);

  return (
    <div className={cx('container')}>
      <ul className={cx('members-list')}>
        {members.length > visibleMembersNum
          ? members.slice(0, visibleMembersNum).map((member) => {
              return (
                <li key={member.id}>
                  <Avatar
                    profileName={member.nickname}
                    profileImage={member.profileImageUrl}
                    avatarSize={'m'}
                  />
                </li>
              );
            })
          : members.map((member) => {
              return (
                <li key={member.id}>
                  <Avatar
                    profileName={member.nickname}
                    profileImage={member.profileImageUrl}
                    avatarSize={'m'}
                  />
                </li>
              );
            })}
        {members.length > visibleMembersNum && (
          <li>
            <div className={cx('hidden-members-num')}>
              +{members.slice(visibleMembersNum).length}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default InvitationMembers;
