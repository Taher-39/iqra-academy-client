// import React, { Children } from 'react';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { SidebarItems } from '../../routes/admin.routes';

const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps['items'] = SidebarItems

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{
            color: 'white',
            height: "4em",
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        }}>
            <h1>Iqra Academy</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={SidebarItems} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;