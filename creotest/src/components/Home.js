import React from 'react'
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Home = ({children}) => (
    <div className={cx('home')}>
        <h2>HOME</h2>
        <h2>스크롤바 추가, 헤더 로고 클릭 시 현재화면 연결</h2>
        {children}
    </div>
)

export default Home;