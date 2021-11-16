import React from 'react'
import {
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout, Menu, Badge, Input, Button } from 'antd';
import { HomeOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import Calendar from '../components/atoms/calendar';
import Progress from '../components/atoms/progress';

const { Header, Content, Footer, Sider } = Layout;

const index = () => {
  return (
    <div>
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
              {/* 헤더 로고 */}
              <Link to ="/">
                <div className="logo">
                  야옹
                </div>
              </Link>

              {/* 서브 메뉴 */}
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
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
          
          {/* 본문 레이아웃 */}
          <Layout>
            
            {/* 헤더 */}
            <Header className="site-layout-sub-header-background" 
              style={{ padding: 0, display: 'flex', textAlign: 'center' }} >
            <Badge status="warning" />
            <Input placeholder="email" size="small" prefix={<UserOutlined />} 
              style={{ width: "200px", height: "30px", margin: '15px'}} />
            <Input.Password
              placeholder="input password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              style={{ width: "200px", height: "30px", margin: '15px'}}
            />
            <Button style={{ width: "70px", height: "30px", margin: '15px'}}>로그인</Button>
            </Header>

            {/* 콘텐츠 */}
            <Content style={{ margin: '24px 16px 0' }}>
              <Routes>
                  <Route exact path="/" />
                  <Route path="/calendar" component={(props) => <Calendar />} />
              </Routes>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' , overflow: 'initial' }}>
                <Progress />
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018
            </Footer>
          </Layout>
        </Layout>
    </div>
  )
}

export default index
