import React from 'react';
import './Components.scss';

const Button = ({
  children, theme = 'default',
}) => {
  return (
  <button className="Button"> {children} </button>
  )
}

export default Button;