import classNames from 'classnames/bind';
import Avatar from '@/components/common/Avatar';
import styles from './MemberPopup.module.scss';

const cx = classNames.bind(styles);

const MemberPopup = ({ memberList }) => (
  <div className={cx('container')}>
    <div className={cx('info')}>
      <span className={cx('info-title')}>Member</span>
      <span className={cx('info-count')}>{memberList.length}</span>
    </div>
    <ul className={cx('member-list')}>
      {memberList?.map((member) => (
        <li className={cx('member-list-item')} key={`key-member-${member.id}`}>
          <Avatar
            userId={member.userId}
            profileName={member.nickname}
            profileImage={member.profileImageUrl}
            avatarSize='md'
          />
          <span className={cx('member-list-item-name')}>{member.nickname}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default MemberPopup;
