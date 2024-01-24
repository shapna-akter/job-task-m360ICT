import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "../components/ui/dashboard/SideBar";
import Contents from "../components/ui/dashboard/Contents";

const DashboardLayout = () => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>
        <Outlet />
      </Contents>
    </Layout>
  );
};

export default DashboardLayout;
