import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Button from './Button';
import './Components.scss';

const cx = classNames.bind(styles);

const Home = ({children}) => (
    <div className={cx('home')}>
        <h1>HOME</h1>
        {children}
        <img src="https://blog.creokorea.com//uploads/j_ae3930b51e.png" alt="creokorea"/>
        <img src="https://blog.creokorea.com//uploads/i_1_a8507f77ff.png" alt="creokitchen1"/>
        <div>
            <Link to = "/components/Works">
            <   Button theme="view">view more</Button>
            </Link>
        </div>
        <div>
            <Link to = "/components/Careers">
            <   Button theme="view">view more</Button>
            </Link>
        </div>
            

    </div>
)

export default Home;