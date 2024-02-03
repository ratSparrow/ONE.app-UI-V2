/* eslint-disable react/prop-types */
import { Layout } from "antd";
import Header from "../components/common/Header";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content style={{ minHeight: "100vh" }}>{children}</Content>

      <Footer />
    </Layout>
  );
};

export default MainLayout
