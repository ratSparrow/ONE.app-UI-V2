/* eslint-disable react-hooks/exhaustive-deps */
import { Layout, Menu } from "antd";
import { isLoggedIn, isRole } from "../services/auth.service";
import { useEffect, useState } from "react";
import { ADMIN } from "../constants/common/user-constant";
import { Navigate, Outlet } from "react-router-dom";
import SuperAdminSidebarItems from "../constants/layout-item/SuperAdminSidebarItems";
import { AdminSidebarItems } from "../constants/layout-item/AdminSidebarItems";


const { Sider, Content } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Files", "9", <FileOutlined />),
// ];

const AdminLayout = () => {
  const loggedInUser = isLoggedIn();
  const loggedInUserRole = isRole();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loggedInUser || loggedInUserRole !== ADMIN) {
      <Navigate to="/login" state={{ from: location }} replace />;
    }
    setIsLoading(true);
  }, [isLoading]);

  const role = "admin";
  return (
    <div>
      <Layout>
        <Layout hasSider>
          <Content
            style={{
              backgroundColor: "#E7E9EB",
            }}
          >
            <Outlet />
          </Content>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "sticky",
              top: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <h1
              style={{ color: "white", textAlign: "center", padding: "16px 0" }}
            >
              ADMIN PANEL
            </h1>
            <Menu
              theme="dark"
              defaultSelectedKeys={["profile"]}
              mode="inline"
              items={AdminSidebarItems(role)}
            />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminLayout;
