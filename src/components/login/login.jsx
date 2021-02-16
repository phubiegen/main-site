import React, { Component } from "react";
import { Button, Form, Input, Select, Divider, Checkbox } from "antd";
import { MailOutlined, GoogleCircleFilled } from "@ant-design/icons";
import { oranges } from "../colors";
const { Option } = Select;

const selectBefore = (
  <Select defaultValue="+233" className="select-before">
    <Option value="+233">+233</Option>
    <Option value="+234">+234</Option>
  </Select>
);

export default class Login extends Component {
  state = {
    number: "",
    useMail: false,
    googleLogin: false,
    otpShow: false,
    otp: "",
  };
  //----- Functions for Login------------------
  onFinishLogin = (values) => {
    // console.log("Success:", values);
  };

  onFinishFailedLogin = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  //--------------------------------------------
  getUserOTP = async () => {};

  render() {
    return (
      <div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinishLogin}
          onFinishFailed={this.onFinishFailedLogin}
        >
          <Form.Item
            name="telephone"
            rules={[
              {
                required: true,
                message: "Please input your Number",
              },
              {
                len: 10,
                message: "Please length must be 10",
              },
            ]}
          >
            <Input
              addonBefore={selectBefore}
              placeholder="Telephone Number"
              type="number"
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Get OTP
            </Button>
          </Form.Item>
        </Form>

        {this.state.otpShow ? (
          <div>
            {/**
             *  Input button shows when clicked on GET OTP
             */}
            <Form>
              <Form.Item
                name="opt"
                rules={[{ len: 5, message: "Please length must be 5" }]}
              >
                <Input
                  addonBefore={"OTP"}
                  onChange={(e) => this.setState({ otp: e.target.value })}
                  placeholder="12345"
                  type="number"
                />
              </Form.Item>
            </Form>
            {/**
             * -----------------------------------------------
             */}
          </div>
        ) : (
          ""
        )}

        <Divider>or</Divider>
        <div style={{ textAlign: "center" }}>
          <Button
            icon={<MailOutlined style={{ color: `${oranges}` }} />}
            shape="round"
            style={{ marginRight: "5px" }}
            onClick={() => this.setState({ useMail: true })}
          >
            Use Email
          </Button>
          <Button
            icon={<GoogleCircleFilled style={{ color: "red" }} />}
            shape="round"
            onClick={() => {
              this.setState({ useMail: false });
            }}
          >
            Google
          </Button>
        </div>
        {this.state.useMail ? (
          <div style={{ marginTop: "20px" }}>
            {" "}
            <Form
              initialValues={{ remember: true }}
              onFinish={this.onFinishLogin}
              onFinishFailed={this.onFinishFailedLogin}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  {
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input type="email" placeholder="exampl@123.com" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Get OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : (
          ""
        )}
        <Divider />
        <div style={{ marginTop: "20px" }}>
          Don't have an account{" "}
          <Button type="link" onClick={this.props.clickedSignup}>
            Signup
          </Button>
        </div>
      </div>
    );
  }
}
