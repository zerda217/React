import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Statistic } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Calendar from './components/atoms/calendar';
import Index from './pages/index';
import Countdown from 'antd/lib/statistic/Countdown';
import Progress from './components/atoms/progress';

const { Header, Content, Footer, Sider } = Layout;

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
      <Router>
        <div className='wrapper-main'>
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log('broken', broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log('collapsed', collapsed, type);
              }}
            >
              <Link to ="/">
              <div className="logo">
                야옹
              </div>
              </Link>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/index">
                  INDEX
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/calendar">
                  CALENDAR
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/">
                  BLANK
                  </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="/login">
                  LOGIN
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
          <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight:'100vh', textAlign: 'center', overflow: 'initial' }}>
                <Progress />
              <Routes>
                <Route exact path="/" component={<Index/>} />
                <Route path="/calendar" component={<Calendar/>} />
              </Routes>
              </div>
            </Content>
            <Footer style={{ width: '100vh', textAlign: 'center' }}>Ant Design ©2018</Footer>
          </Layout>
        </Layout>
        </div>
      </Router>
    );
  }
}

export default App;