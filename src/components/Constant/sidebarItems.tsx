import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { USER_ROLE } from "./role";
import { UserOutlined } from "@ant-design/icons";

export const sidebarItems = (role: string) => {
  const adminSidebarItems: MenuProps["items"] = [
    {
        label: <Link to="/dashboard/user">User</Link>,
        key: `/${role}/dashboard/user`,
        icon: <UserOutlined />
      },
  ];

  if (role === USER_ROLE.ADMIN) return adminSidebarItems;
};
