import classNames from 'classnames/bind';
import styles from './Board.module.scss';

const cx = classNames.bind(styles);

const Board = ({ boardHeader, children }) => (
  <div className={cx('board')}>
    <div className={cx('board-header')}>{boardHeader}</div>
    <div className={cx('board-content')}>{children}</div>
  </div>
);

export default Board;
