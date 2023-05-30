import { LayoutManager } from "Components/LayoutManager";
import { AddUserForm } from "Components/Form";
import { AntTable } from "Components/AntTable";
import { Button } from "antd";
import { useState } from "react";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];
export const User = () => {
  const [showForm, setShowForm] = useState(false);
  const [dataSource, setDataSource] = useState(data);
  
  const ShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <LayoutManager title="Users">
      {showForm && <Button onClick={ShowForm}> Users List</Button>}
      {showForm && <AddUserForm setDataSource={setDataSource}></AddUserForm>}
      {!showForm && <Button onClick={ShowForm}> Add User</Button>}
      {!showForm && <AntTable data={dataSource} setDataSource={setDataSource} />}
    </LayoutManager>
  );
};
