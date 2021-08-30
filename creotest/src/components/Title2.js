import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Title = ({
  children, to, onClick, disabled, theme = 'default',
}) => {
  const Element = (to && !disabled) ? Link : Div;

  return (
    <Element
      to = {to}
      className = {cx('button', theme, {disabled})}
      onClick = {disabled ? () => null : onClick}>
        {children}
    </Element>
  // <div>
  //    <Button className="subTitle">{props.name}</Button>
  // </div>
  );
}

export default Title;