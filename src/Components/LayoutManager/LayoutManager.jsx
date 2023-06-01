import { NavLink, Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import styled from "styled-components";
const { Header, Sider, Content } = Layout;
const StyledLayout = styled(Layout)`
  height: 120vh;
  .top-content-charts {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  .demo-loadmore-list {
    min-height: 350px;
  }
  .editable-cell {
    position: relative;
  }

  .editable-cell-value-wrap {
    padding: 5px 12px;
    cursor: pointer;
  }

  .editable-row:hover .editable-cell-value-wrap {
    padding: 4px 11px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
   }
`;

export const LayoutManager = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <StyledLayout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <NavLink to="/">Home</NavLink>,
              // path: "/",
              // onClick: () => {
              //   window.location.assign("/");
              // },
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/user">User</NavLink>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <NavLink to="/customers">Customers</NavLink>,
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: <NavLink to="/product">Product</NavLink>,
            },
            {
              key: "5",
              icon: <UploadOutlined />,
              label: <NavLink to="/orders">orders</NavLink>,
            },
            {
              key: "6",
              icon: <UploadOutlined />,
              label: <NavLink to="/coupon">coupon</NavLink>,
            },
          ]}
          onClick={onClick}
          selectedKeys={[current]}
        >
          {/* <Link to={items.path}></Link> */}
          {/* <NavLink to="/user">
            <Menu.Item>User</Menu.Item>
          </NavLink> */}
        </Menu>
      </Sider>
      <StyledLayout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </StyledLayout>
    </StyledLayout>
  );
};
