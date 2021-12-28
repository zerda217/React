import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout, Menu, Input, Button } from 'antd';
import { HomeOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import AtomCalendar from '../components/atoms/calendar';
import Progress from '../components/atoms/progress';
import Countdown from '../components/atoms/countdown';
import Nomard from '../components/organisms/nomard';

const { Header, Content, Footer, Sider } = Layout;

const index = () => {
  return (
    <Router>
    <div>
      <Layout style={{minHeight: '100vh'}}>
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
              {/* 헤더 로고 */}
              <Link to ="/">
                <div className="logo">
                  야옹
                </div>
              </Link>

              {/* 서브 메뉴 */}
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                style={{ padding: 0}}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <Link to="/">
                    INDEX
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/calendar">
                    CALENDAR
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  <Link to="/blank">
                    BLANK
                  </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                  <Link to="/login">
                    LOGIN
                  </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<UserOutlined />}>
                  <Link to="/nomard">
                    NOMARD
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
          
          {/* 본문 레이아웃 */}
          <Layout>
            
            {/* 헤더 */}
            <Header className="site-layout-sub-header-background" 
              style={{ padding: 0, display: 'flex', textAlign: 'right' }} >
            <div style={{ width: '100%'}}>
              <Input placeholder="email" prefix={<UserOutlined />} 
                style={{ width: '150px', height: '30px', margin: '15px'}} />
              <Input.Password
                placeholder="password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ width: '150px', height: '30px', margin: '15px'}}
              />
              <Button style={{ width: '70px', height: '30px', margin: '15px'}}>로그인</Button>
            </div>
            </Header>

            {/* 콘텐츠 */}
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' , overflow: 'initial' }}>
                <Routes>
                  <Route path="/" element={<Countdown />} />
                  <Route path="/calendar" element={<AtomCalendar />} />
                  <Route path="/blank" element={<Progress />} />
                  <Route path="/nomard" element={<Nomard />} />
                </Routes>
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018
            </Footer>
          </Layout>
        </Layout>
    </div>
    </Router>
  )
}

export default index
