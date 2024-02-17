import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import IconButton from '@/components/common/button/IconButton';
import InvitationPopUp from '@/components/invitations/InvitationPopUp';
import useModalTogglePopup from '@/hooks/useModalTogglePopup';
import { ICON } from '@/constants';
import styles from './HeaderButtons.module.scss';

const cx = classNames.bind(styles);
const { home, email } = ICON;

const HeaderButtons = () => {
  const { isOpen, popupRef, buttonRef, openPopup, closePopup } = useModalTogglePopup();

  return (
    <>
      <Link href={'/mydashboard'}>
        <IconButton svg={home.url} alt={home.alt} size='lg' outline type='button' />
      </Link>
      <button
        className={cx('button', { active: isOpen })}
        ref={buttonRef}
        onClick={isOpen ? closePopup : openPopup}
      >
        <Image src={email.url} alt={email.alt} width={24} height={24} />
      </button>
      {isOpen && (
        <div className={cx('popup')} ref={popupRef}>
          <InvitationPopUp />
        </div>
      )}
    </>
  );
};

export default HeaderButtons;
