import classNames from 'classnames/bind';
import styles from './BoardHeader.module.scss';
import InvitationMembers from '@/components/common/InvitationMembers';
import MixButton from '@/components/common/button/MixButton';
import { ICON } from '@/constants/importImage';

const cx = classNames.bind(styles);
const { settings } = ICON;

const BoardHeader = ({ members, title }) => (
  <div className={cx('container')}>
    <MixButton
      svg={settings.url}
      alt={settings.alt}
      reverse
      size={24}
      type='button'
      gap={4}
      text={title}
      fontSize={24}
    />
    <div className={cx('info-wrap')}>
      <InvitationMembers members={members} />
      <div className={cx('line')}></div>
    </div>
  </div>
);

export default BoardHeader;
