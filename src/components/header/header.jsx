import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import { Menu, Dropdown, Button as Btn, Space, Tabs, Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { oranges } from "../colors";
import phubieLogo from "./phubieWhite.png";
import phubieP from "../icons/phubieP.png";
import Login from "../login/login";
import Signup from "../signup/signup";

const MenuChange = (props) => {
  return (
    <Menu>
      <Menu.Item onClick={props.clickLogin}>Login</Menu.Item>
      <Menu.Item onClick={props.clickSignup}>Signup</Menu.Item>
    </Menu>
  );
};

const useStyles = makeStyles((theme) => ({
  btn: {
    display: "inline-block",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bigBtn: {
    [theme.breakpoints.up("xs")]: {
      display: "inline-block",
      color: "white",
      backgroundColor: "transparent",
      // backgroundColor: `${oranges}`,
      margin: "2px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  list: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },
}));

export default function Header() {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleSignup, setVisibleSignup] = useState(false);

  //----- Function for showing Login drawer ----
  const showDrawer = () => {
    setVisibleLogin(true);
  };
  const onClose = () => {
    setVisibleLogin(false);
  };
  //---------------------------------------------

  //----- Function for showing Signup drawer ----
  const showDrawerSignup = () => {
    setVisibleSignup(true);
  };
  const onCloseSignup = () => {
    setVisibleSignup(false);
  };
  //----------------------------------------------
  const classes = useStyles();
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "60px",
        // boxShadow: "7px 7px 7px 7px #eeeeee",
        background: "rgba(0, 0, 0, 0.7)",
        // backgroundColor: `${oranges}`,
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Link to="/">
                <Image
                  as="div"
                  src={phubieLogo}
                  size="tiny"
                  alt="phubie logo"
                  rounded
                  style={{ width: "120px", height: "65px", textAlign: "right" }}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container>
            <Grid
              item
              xs={false}
              sm={12}
              style={{ textAlign: "right", paddingTop: "5px" }}
            >
              {/* <div className={classes.list}>
                <Tabs
                  defaultActiveKey="1"
                  onChange={callback}
                  centered
                  style={{ color: "white" }}
                >
                  <TabPane tab="About Us" key="1" />

                  <TabPane tab="Feature" key="2" />
                </Tabs>
              </div> */}
              <Btn
                shape="round"
                className={classes.bigBtn}
                onClick={showDrawer}
              >
                Login
              </Btn>
              <Btn
                shape="round"
                className={classes.bigBtn}
                onClick={showDrawerSignup}
              >
                {" "}
                Signup
              </Btn>
            </Grid>
            <Grid
              item
              xs={12}
              sm={false}
              style={{ textAlign: "right", paddingTop: "10px" }}
            >
              <Space direction="vertical" className={classes.btn}>
                <Dropdown
                  overlay={
                    <MenuChange
                      clickLogin={showDrawer}
                      clickSignup={showDrawerSignup}
                    />
                  }
                  placement="bottomLeft"
                >
                  <Btn
                    shape="round"
                    icon={<MenuOutlined style={{ color: "white" }} />}
                    style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
                  ></Btn>
                </Dropdown>
              </Space>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/**
       * Login Drawer
       */}
      <Drawer
        width="320"
        title={
          <div>
            <Btn
              icon={<CloseOutlined />}
              shape="circle"
              onClick={onClose}
            ></Btn>
            <br />
            <br />
            <h1
              style={{
                fontWeight: "bolder",
                fontFamily: "Indie Flower",
                color: `${oranges}`,
              }}
            >
              Login Account
            </h1>
          </div>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visibleLogin}
      >
        <div
          style={{
            height: "120px",
            backgroundColor: `${oranges}`,
            textAlign: "center",
          }}
        >
          <Image src={phubieP} alt="Phubie" size="small" as="div" />
        </div>
        <br />
        <Login
          clickedSignup={() => {
            onClose();
            showDrawerSignup();
          }}
        />
      </Drawer>

      {/**
       * Signup drawer
       */}
      <Drawer
        title={
          <div>
            <Btn
              icon={<CloseOutlined />}
              shape="circle"
              onClick={onCloseSignup}
            ></Btn>
            <br />
            <br />
            <h1
              style={{
                fontWeight: "bolder",
                fontFamily: "Indie Flower",
                color: `${oranges}`,
              }}
            >
              Create User Account
            </h1>
          </div>
        }
        placement="right"
        width="320"
        closable={false}
        onClose={onCloseSignup}
        visible={visibleSignup}
      >
        <div
          style={{
            height: "120px",
            backgroundColor: `${oranges}`,
            textAlign: "center",
          }}
        >
          <Image src={phubieP} alt="Phubie" size="small" as="div" />
        </div>
        <br />
        <Signup
          clickedLogin={() => {
            onCloseSignup();
            showDrawer();
          }}
        />
      </Drawer>
    </div>
  );
}
