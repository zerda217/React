import React, {useRef, useState, useMemo, useCallback} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import 'antd/dist/antd.css';
// import styled from 'styled-components';
import { Layout, Menu, Input, Button } from 'antd';
import { HomeOutlined, UnorderedListOutlined, UserOutlined, VideoCameraOutlined, EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import AtomCalendar from '../components/atoms/calendar';
// import SelecBox from '../components/atoms/SelecBox';
import CreateUser from '../components/atoms/CreateUser';
import UserList from '../components/atoms/UserList';
import Statistic from '../components/atoms/statistic';
import Progress from '../components/atoms/progress';
import Countdown from '../components/atoms/countdown';
import NomardList from '../components/organisms/nomardList';
import Tolist from '../components/molecules/Tolist';
// import Nomard from '../components/organisms/nomard';

const { Header, Content, Footer, Sider } = Layout;

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const Index = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    id => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );
  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users] );

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
                <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                  <Link to="/list">
                    LIST
                  </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                  <Link to="/login">
                    LOGIN
                  </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<UnorderedListOutlined />}>
                  <Link to="/static">
                    STATIC
                  </Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<UserOutlined />}>
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
                  <Route path="/list" element={<Tolist />} />
                  <Route path="/login" element={<Progress />} />
                  <Route path="/nomard" element={<NomardList />} />
                  <Route path="/static" element={<Statistic />} />
                </Routes>
                {/* <SelecBox />
                <Input 
                  style={{ width: 200 }}
                  placeholder="추천인 아이디/코드"></Input> */}
              </div>
              <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
              />
              <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
              <div>활성사용자 수 : {count}</div>
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

export default Index
