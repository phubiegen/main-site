import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import restaurantShopSvg from "../../svgs/restaurant.svg";
import motorSvg from "../../svgs/motor1.svg";
import downloadApp from "../../svgs/downloadApp.svg";
import Fade from "react-reveal/Fade";
import { oranges } from "../colors";
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  descSvg: {
    width: "120px",
    height: "120px",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      color: `${oranges}`,
      fontFamily: "Indie Flower",
      color: "orange",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px",
      color: `${oranges}`,
      fontFamily: "Indie Flower",
      color: "orange",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      color: `${oranges}`,
      fontFamily: "Indie Flower",
      color: "orange",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25px",
      fontWeight: "bold",
      color: `${oranges}`,
      fontFamily: "Indie Flower",
      color: "orange",
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
  content: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Indie Flower",
  },
}));

let data = [
  {
    src: restaurantShopSvg,
    title: "Add your Restaurant",
    content:
      "Expand your restaurant and reach many customers by partnering with us",
  },
  {
    src: motorSvg,
    title: "Become a delivery Person",
  },
];

export default function LinksToPage() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} style={{ padding: "10px" }}>
        <Grid item xs={12} sm={6} md={4} style={{ padding: "10px" }}>
          <Fade left>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{ textAlign: "center", paddingTop: "10px" }}
              >
                <Image
                  src={restaurantShopSvg}
                  className={classes.descSvg}
                  as="div"
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <h1 className={classes.title}>Add Your Restaurant</h1>
              </Grid>
              <Grid item xs={12} className={classes.content}>
                Expand your restaurant and reach many customers by partnering
                with us <br />
                <a
                  href="https://restaurant.phubie.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#880e4f", fontWeight: "bold" }}
                >
                  Signup your restaurant <Icon name="arrow right" />
                </a>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade bottom>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{ textAlign: "center", paddingTop: "10px" }}
              >
                <Image src={motorSvg} className={classes.descSvg} as="div" />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <h1 className={classes.title}>Become Delivery Personel</h1>
              </Grid>
              <Grid item xs={12} className={classes.content}>
                Signup a delivery personel account with us and earn whiles
                delivering <br />
                <Link
                  to="/delivery/personel/signup"
                  style={{ color: "#880e4f", fontWeight: "bold" }}
                >
                  Signup an account <Icon name="arrow right" />
                </Link>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade right>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{ textAlign: "center", paddingTop: "10px" }}
              >
                <Image src={downloadApp} className={classes.descSvg} as="div" />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <h1 className={classes.title}>Try our app</h1>
              </Grid>
              <Grid item xs={12} className={classes.content}>
                Download our app from playstore or appstore and make your orders
                now <br />
                <Link
                  to="/delivery/personel/signup"
                  style={{ color: "#880e4f", fontWeight: "bold" }}
                >
                  Signup a user account
                  <Icon name="arrow right" />
                </Link>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}
