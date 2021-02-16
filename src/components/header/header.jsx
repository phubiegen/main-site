import {
  Button,
  Grid,
  Menu,
  MenuItem,
  fade,
  makeStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { Dropdown, Icon, Image, Button as BTN, Tab } from "semantic-ui-react";
import TextLogoJs from "../icons/textLogoJs";
import MenuIcon from "@material-ui/icons/Menu";

const panes = [
  {
    menuItem: {
      content: "About Us",
      color: "orange",
    },
  },
  {
    menuItem: {
      content: "Feature",
      color: "orange",
    },
  },
];

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
      backgroundColor: "#e35f17",
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
      width: "auto",
    },
  },
  // search: {
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(3),
  //     width: "auto",
  //   },
  // },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "60px",
        boxShadow: "7px 7px 7px 7px #eeeeee",
        border: "1px solid #f5f5f5",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Image
                as="div"
                src="phubielogo.png"
                size="tiny"
                alt="phubie logo"
                rounded
                style={{ width: "60px", height: "160px", textAlign: "right" }}
              />
            </Grid>
            <Grid item xs={6} style={{ paddingTop: "10px", textAlign: "left" }}>
              <TextLogoJs style={{ textAlign: "left" }} />
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
              <div className={classes.list}>
                <Tab
                  menu={{ secondary: true, pointing: true }}
                  panes={panes}
                  style={{
                    width: "auto",
                    display: "inline-block",
                    marginRight: "20px",
                  }}
                />
              </div>

              <Button variant="contained" className={classes.bigBtn}>
                Login
              </Button>
              <Button variant="contained" className={classes.bigBtn}>
                Signup
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={false}
              style={{ textAlign: "right", paddingTop: "0" }}
            >
              <Button
                className={classes.btn}
                startIcon={
                  <MenuIcon style={{ color: "#9e9e9e", fontSize: "50px" }} />
                }
                onClick={handleClick}
              ></Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>Login</MenuItem>
                <MenuItem>Signup</MenuItem>
                <MenuItem>Support</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
