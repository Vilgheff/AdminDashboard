import { AddUserForm } from "Components/Form";
import { AntTable } from "Components/AntTable";
import { Button } from "antd";
import { useState } from "react";
import { NewHelMet } from "Components/Helmet";

export const User = () => {
  const [showForm, setShowForm] = useState(false);

  const ShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <NewHelMet title="Users"></NewHelMet>
      {showForm && <Button onClick={ShowForm}> Users List</Button>}
      {showForm && <AddUserForm></AddUserForm>}
      {!showForm && <Button onClick={ShowForm}> Add User</Button>}
      {!showForm && <AntTable />}
    </>
  );
};
