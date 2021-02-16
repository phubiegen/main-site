import React, { Component } from "react";
import { Button, Form, Input, Divider } from "antd";
import { GoogleCircleFilled } from "@ant-design/icons";
import { oranges } from "../colors";
// const { Option } = Select;

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    number: "",
  };
  takeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Name required" }]}
          >
            <Input name="name" onChange={this.takeInput} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Email required",
              },
              {
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Enter a valid email",
              },
            ]}
          >
            <Input
              name="email"
              type="email"
              onChange={this.takeInput}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="number"
            rules={[
              { len: 10, message: "Number must be of length 10" },
              { required: "Please number required" },
            ]}
          >
            <Input
              type="number"
              name="number"
              onChange={this.takeInput}
              placeholder="Phone number"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { min: 6, message: "Minimum 6 characters" },
              { max: 12, message: "Maximum 12 characters" },
              { required: true, message: "Password required" },
              {
                pattern: /(?=.*?[#?!@$%^&*-])/,
                message: "Atleast one special character",
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              name="password"
              onChange={this.takeInput}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Signup Account
            </Button>
          </Form.Item>
        </Form>
        <Divider>or</Divider>
        <div style={{ textAlign: "center" }}>
          <Button
            icon={<GoogleCircleFilled style={{ color: "red" }} />}
            shape="round"
            onClick={() => {}}
          >
            Google
          </Button>
        </div>
        <Divider></Divider>
        <div style={{ marginTop: "20px" }}>
          Already have an account{" "}
          <Button type="link" onClick={this.props.clickedLogin}>
            Login
          </Button>
        </div>
      </div>
    );
  }
}
