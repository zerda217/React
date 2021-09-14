import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
    <div className={cx('page-template')}>
        <h4>크레오 코리아</h4>
        <div className={cx('content')}>{children}</div>
    </div>
    );
};

export default PageTemplate;