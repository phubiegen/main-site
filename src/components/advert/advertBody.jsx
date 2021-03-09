import React, { useState, useEffect } from "react";
import "./advertBody.css";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-reveal";
import { Grid, makeStyles } from "@material-ui/core";
import { Icon, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import Pizza from "./pizza.webp";
import Header from "../header/header";

const useStyles = makeStyles((theme) => ({
  text: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      color: "white",
      fontFamily: "Lobster",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "35px",
      color: "white",
      fontFamily: "Lobster",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "45px",
      color: "white",
      fontFamily: "Lobster",
    },
  },
  text2: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      color: "white",
      fontFamily: "Indie Flower",
      color: "orange",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      color: "white",
      fontFamily: "Indie Flower",
      color: "orange",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25px",
      color: "white",
      fontFamily: "Indie Flower",
      color: "orange",
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
  divStyle: {
    [theme.breakpoints.up("sm")]: {},
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

const content = [
  "Your favourite restaurants and takeaways, delivered to your door.",
  "Receive more number of orders by catering food online with our restaurant food ordering software",
  "Advertise your restaurant on our platform",
  "Order food from favourite restaurants near you",
  "Restaurant table booking available ",
];

const contentStyle = {
  height: "560px",
  color: "white",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function AdvertBody() {
  const [values, setValues] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setValues((values + 1) % 5);
      // console.log(values);
    }, 2000);
  }, [values]);
  return (
    <div className="advertBody">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.7)",
          paddingTop: "170px",
          paddingLeft: "10px",
          paddingRight: "40px",
        }}
      >
        <Grid container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Carousel autoplay style={{ height: "350px", paddingTop: "100px" }}>
              {content.map((data, index) => (
                <div style={contentStyle}>
                  <h1 className={classes.text2}>{data}</h1>
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>

        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6} style={{ marginBottom: "50px" }}>
            <Fade left>
              <h1 className={classes.text}>
                Online food ordering system for you
              </h1>
            </Fade>
            <Slide bottom>
              <h1 className={classes.text2}>{content[values]}</h1>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <Input
              icon="map marker alternate"
              iconPosition="left"
              placeholder="Enter delivery address"
              action={{
                color: "teal",
                labelPosition: "right",
                icon: "arrow circle right",
                content: "Find Food",
              }}
            />
            <br />
            <Link to="/login">Signin</Link>
          </Grid>
        </Grid> */}
      </div>

      {/* <motion.h1
        initial={{
          x: 0,
          y: 100,
          fontSize: "10px",
          color: "orange",
          width: "300px",
          padding: "10px",
        }}
        animate={{
          x: 10,
          fontSize: "35px",
          color: "white",
          width: "500px",
        }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        Your favourite restaurants and takeaways, delivered to your door. Choose
        Phubie
      </motion.h1> */}
    </div>
  );
}
