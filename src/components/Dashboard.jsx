import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  AiOutlineControl,
  AiOutlineDashboard,
  AiOutlineDeploymentUnit,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="container">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          mode="inline"
          items={[
            {
              key: "1",
              icon: <AiOutlineDashboard />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <AiOutlineControl />,
              label: "nav 2",
              children: [
                {
                  label: "sub menu one",
                  key: "sub_menu",
                },
                {
                  label: "sub menu two",
                  key: "sub_menu",
                },
                {
                  label: "sub menu three",
                  key: "sub_menu",
                  children: [
                    {
                      label: "sub menu one",
                      key: "sub_menu",
                    },
                    {
                      label: "sub menu two",
                      key: "sub_menu",
                    },
                    {
                      label: "sub menu three",
                      key: "sub_menu",
                    },
                  ],
                },
              ],
            },
            {
              key: "3",
              icon: <AiOutlineDeploymentUnit />,
              label: "nav 3",
              children: [
                {
                  label: "sub menu one",
                  key: "sub_menu",
                },
                {
                  label: "sub menu two",
                  key: "sub_menu",
                },
                {
                  label: "sub menu three",
                  key: "sub_menu",
                },
              ],
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header className="header">
          <>
            {React.createElement(
              collapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </>
          header
        </Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
