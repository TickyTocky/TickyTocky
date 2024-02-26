import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import MixButton from '@/components/common/button/MixButton';
import InviteDashboard from '@/components/dashboard/modal/dashboard/InviteDashboard';
import useModalState from '@/hooks/useModalState';
import useInvitationMembers from '@/hooks/invitationMembers/useInvitationMembers';
import { ICON } from '@/constants';
import styles from './InvitationMembers.module.scss';

const cx = classNames.bind(styles);
const { add } = ICON;

const InvitationMembers = ({
  dashboardId,
  createdByMe,
  memberList,
  isOpen,
  buttonRef,
  openPopup,
  closePopup,
}) => {
  const { visibleMembersNum } = useInvitationMembers();
  const { modalState, toggleModal } = useModalState(['headerInviteMember']);

  return (
    <div className={cx('container')}>
      <ul
        className={cx('members-list')}
        ref={buttonRef}
        onClick={isOpen ? closePopup : openPopup}
      >
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
            <div className={cx('members-list-num')}>
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
            dashboardId={dashboardId}
          />
        </>
      )}
    </div>
  );
};

export default InvitationMembers;
