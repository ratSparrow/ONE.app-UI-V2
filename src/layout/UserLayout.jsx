/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { USER } from "../constants/common/user-constant";
import { Navigate } from "react-router-dom";
import { isLoggedIn, isRole } from "../services/auth.service";
import { UserSidebarItems } from "../constants/layout-item/UserSidebarItems";

const { Content, Sider } = Layout;

const UserDashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const loggedInUser = isLoggedIn();
  const loggedInUserRole = isRole();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loggedInUser || loggedInUserRole !== USER) {
      <Navigate to="/login" state={{ from: location }} replace />;
    }
    setIsLoading(true);
  }, [isLoading]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <h1 style={{ color: "white", textAlign: "center", padding: "16px 0" }}>
          USER PANEL
        </h1>
        <Menu
          theme="dark"
          defaultSelectedKeys={["account"]}
          mode="inline"
          items={UserSidebarItems()}
          style={{}}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserDashboardLayout;
