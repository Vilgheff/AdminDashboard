import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import React from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export const AddUserForm = ({setDataSource}) => {
  const formRef = React.useRef(null);
  const usersStore = useSelector((state)=>state.users);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const newUser = [ ...usersStore.listUsers ,{
        key: Math.floor(Math.random() * 10000) + 1,
        name: values.name,
        age: values.age,
        address: values.address
    }];
    dispatch.users.setListUsers(newUser);
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  return (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
