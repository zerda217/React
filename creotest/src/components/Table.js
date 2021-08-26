import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './PageTemplate.scss';
import Title from './Title';

const cx = classNames.bind(styles);

export default class Table extends Component {
    render() {
        const { item, text, children } = this.props;
        return (
            <div className={cx('item')}>
                <Title/>
                <div className={cx('text')}>{children}</div>                
            </div>
        )
    }
}
