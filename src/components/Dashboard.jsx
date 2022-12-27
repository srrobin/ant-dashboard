import { Card, Col, Layout, Menu, Row, Space, Typography } from "antd";
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
        <Content className="content">
          <Row gutter={[16, 32]}>
            <Col xl={8} xs={24}>
              <Card>
                <Typography.Title> Card Title </Typography.Title>
                <Typography.Paragraph>
                  lorem30 Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Suspendisse mollis, nisl luctus accumsan ultricies,
                  justo turpis dictum augue, vel bibendum urna massa nec risus.
                  Phasellus accumsan, ligula in facilisis porttitor, nunc erat
                  lacinia magna, nec sagittis nulla metus sed odio. Quisque
                  facilisis ut dui non euismod. Praesent ut lacinia nisl, ut
                  tempor nulla. Duis tincidunt ut dolor sit amet accumsan.
                  Maecenas euismod sapien vel libero interdum, quis gravida
                  risus vehicula.
                </Typography.Paragraph>
              </Card>
            </Col>
            <Col xl={8} xs={24}>
              <Card>
                <Space direction="horizontal">
                  <AiOutlineDeploymentUnit size={50} />
                  <Typography.Title> Card Title </Typography.Title>
                </Space>
                <Typography.Paragraph>
                  lorem30 Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Suspendisse mollis, nisl luctus accumsan ultricies,
                  justo turpis dictum augue, vel bibendum urna massa nec risus.
                  Phasellus accumsan, ligula in facilisis porttitor, nunc erat
                  lacinia magna, nec sagittis nulla metus sed odio. Quisque
                  facilisis ut dui non euismod. Praesent ut lacinia nisl, ut
                  tempor nulla. Duis tincidunt ut dolor sit amet accumsan.
                  Maecenas euismod sapien vel libero interdum, quis gravida
                  risus vehicula.
                </Typography.Paragraph>
              </Card>
            </Col>
            <Col xl={8} xs={24}>
              <Card>
                <Space direction="horizontal">
                  <AiOutlineDeploymentUnit size={30} />
                  <small>Discription</small>
                </Space>
                <Typography.Paragraph>
                  lorem30 Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Suspendisse mollis, nisl luctus accumsan ultricies,
                  justo turpis dictum augue, vel bibendum urna massa nec risus.
                  Phasellus accumsan, ligula in facilisis porttitor, nunc erat
                  lacinia magna, nec sagittis nulla metus sed odio. Quisque
                  facilisis ut dui non euismod. Praesent ut lacinia nisl, ut
                  tempor nulla. Duis tincidunt ut dolor sit amet accumsan.
                  Maecenas euismod sapien vel libero interdum, quis gravida
                  risus vehicula.
                </Typography.Paragraph>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
