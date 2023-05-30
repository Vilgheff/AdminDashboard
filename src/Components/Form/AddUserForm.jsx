import { Button, Form, Input, Select } from "antd";
import React from "react";
const { Option } = Select;
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
  const onFinish = (values) => {
    const newUser = {
        key: Math.floor(Math.random() * 10000) + 1,
        name: values.name,
        age: values.age,
        address: values.address
    };
    setDataSource((pre) => {
        return [...pre, newUser];
    });
    console.log(values);
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
