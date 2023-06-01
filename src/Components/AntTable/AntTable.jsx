import { Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const AntTable = () => {
  const usersStore = useSelector((state) => state.users);
  const listUser = [...usersStore.listUsers];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.users.fetchUsers();
  }, []);
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
              dispatch.users.deleteUser(listUser, record);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={usersStore.listUsers} />;
};
