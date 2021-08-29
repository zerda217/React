import React, { Component } from 'react';
import './Button.scss';

class Title extends Component {

  static defaultProps = {
    title: ''
  }
  
  render() {
  return <button className="Title">{this.props.title}</button>;
 }
}

export default Title;