import React from 'react';
import './Button.scss';

function Title(props) {
  return (
  <div>
     <button className="Title">{props.name}</button>
  </div>
  );
}

export default Title;