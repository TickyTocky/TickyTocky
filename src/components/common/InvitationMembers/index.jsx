import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import Members from '@/api/members';
import Avatar from '@/components/common/Avatar';
import MixButton from '@/components/common/button/MixButton';
import useAsync from '@/hooks/useAsync';
import useInvitationMembers from '@/hooks/useInvitationMembers';
import { ICON } from '@/constants/importImage';
import styles from './InvitationMembers.module.scss';
import { INIT_MEMBER_DATA } from '../../../constants/initialDataType/member';

const cx = classNames.bind(styles);
const { add } = ICON;

const InvitationMembers = () => {
  const router = useRouter();
  const { id } = router.query;
  const { visibleMembersNum } = useInvitationMembers();
  const { data } = useAsync(() => Members.getList(1, 20, Number(id), INIT_MEMBER_DATA));
  const memberList = data?.members;

  return (
    <div className={cx('container')}>
      <ul className={cx('members-list')}>
        {memberList && memberList?.length > visibleMembersNum
          ? memberList?.slice(0, visibleMembersNum).map((member) => (
              <li key={member.id}>
                <Avatar
                  profileName={member.nickname}
                  profileImage={member.profileImageUrl}
                  avatarSize='md'
                />
              </li>
            ))
          : memberList?.map((member) => (
              <li key={member.id}>
                <Avatar
                  profileName={member.nickname}
                  profileImage={member.profileImageUrl}
                  avatarSize='md'
                />
              </li>
            ))}
        {memberList && memberList?.length > visibleMembersNum && (
          <li>
            <div className={cx('hidden-members-num')}>
              +{memberList?.slice(visibleMembersNum).length}
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
