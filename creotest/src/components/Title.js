import React from 'react';
import './Components.scss';

function Title(props) {
  return (
  <div>
     <button className="Title">{props.children}</button>
  </div>
  );
}

export default Title;