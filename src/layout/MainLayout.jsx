import { Layout } from "antd";

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
