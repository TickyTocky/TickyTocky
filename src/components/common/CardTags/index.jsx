import classNames from 'classnames/bind';
import styles from './CardTags.module.scss';

const cx = classNames.bind(styles);

const CardTags = ({ data }) => {
  const selectedData = data.slice(0, 4);
  return (
    <div className={cx('cardtags')}>
      <ul className={cx('cardtags-items')}>
        {selectedData.map((item, index) => (
          <li className={cx('cardtags-item')} key={`key-${index}`}>
            {item}
          </li>
        ))}
      </ul>
      {data.length > 4 && (
        <div className={cx('cardtags-remaining')}>+{data.length - 4}</div>
      )}
    </div>
  );
};

export default CardTags;
