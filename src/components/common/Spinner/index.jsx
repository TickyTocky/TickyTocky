import classNames from 'classnames/bind';
import { FadeLoader } from 'react-spinners';
import styles from './Spinner.module.scss';

const cx = classNames.bind(styles);

const Spinner = () => (
  <div className={cx('spinner-background')}>
    <div className={cx('spinner')}>
      <FadeLoader color='#36d7b7' />
    </div>
  </div>
);

export default Spinner;
