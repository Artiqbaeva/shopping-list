import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppRoutes from '../routes/AppRoutes';

const { Header, Content, Footer, Sider } = Layout;

function Home() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const menuItems = useMemo(() => [
    { key: '1', icon: <PieChartOutlined />, label: 'Dashboard' },
    { key: '2', icon: <UserOutlined />, label: 'User' },
    { key: '3', icon: <TeamOutlined />, label: 'Team' },
    { key: '4', icon: <FileOutlined />, label: 'Files' },
  ], []);

  const handleMenuClick = (e) => {
    switch (e.key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/user');
        break;
      case '3':
        navigate('/team');
        break;
      case '4':
        navigate('/files');
        break;
      default:
        break;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        style={{ position: 'sticky', top: 0, height: '100vh' }}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >
        <div
          className="demo-logo-vertical"
          style={{ height: 32, margin: 16, background: 'rgba(204, 200, 200, 0.2)' }}
        />
        <Menu
          theme="dark"
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <button onClick={logOut} style={{ float: 'right', marginTop: '16px' }}>
            Log out
          </button>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          <div
            style={{
              padding: 24,
              minHeight: 960,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <AppRoutes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Mafruza
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
