import classNames from 'classnames/bind';
import styles from './InvitationMembers.module.scss';
import useInvitationMembers from '@/hooks/useInvitationMembers';
import Avatar from '@/components/common/Avatar';
import MixButton from '@/components/common/button/MixButton';
import { ICON } from '@/constants/importImage';

const cx = classNames.bind(styles);
const { add } = ICON;

const InvitationMembers = ({ members }) => {
  const { visibleMembersNum } = useInvitationMembers();

  return (
    <div className={cx('container')}>
      <ul className={cx('members-list')}>
        {members.length > visibleMembersNum
          ? members.slice(0, visibleMembersNum).map((member) => (
              <li key={member.id}>
                <Avatar
                  profileName={member.nickname}
                  profileImage={member.profileImageUrl}
                  avatarSize='md'
                />
              </li>
            ))
          : members.map((member) => (
              <li key={member.id}>
                <Avatar
                  profileName={member.nickname}
                  profileImage={member.profileImageUrl}
                  avatarSize='md'
                />
              </li>
            ))}
        {members.length > visibleMembersNum && (
          <li>
            <div className={cx('hidden-members-num')}>
              +{members.slice(visibleMembersNum).length}
            </div>
          </li>
        )}
      </ul>
      <MixButton
        svg={add.default.url}
        size={18}
        type='button'
        gap={4}
        text='Invite'
        fontSize={14}
      />
    </div>
  );
};

export default InvitationMembers;
