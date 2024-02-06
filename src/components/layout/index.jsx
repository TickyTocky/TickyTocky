import classNames from 'classnames/bind';
import Nav from '@/components/layout/Nav';
import Container from '@/components/layout/Container';
import MyHeader from '@/components/layout/Header/MyHeader';
import styles from './Layout.module.scss';

import { members } from '@/constants/mock-assignees.json'; //TODO 임시 Mock 데이터

const cx = classNames.bind(styles);

const Layout = ({ boardHeader, children }) => (
  <div className={cx('layout')}>
    <div className={cx('layout-nav')}>
      <Nav />
    </div>
    <div className={cx('layout-container')}>
      <Container header={<MyHeader user={members[0]} />} boardHeader={boardHeader}>
        {children}
      </Container>
    </div>
  </div>
);

export default Layout;
