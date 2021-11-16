import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Index from './pages/index';

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Index />
    );
  }
}

export default App;