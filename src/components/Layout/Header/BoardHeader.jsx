import classNames from 'classnames/bind';
import styles from './BoardHeader.module.scss';
import InvitationMembers from '@/components/common/InvitationMembers';
import MixButton from '@/components/common/button/MixButton';
import { ICON } from '@/constants/importImage';
import Breadcrumb from '@/components/common/Breadcrumb';

const cx = classNames.bind(styles);

const BoardHeader = ({ members, title }) => (
  <div className={cx('container')}>
    <MixButton
      svg={ICON.settings.url}
      alt={ICON.settings.alt}
      reverse
      size='24'
      type='button'
      gap='4'
      text={title}
      fontSize='24'
    />
    <div className={cx('info-wrap')}>
      <InvitationMembers members={members} />
      <div className={cx('line')}></div>
      <Breadcrumb title={title} />
    </div>
  </div>
);

export default BoardHeader;
