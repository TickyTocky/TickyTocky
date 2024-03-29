import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const BaseButton = ({
  size,
  variant = 'primary',
  type = 'button',
  text = 'Button',
  ...props
}) => (
  <button className={cx(`btn-${variant}`, `btn-${size}`)} type={type} {...props}>
    <span className={cx(`btn-${size}-text`)}>{text}</span>
  </button>
);

export default BaseButton;
