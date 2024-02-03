import classNames from 'classnames/bind';
import styles from './CardTags.module.scss';

const cx = classNames.bind(styles);

const CardTags = ({ data, isDetailed = false }) => {
  const selectedData = data.slice(0, 3);
  const remainingData = data.slice(3, 8);
  const MINIMUM_LENGTH = 4;
  const TAG_MAX_LENTH = 3;
  return (
    <div className={cx('cardtags')}>
      <ul className={cx('cardtags-list')}>
        {selectedData.map((item, index) => (
          <li className={cx('cardtags-list-item')} key={`key-${index}`}>
            {item.length > MINIMUM_LENGTH && !isDetailed
              ? `${item.slice(0, MINIMUM_LENGTH)}...`
              : item}
          </li>
        ))}
        {!isDetailed && data.length > TAG_MAX_LENTH && (
          <li className={cx('remaining')} key={'key-3'}>
            +{data.length - TAG_MAX_LENTH}
          </li>
        )}
        {isDetailed &&
          remainingData.map((item, index) => (
            <li
              className={cx('cardtags-list-item')}
              key={`key-${selectedData.length + index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CardTags;
