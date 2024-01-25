import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { USER_ROLE } from "./role";
import { UserOutlined, AppstoreOutlined, ProfileOutlined  } from "@ant-design/icons";

export const sidebarItems = (role: string) => {
  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link to="/dashboard">Dashboard</Link>,
      key: `/${role}/dashboard/user`,
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/dashboard/user">Users</Link>,
      key: `/${role}/dashboard/user`,
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
