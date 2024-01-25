import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { USER_ROLE } from "./role";
import { UserOutlined, AppstoreOutlined, ProfileOutlined  } from "@ant-design/icons";

export const sidebarItems = (role: string) => {
  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link to="/dashboard">pages</Link>,
      key: `/${role}/dashboard`,
      
    },
    {
      label: <Link to="/dashboard">Dashboard</Link>,
      key: `/${role}/dashboard`,
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/dashboard/users">Users</Link>,
      key: `/${role}/dashboard/users`,
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/dashboard/sales">Sales</Link>,
      key: `/${role}/dashboard/sales`,
      icon: <ProfileOutlined />
    },
  ];

  if (role === USER_ROLE.ADMIN) return adminSidebarItems;
};
