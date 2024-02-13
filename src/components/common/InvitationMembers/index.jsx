import classNames from 'classnames/bind';
import Members from '@/api/members';
import Avatar from '@/components/common/Avatar';
import MixButton from '@/components/common/button/MixButton';
import InviteDashboard from '@/components/dashboard/modal/dashboard/InviteDashboard';
import Spinner from '@/components/common/Spinner';
import useMemberStore from '@/stores/useMemberStore';
import useAsync from '@/hooks/useAsync';
import useModalState from '@/hooks/useModalState';
import useInvitationMembers from '@/hooks/useInvitationMembers';
import { ICON } from '@/constants/importImage';
import styles from './InvitationMembers.module.scss';

const cx = classNames.bind(styles);
const { add } = ICON;

const InvitationMembers = ({ dashBoardId, createdByMe }) => {
  const { isLoading } = useAsync(() => Members.getList(1, 20, dashBoardId));
  const { memberList } = useMemberStore();

  const { visibleMembersNum } = useInvitationMembers();
  const { modalState, toggleModal } = useModalState(['headerInviteMember']);

  return (
    <div className={cx('container')}>
      <ul className={cx('members-list')}>
        {memberList && memberList?.length > visibleMembersNum
          ? memberList?.slice(0, visibleMembersNum).map((member) => (
              <li key={`key-member-list-${member.id}`}>
                <Avatar
                  userId={member.userId}
                  profileName={member.nickname}
                  profileImage={member.profileImageUrl}
                  avatarSize='md'
                />
              </li>
            ))
          : memberList?.map((member) => (
              <li key={`key-member-list-${member.id}`}>
                <Avatar
                  userId={member.userId}
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
      {createdByMe && (
        <>
          <div className={cx('line')}></div>
          <div className={cx('button')}>
            <MixButton
              onClick={() => toggleModal('headerInviteMember')}
              svg={add.default.url}
              alt={add.default.alt}
              size={18}
              type='button'
              gap={4}
              text='Invite'
              fontSize={14}
            />
          </div>
          <InviteDashboard
            isModalOpen={modalState.headerInviteMember}
            closeModal={() => toggleModal('headerInviteMember')}
            dashboardId={dashBoardId}
          />
          {isLoading && <Spinner />}
        </>
      )}
    </div>
  );
};

export default InvitationMembers;
