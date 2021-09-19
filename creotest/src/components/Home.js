import React from 'react'
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Home = ({children}) => (
    <div className={cx('home')}>
        <h1>HOME</h1>
        {children}
    </div>
)

export default Home;