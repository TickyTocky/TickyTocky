import classNames from 'classnames/bind';
import styles from './UpdatedTag.module.scss';

const cx = classNames.bind(styles);

const UpdatedTag = () => <span className={cx('updated-tag')}>Updated</span>;

export default UpdatedTag;
