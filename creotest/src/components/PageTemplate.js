import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.scss';
import Title from './Title';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {

    return (
    <div className={cx('page-template')}>
        <h4>PageTemplate.js</h4>
        <item>첫번째</item>
        <item>첫번째</item>
        <item>첫번째</item>
        <Title/>
        <div className={cx('content')}>{children}</div>
    </div>
    );
};

export default PageTemplate;