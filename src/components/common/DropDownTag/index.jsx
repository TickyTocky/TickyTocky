import classNames from 'classnames/bind';
import styles from './DropDownTag.module.scss';

const cx = classNames.bind(styles);

const DropDownTag = ({ value }) => <div className={cx('dropdowntag')}>{value}</div>;

export default DropDownTag;
