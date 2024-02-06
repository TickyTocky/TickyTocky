import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { ICON } from '@/constants/importImage';
import styles from './landingFeaturesOverview.module.scss';

const cx = classNames.bind(styles);
const { background, landing } = ICON;

function LandingFeaturesOverview() {
  const [activeButton, setActiveButton] = useState('invite');
  const [animationClass, setAnimationClass] = useState('');

  const buttonsWithDescriptions = [
    {
      id: 'invite',
      image: '/path/to/button1.svg',
      description: 'Invite Members',
    },
    {
      id: 'thumbnail',
      image: '/path/to/button2.svg',
      description: 'Make Thumbnail',
    },
    {
      id: 'darkmode',
      image: '/path/to/button3.svg',
      description: 'Dark Mode',
    },
    {
      id: 'device',
      image: '/path/to/button4.svg',
      description: 'All Devices',
    },
    {
      id: 'dashboard',
      image: '/path/to/button5.svg',
      description: 'Dashboard',
    },
  ];

  const changeImageAndDescription = (button) => {
    const newAnimationClass = activeButton !== button.id ? 'imageExit' : '';
    setAnimationClass(newAnimationClass);
    setTimeout(() => {
      setActiveButton(button.id);
      setAnimationClass(activeButton !== button.id ? 'imageEnter' : '');
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
              height={50}
              layout='fixed'
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
              - Invite your colleagues to collaborate. Share access to project boards and
              get real-time feedback. Invitations can be managed easily, ensuring no
              accidental access.
            </div>
          </div>
        )}
        {activeButton === 'thumbnail' && (
          <div className={cx('overview-content-description')}>
            <h2>Custom Visuals</h2>
            <div>
              - Personalize your project`&apos;`s appearance. Create custom thumbnails for
              your tasks to enhance visual recognition and project branding.
            </div>
          </div>
        )}
        {activeButton === 'darkmode' && (
          <div className={cx('overview-content-description')}>
            <h2>Visual Comfort</h2>
            <div>
              - dark mode to reduce eye strain. A darker interface for better focus during
              different times of the day or in varied lighting conditions.
            </div>
          </div>
        )}
        {activeButton === 'device' && (
          <div className={cx('overview-content-description')}>
            <h2>Multi-Device Sync</h2>
            <div>
              - Stay connected and updated. Our platform syncs seamlessly across all
              devices, ensuring you have access to your projects anytime, anywhere.
            </div>
          </div>
        )}
        {activeButton === 'dashboard' && (
          <div className={cx('overview-content-description')}>
            <h2>Centralized Control</h2>
            <div>
              - Monitor project progress with ease. The dashboard provides a comprehensive
              view of all tasks and statuses, facilitating better project management.
            </div>
          </div>
        )}
        <div className={cx('overview-content-feature', animationClass)}>
          <Image
            src={background.overview[activeButton].url}
            alt={background.overview[activeButton].alt}
            // width={960}
            // height={540}
            layout='fill'
            objectFit='contain'
            className={cx('overview-content-feature-img')}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingFeaturesOverview;
