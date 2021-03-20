import React from "react";
import MobileStoreButton from "react-mobile-store-button";
import { Grid, Button, Icon, Divider, makeStyles } from "@material-ui/core";
import { Input, Button as Btn, Icon as Ic } from "semantic-ui-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MapVector from "./map.svg";
import Fade from "react-reveal/Fade";
import { oranges, violet } from "../colors";
import appStore2 from "./appstore2.svg";
import { toast } from "react-toastify";
toast.configure();

const color = "#e35f17";
const textColor = "#000";
const socialColor = "#26c6da";

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      color: "#9e9e9e",
      fontFamily: "Indie Flower",
      fontWeight: "bold",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "28px",
      color: "#9e9e9e",
      fontFamily: "Indie Flower",
      fontWeight: "bold",
    },
  },
}));

const company = [
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Team",
    url: "/team",
  },
  {
    name: "Careers",
    url: "/careers",
  },
  {
    name: "Blog",
    url: "blog",
  },
  {
    name: "Contacts",
    url: "/contacts",
  },
];

const restaurants = [
  { name: "Add Restaurant", url: "https://restaurant.phubie.com" },
  { name: "Business App", url: "https://restaurant.phubie.com" },
  { name: "Restaurant for Restaurant", url: "https://restaurant.phubie.com" },
];

const legal = [
  {
    name: "Terms & Condition",
    url: "",
  },
  {
    name: "Refund &  Cancellation",
    url: "",
  },
  {
    name: "Privacy Policy",
    url: "",
  },
  {
    name: "Cookies",
    url: "",
  },
];

export default function FooterTwo() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ padding: "10px" }}>
        <div style={{ height: "50px" }}></div>
        <Grid container>
          <Grid item sm={6} md={3} style={{ padding: "3px" }}>
            <h1 className={classes.header}>Company</h1>
            {company.map((data, index) => (
              <Link to={data.url}>
                <motion.p
                  whileHover={{
                    scale: 1.02,
                    color: `${oranges}`,
                    transition: { duration: 0.1 },
                  }}
                  style={{
                    color: "white",
                    margin: "8px",
                    fontFamily: "Indie Flower",
                    fontSize: "18px",
                  }}
                >
                  {data.name}
                </motion.p>
              </Link>
            ))}
          </Grid>
          <Grid item sm={6} md={3} style={{ padding: "3px" }}>
            <h1 className={classes.header}>For Restaurant</h1>
            {restaurants.map((data, index) => (
              <a href={data.url}>
                <motion.p
                  whileHover={{
                    scale: 1.02,
                    color: `${oranges}`,
                    transition: { duration: 0.1 },
                  }}
                  style={{
                    color: "white",
                    margin: "8px",
                    fontFamily: "Indie Flower",
                    fontSize: "18px",
                  }}
                >
                  {data.name}
                </motion.p>
              </a>
            ))}
          </Grid>
          <Grid item sm={6} md={3} style={{ padding: "3px" }}>
            <h1 className={classes.header}>Legal Terms</h1>
            {legal.map((data, index) => (
              <Link to={data.url}>
                <motion.p
                  whileHover={{
                    scale: 1.02,
                    color: `${oranges}`,
                    transition: { duration: 0.1 },
                  }}
                  style={{
                    color: "white",
                    margin: "8px",
                    fontFamily: "Indie Flower",
                    fontSize: "18px",
                  }}
                >
                  {data.name}
                </motion.p>
              </Link>
            ))}
          </Grid>
          <Grid item sm={6} md={3} style={{ padding: "3px" }}>
            <a
              onClick={() =>
                toast.warn("Launch Date is 24th April, 2021.", {
                  autoClose: "1500",
                })
              }
            >
              <div
                style={{
                  borderRadius: "5px",
                  width: "300px",
                  height: "130px",
                  backgroundImage: `url(${appStore2})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
            </a>
            <a
              onClick={() =>
                toast.warn("Launch Date is 24th April, 2021.", {
                  autoClose: "1500",
                })
              }
            >
              {" "}
              <div
                style={{
                  borderRadius: "5px",
                  width: "300px",
                  height: "130px",
                  backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg")`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
            </a>
          </Grid>
        </Grid>
      </div>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <Grid container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Btn
              as={motion.div}
              whileHover={{
                scale: 1.08,
                backgroundColor: `${violet}`,
                transition: { duration: 0.1 },
              }}
              icon
              style={{ color: "white", backgroundColor: `${oranges}` }}
            >
              <Ic name="facebook f" />
            </Btn>
            <Btn
              icon
              as={motion.div}
              whileHover={{
                scale: 1.08,
                backgroundColor: `${violet}`,
                transition: { duration: 0.1 },
              }}
              style={{ color: "white", backgroundColor: `${oranges}` }}
            >
              <Ic name="twitter" />
            </Btn>

            <Btn
              icon
              as={motion.div}
              whileHover={{
                scale: 1.08,
                backgroundColor: `${violet}`,
                transition: { duration: 0.1 },
              }}
              style={{ color: "white", backgroundColor: `${oranges}` }}
            >
              <Ic name="instagram" />
            </Btn>
            <a href="https://www.linkedin.com/company/phubie/">
              <Btn
                icon
                as={motion.div}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: `${violet}`,
                  transition: { duration: 0.1 },
                }}
                style={{ color: "white", backgroundColor: `${oranges}` }}
              >
                <Ic name="linkedin" />
              </Btn>
            </a>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
      </div>
      <Divider
        light={true}
        style={{
          height: "2px",
          color: "#bdbdbd",
          backgroundColor: "#bdbdbd",
          marginBottom: "10px",
        }}
      />
      <div style={{ textAlign: "center", padding: "5px" }}>
        <p style={{ color: "white" }}>
          Copyright @2020 <strong>Phubie</strong>
        </p>
      </div>
    </div>
  );
}
