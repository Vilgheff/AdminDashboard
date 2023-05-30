import { Space, Table, Tag, Button } from "antd";
import { useState } from "react";

export const AntTable = ({ data, setDataSource }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a
            onClick={() => {
              onDeleteUser(record);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  const onDeleteUser = (record) => {
    setDataSource((pre) => {
      return pre.filter((user) => user.key !== record.key);
    });
  };
  return <Table columns={columns} dataSource={data} />;
};
