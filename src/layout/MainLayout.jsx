/* eslint-disable react/prop-types */
import { Layout } from "antd";
import Header from "../components/common/Header";
import { Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ minHeight: "100vh" }}>
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  );
};

export default MainLayout
