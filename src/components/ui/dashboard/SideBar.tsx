/* eslint-disable @typescript-eslint/no-explicit-any */

import { Layout, Menu } from "antd";
import { sidebarItems } from "../../Constant/sidebarItems";
import { USER_ROLE } from "../../Constant/role";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideBar = () => {
  const role = USER_ROLE.ADMIN;

  return (
    <Sider
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        background: "white",
        borderRight: "2px solid #F3F3F3",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: ".5rem",
          padding: "10px 0px",
        }}
      >
        <Link to="/">
          <img
            src={logo}
            alt=""
            style={{
              width: "159px",
              height: "45px",
            }}
          />
        </Link>
      </div>
      <Menu
        style={{
          color: "#8A94A6",
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
