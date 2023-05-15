import React from 'react';
import { LaptopOutlined, UserOutlined, PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import "./index.scss"
import { Route, Routes, Navigate, useLocation, useRoutes } from "react-router-dom";
import Workplace from "./pages/workplace/index";
import TableList from "./pages/table-list/index";
import { useNavigate } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items2: MenuItem[] = [
  getItem('工作台', '/antd/workplace', <DesktopOutlined />),
  getItem('列表页', 'sub2', <PieChartOutlined />, [
    getItem('查询列表', '/antd/table-list'),
    getItem('XX列表', '4'),
  ]),
  getItem('表单页', 'sub5', <UserOutlined />, [
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('结果页', 'sub9', <LaptopOutlined />, [
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Submenu', 'sub12', null, [getItem('Option 13', '14'), getItem('Option 15', '16')]),
  ]),
];
const items1: MenuItem[] = [
  getItem('nav 1', '1'),
  getItem('nav 2', '2'),
  getItem('nav 3', '3'),
];



const Antd: React.FC = () => {
  const location = useLocation();
  // const routeMatch = useRoutes(routes, location.pathname);
  console.log(location);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toLink = ({ key }: { key: string }) => {
    navigate(key);
  }

  return (
    <>
      <Layout className='layout'>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['/antd/workplace']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
              onClick={toLink}
            />
          </Sider>
          <Layout style={{ padding: '24px 24px 24px' }}>
            {/* <Breadcrumb items={[{ title: "Home" }, { title: "List" }, { title: "App" }]} style={{ margin: '16px 0' }} /> */}
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/antd/workplace" />} />
                <Route path="workplace" element={<Workplace />} />
                <Route path="table-list" element={<TableList />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>

    </>
  );
};

export default Antd;