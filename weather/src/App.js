import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Index from './pages';

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed)
  }

    return (
        <Index />
    );
}

export default App;