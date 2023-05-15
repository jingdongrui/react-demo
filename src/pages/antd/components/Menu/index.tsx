import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const MenuList: React.FC = () => {
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={['4']}
      items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        (icon, index) => ({
          key: String(index + 1),
          icon: React.createElement(icon),
          label: `nav ${index + 1}`,
        }),
      )}
    />
  )
}
export default MenuList