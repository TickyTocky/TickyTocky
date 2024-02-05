import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import Board from '../Board';

const cx = classNames.bind(styles);

const Container = ({ header, children, boardHeader }) => (
  <div className={cx('container')}>
    <div className={cx('container-header')}>{header}</div>
    <main className={cx('board-container')}>
      {boardHeader ? <Board boardHeader={boardHeader}>{children}</Board> : children}
    </main>
  </div>
);

export default Container;
