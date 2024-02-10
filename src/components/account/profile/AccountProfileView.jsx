import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import InputField from '@/components/common/InputField';
import ProfileImage from '@/components/common/ImageField/ProfileImage';
import styles from './profile.module.scss';

const cx = classNames.bind(styles);

const AccountProfileView = ({ user, handleSubmit, isChanged }) => (
  <div className={cx('profile')}>
    <div className={cx('profile-img-container')}>
      <div className={cx('profile-img')}>
        <ProfileImage name='profileImageUrl' defaultValue={user?.profileImageUrl} />
      </div>
      <div className={cx('profile-img-init')}>
        <BaseButton size='md' text='Initialize' variant='remove' />
      </div>
    </div>
    <form className={cx('profile-form')} onSubmit={handleSubmit}>
      <div className={cx('profile-email-container')}>
        <label className={cx('profile-label')}>Email address</label>
        <div className={cx('profile-email')}>
          <span className={cx('profile-email-value')}>{user?.email}</span>
        </div>
      </div>
      <InputField
        label='Nickname'
        name='nickname'
        type='text'
        placeholder='Nickname'
        autoComplete='off'
        maxLength={10}
        defaultValue={user?.nickname}
      />
      <div className={cx('profile-button')}>
        <div className={cx('profile-button-box')}>
          <BaseButton
            type='submit'
            size='xl'
            text='Edit'
            variant='secondary'
            disabled={isChanged}
          />
        </div>
      </div>
    </form>
  </div>
);

export default AccountProfileView;
