import classNames from 'classnames/bind';
import styles from './FullLayout.module.scss';

const cx = classNames.bind(styles);

const FullLayout = ({ children }) => <div className={cx('content')}>{children}</div>;

export default FullLayout;
