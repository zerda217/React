import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Components.scss';
import classNames from 'classnames/bind';
import Button from './Button';
import Title from './Title';

const cx = classNames.bind(styles);

const Home = ({children}) => (
    <div className={cx('home')}>
        <h1>HOME</h1>
        {children}
        <Title>CREO KITCHEN</Title>
        <img className="creoKitchen" src="https://w.namu.la/s/b8e7f427d377cdb94696db8eb193494f0f5b745abdf5e2577a89de80607e5aad0a8306842f9123eb6d265e72825c645c4f27c3c1fb6590cff420f50f473b650b56ca3d222ec64b63945887d2d4f07f118210e5d5478cc5684197e1f2e61394d1" alt="creoKitchen"/><br/>
        <div>
            <Link to = "/components/Works">
                <Button className="view">view more</Button>
            </Link>
        </div>
        <Title>HACCP ERP YESSUP</Title>
        <img className="Works" src="https://mblogthumb-phinf.pstatic.net/20160106_209/kukjeart_inc_1452055876208XMVrB_JPEG/%C5%E4%B3%A2_%285%29.jpg?type=w800" alt="Works"/>
        <div>
            <Link to = "/components/Careers">
                <Button theme="view">view more</Button>
            </Link>
        </div>
        <Title>SAHARA</Title>
        <img className="Works" src="https://mblogthumb-phinf.pstatic.net/20160106_209/kukjeart_inc_1452055876208XMVrB_JPEG/%C5%E4%B3%A2_%285%29.jpg?type=w800" alt="Works"/>
        <div>
            <Link to = "/components/Careers">
                <Button theme="view">view more</Button>
            </Link>
        </div>
            

    </div>
)

export default Home;