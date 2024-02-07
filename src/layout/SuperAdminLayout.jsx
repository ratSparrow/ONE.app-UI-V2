/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { isLoggedIn, isRole } from "../services/auth.service";
import { useEffect } from "react";
import { SUPER_ADMIN } from "../constants/common/user-constant";
import { Navigate, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SuperAdminSidebarItems from "../constants/user/SuperAdminSidebarItems";

const SuperAdminLayout = () => {
  const loggedInUser = isLoggedIn();
  const loggedInUserRole = isRole();

  const [isLoading, setIsLoading] = useState(false);
  console.log(loggedInUserRole);

  useEffect(() => {
    if (!loggedInUser || loggedInUserRole !== SUPER_ADMIN) {
      <Navigate to="/login" state={{ from: location }} replace />;
    }
    setIsLoading(true);
  }, [isLoading]);

  const role = "super_admin";
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
              SUPER ADMIN PANEL
            </h1>
            <Menu
              theme="dark"
              defaultSelectedKeys={["profile"]}
              mode="inline"
              items={SuperAdminSidebarItems(role)}
            />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};

export default SuperAdminLayout;
