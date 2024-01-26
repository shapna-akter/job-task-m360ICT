import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { USER_ROLE } from "./role";
import { UserOutlined, AppstoreOutlined, ProfileOutlined, UserAddOutlined } from "@ant-design/icons";

export const sidebarItems = (role: string) => {
  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link to="">pages</Link>,
      key: `/${role}/`,
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
      label: <Link to="/dashboard/add-user">Add a new user</Link>,
      key: `/${role}/dashboard/add-user`,
      icon: <UserAddOutlined />,
    },
    {
      label: <Link to="/dashboard/sales">Sales</Link>,
      key: `/${role}/dashboard/sales`,
      icon: <ProfileOutlined />
    },
  ];

  if (role === USER_ROLE.ADMIN) return adminSidebarItems;
};
