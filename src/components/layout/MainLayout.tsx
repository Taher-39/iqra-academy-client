import { Button, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/Auth/authSlice';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Layout style={{ height: "100vh"}}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Button style={{ marginLeft: '10px' }} onClick={handleLogout} >Logout</Button>
        </Header>
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
          Iqra Academy ©{new Date().getFullYear()} 
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;