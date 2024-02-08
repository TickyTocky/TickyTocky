import classNames from 'classnames/bind';
import styles from './InvitationItem.module.scss';

const cx = classNames.bind(styles);

const InvitationItem = ({ id, title, name }) => (
  <>
    <div>
      <span className={cx('board-name')}>{title}</span>
      <span className={cx('username')}>{name}</span>
    </div>
    <div>
      <button onClick={() => console.log(id)}>Accept</button>
      <button onClick={() => {}}>Ignore</button>
    </div>
  </>
);

export default InvitationItem;
