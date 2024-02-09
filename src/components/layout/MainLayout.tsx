import { Layout } from "antd";

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;