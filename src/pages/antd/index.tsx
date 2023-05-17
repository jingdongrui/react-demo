import React, { useState, useEffect } from 'react';
import { LaptopOutlined, UserOutlined, PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
import { Layout, Menu, theme } from 'antd';
import "./index.scss"
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Workplace from "./pages/workplace/index";
import TableList from "./pages/table-list/index";
import { useNavigate } from 'react-router-dom';
import antd_logo from "../../assets/images/button/antd_logo.svg";
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
  getItem('列表页', 'list', <PieChartOutlined />, [
    getItem('查询列表', '/antd/list/table-list'),
    getItem('XX列表', '/antd/list/4'),
  ]),
  getItem('表单页', 'form', <UserOutlined />, [
    getItem('Option 6', '/antd/form/6'),
    getItem('Option 7', '/antd/form/7'),
    getItem('Option 8', '/antd/form/8'),
  ]),
  getItem('结果页', 'result', <LaptopOutlined />, [
    getItem('Option 10', '/antd/result/10'),
    getItem('Option 11', '/antd/result/11'),
    getItem('Submenu', 'Submenu', null, [getItem('Option 13', '/antd/result/Submenu/14'), getItem('Option 15', '/antd/result/Submenu/16')]),
  ]),
];

const Antd: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 设置初始选中菜单项
  useEffect(() => {
    const path = location.pathname;
    setSelectedKeys([path]);
  }, [location]);

  // 处理菜单项点击事件
  const handleMenuClick = (e: any) => {
    setSelectedKeys([e.key])
    navigate(e.key);
  };
  return (
    <>
      <Layout className='layout'>
        <Header className="header">
          <div className='header-glob'>
            <div className="logo" >
              <a>
                <img src={antd_logo} alt="antd_logo" />
                <h1>Ant Design</h1>
              </a>
            </div>
            <div className='placeholder'></div>
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultOpenKeys={location.pathname.split("/").slice(2)}
              selectedKeys={selectedKeys}
              onClick={handleMenuClick}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout
          // style={{ padding: '24px 24px 24px' }}
          >
            {/* <Breadcrumb items={[{ title: "Home" }, { title: "List" }, { title: "App" }]} style={{ margin: '16px 0' }} /> */}
            <Content
            // style={{
            //   padding: 24,
            //   margin: 0,
            //   minHeight: 280,
            //   background: colorBgContainer,
            // }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/antd/workplace" />} />
                <Route path="workplace" element={<Workplace />} />
                <Route path="/list/table-list" element={<TableList />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>

    </>
  );
};

export default Antd;