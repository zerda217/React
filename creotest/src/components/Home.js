import React from 'react'
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Home = ({children}) => (
    <div className={cx('home')}>
        <h1>HOME</h1>
        {children}
        <img src="https://blog.creokorea.com//uploads/j_ae3930b51e.png" alt="creokorea"/>
        <img src="https://blog.creokorea.com//uploads/i_1_a8507f77ff.png" alt="creokitchen1"/>
    </div>
)

export default Home;