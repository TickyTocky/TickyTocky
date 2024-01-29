import classNames from 'classnames/bind';
import styles from './BoardHeader.module.scss';
import InvitationMembers from '@/components/common/InvitationMembers';

const cx = classNames.bind(styles);

const BoardHeader = ({ members }) => (
  <div className={cx('container')}>
    <div className={cx('info-wrap')}>
      <InvitationMembers members={members} />
      <div className={cx('line')}></div>
    </div>
  </div>
);

export default BoardHeader;
