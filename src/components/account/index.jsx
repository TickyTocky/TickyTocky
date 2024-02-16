import classNames from 'classnames/bind';
import AccountProfileLogic from '@/components/account/profile';
import PasswordChange from '@/components/account/password';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

const AccountList = () => (
  <div className={cx('account')}>
    <div className={cx('account-profile')}>
      <h1 className={cx('account-title')}>Account</h1>
      <div className={cx('account-thumnail')}>
        <span>Profile</span>
      </div>
      <AccountProfileLogic />
    </div>
    <div className={cx('account-password')}>
      <div className={cx('account-thumnail')}>
        <span>Password</span>
      </div>
      <PasswordChange />
    </div>
  </div>
);

export default AccountList;
