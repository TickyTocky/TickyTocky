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

  console.log(background.overview[activeButton].url);

  return (
    <div className={cx('overview')}>
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
              src={landing[button.id].url}
              alt={landing[button.id].alt}
              width={60}
              height={60}
              layout='fixed'
            />
            <p className={cx('overview-sidebar-description')}>{button.description}</p>
          </li>
        ))}
      </ul>
      <div className={cx('overview-content')}>
        <Image
          src={background.body.url}
          alt={background.body.alt}
          layout='fill'
          objectFit='cover'
          // width={500} // 원본 이미지의 가로 크기
          // height={300}
          // layout='responsive'
        />
        <div className={cx('overview-content-gradient')}></div>
        <div className={cx('overview-content-feature', animationClass)}>
          <Image
            src={background.overview[activeButton].url}
            alt={background.overview[activeButton].alt}
            height={705}
            width={1255}
            className={cx('overview-content-feature-img')}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingFeaturesOverview;
