import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { ICON } from '@/constants';
import styles from './landingFeaturesOverview.module.scss';

const cx = classNames.bind(styles);
const { background, landing } = ICON;

function LandingFeaturesOverview() {
  const [activeButton, setActiveButton] = useState('invite');
  const [animationClass, setAnimationClass] = useState('');

  const buttonsWithDescriptions = [
    {
      id: 'invite',
      description: 'Invite Members',
    },
    {
      id: 'thumbnail',
      description: 'Make Thumbnail',
    },
    {
      id: 'darkmode',
      description: 'Dark Mode',
    },
    {
      id: 'device',
      description: 'All Devices',
    },
    {
      id: 'dashboard',
      description: 'Dashboard',
    },
  ];

  const changeImageAndDescription = (button) => {
    const newAnimationClass = activeButton !== button.id ? 'image-exit' : '';
    setAnimationClass(newAnimationClass);
    setTimeout(() => {
      setActiveButton(button.id);
      setAnimationClass(activeButton !== button.id ? 'image-enter' : '');
    }, 50);
  };

  return (
    <div className={cx('overview')}>
      <div className={cx('overview-title')}>
        <p>Powerful</p>
        <p>Collaboration Features</p>
      </div>
      <ul className={cx('overview-sidebar')}>
        {buttonsWithDescriptions.map((button, index) => (
          <li
            key={`key-${index}`}
            className={cx('overview-sidebar-button', {
              active: activeButton === button.id,
            })}
            onClick={() => changeImageAndDescription(button)}
          >
            <Image
              className={cx('overview-sidebar-button-icon')}
              src={landing[button.id].url}
              alt={landing[button.id].alt}
              width={50}
              height='auto'
              priority
            />
            <p className={cx('overview-sidebar-description')}>{button.description}</p>
          </li>
        ))}
      </ul>
      <div className={cx('overview-content')}>
        {activeButton === 'invite' && (
          <div className={cx('overview-content-description')}>
            <h2>Invite Members</h2>
            <div>
              <p>Invite your colleagues to collaborate</p>
              <p>
                Share access to project boards and get real-time feedback. Invitations can
                be managed easily, ensuring no accidental access
              </p>
            </div>
          </div>
        )}
        {activeButton === 'thumbnail' && (
          <div className={cx('overview-content-description')}>
            <h2>Custom Visuals</h2>
            <div>
              <p>Personalize your project&apos;s appearance</p>
              <p>
                Create custom thumbnails for your tasks to enhance visual recognition and
                project branding
              </p>
            </div>
          </div>
        )}
        {activeButton === 'darkmode' && (
          <div className={cx('overview-content-description')}>
            <h2>Visual Comfort</h2>
            <div>
              <p>Dark mode to reduce eye strain</p>
              <p>
                A darker interface for better focus during different times of the day or
                in varied lighting conditions
              </p>
            </div>
          </div>
        )}
        {activeButton === 'device' && (
          <div className={cx('overview-content-description')}>
            <h2>Multi Device Sync</h2>
            <div>
              <p> Stay connected and updated</p>
              <p>
                Our platform syncs seamlessly across all devices, ensuring you have access
                to your projects anytime, anywhere
              </p>
            </div>
          </div>
        )}
        {activeButton === 'dashboard' && (
          <div className={cx('overview-content-description')}>
            <h2>Centralized Control</h2>
            <div>
              <p> Monitor project progress with ease</p>
              <p>
                The dashboard provides a comprehensive view of all tasks and statuses,
                facilitating better project management
              </p>
            </div>
          </div>
        )}
        <div className={cx('overview-content-feature', animationClass)}>
          <Image
            src={background.overview[activeButton].url}
            alt={background.overview[activeButton].alt}
            fill
            style={{ objectFit: 'contain' }}
            sizes='100%'
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default LandingFeaturesOverview;
