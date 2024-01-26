import classNames from 'classnames/bind';
import styles from '@/components/common/button/button.module.scss';

const cx = classNames.bind(styles);

const BaseButton = ({
  variant = 'primary',
  size,
  type = 'button',
  text = 'Button',
  ...props
}) => {
  return (
    <button className={cx(`btn-${variant}`, `btn-${size}`)} type={type} {...props}>
      <span className={cx(`btn-${size}-text`)}>{text}</span>
    </button>
  );
};

export default BaseButton;
