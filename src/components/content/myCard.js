import React from "react";
import { Card, Grid, makeStyles } from "@material-ui/core";
import { Image } from "semantic-ui-react";
import Fade from "react-reveal";
import { oranges, violet } from "../colors";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  descSvg: {
    width: "120px",
    height: "120px",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      color: `${violet}`,
      fontFamily: "Indie Flower",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px",
      color: `${violet}`,
      fontFamily: "Indie Flower",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      color: `${violet}`,
      fontFamily: "Indie Flower",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25px",
      fontWeight: "bold",
      color: `#6C63FF`,
      fontFamily: "Indie Flower",
    },
  },
  text2: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      color: "white",
      fontFamily: "Indie Flower",
      color: `${violet}`,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      color: "white",
      fontFamily: "Indie Flower",
      color: `${violet}`,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25px",
      color: "white",
      fontFamily: "Indie Flower",
      color: `${violet}`,
    },
  },
  content: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Indie Flower",
  },
}));

export default function MyCard(props) {
  const classes = useStyles();

  return (
    <Fade>
      <motion.div
        whileHover={{
          scale: 1.05,

          transition: { duration: 0.3 },
        }}
      >
        <Card elevation={20} style={{ height: "320px" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center", paddingTop: "10px" }}
            >
              <Image as="div" src={props.src} className={classes.descSvg} />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <p className={classes.title}>{props.title}</p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.content}>{props.content}</p>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </Fade>
  );
}
