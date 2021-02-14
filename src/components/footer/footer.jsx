import React from "react";
import { Grid, Button, Icon, Divider } from "@material-ui/core";
import { Input, Button as Btn, Icon as Ic } from "semantic-ui-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import MapVector from "./mapvector6.svg";

const color = "#e35f17";
const textColor = "#000";
const socialColor = "#26c6da";

export default function Footer() {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f5f5f5",
        padding: "30px",
        // backgroundImage: `url(${MapVector})`,
        // backgroundSize: "100% 100%",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        spacing={3}
        style={{
          border: "3px solid #e0e0e0",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Grid item xs={6} sm={3} style={{ textAlign: "left" }}>
          <h3 style={{ color: `${color}`, fontFamily: "Indie Flower" }}>
            Company
          </h3>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              About Us
            </motion.p>
          </Link>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              Blog
            </motion.p>
          </Link>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              Team
            </motion.p>
          </Link>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              Careers
            </motion.p>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <h3 style={{ color: `${color}`, fontFamily: "Indie Flower" }}>
            Information
          </h3>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              {" "}
              About Us
            </motion.p>
          </Link>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              More search
            </motion.p>
          </Link>

          <Link to="/">
            {" "}
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              Services
            </motion.p>
          </Link>

          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              Testimonial
            </motion.p>
          </Link>

          <Link to="/">
            {" "}
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              Daily ads
            </motion.p>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h3 style={{ color: `${color}` }}>Helpful Links</h3>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              {" "}
              Supports
            </motion.p>
          </Link>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              {" "}
              Terms and Conditions
            </motion.p>
          </Link>
          <Link to="/">
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "#4dd0e1",
                transition: { duration: 0.3 },
              }}
              style={{
                color: `${textColor}`,
                margin: "8px",
                fontFamily: "Indie Flower",
              }}
            >
              {" "}
              Privacy Policy
            </motion.p>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h3 style={{ color: `${color}`, fontFamily: "Indie Flower" }}>
            Subscribe for more info
          </h3>
          <Input
            icon="mail"
            iconPosition="left"
            placeholder="email address..."
          />
          <h3 style={{ color: `${color}`, fontFamily: "Indie Flower" }}>
            Address
          </h3>
          <p>Mateheko Jonkrobi Rd.</p>
          <p>Accra, Ghana.</p>
          <p>+91-8264174451</p>
          <p>+233-553584324</p>
          <p>info@phubie.com</p>
        </Grid>
      </Grid>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <Grid container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Btn
              as={motion.div}
              whileHover={{
                scale: 1.08,
                backgroundColor: `${socialColor}`,
                transition: { duration: 0.1 },
              }}
              icon
              style={{ color: "white", backgroundColor: `${color}` }}
            >
              <Ic name="facebook f" />
            </Btn>
            <Btn
              icon
              as={motion.div}
              whileHover={{
                scale: 1.08,
                backgroundColor: `${socialColor}`,
                transition: { duration: 0.1 },
              }}
              style={{ color: "white", backgroundColor: `${color}` }}
            >
              <Ic name="twitter" />
            </Btn>

            <Btn
              icon
              as={motion.div}
              whileHover={{
                scale: 1.08,
                backgroundColor: `${socialColor}`,
                transition: { duration: 0.1 },
              }}
              style={{ color: "white", backgroundColor: `${color}` }}
            >
              <Ic name="instagram" />
            </Btn>
            <Btn
              icon
              as={motion.div}
              whileHover={{
                scale: 1.08,
                backgroundColor: `${socialColor}`,
                transition: { duration: 0.1 },
              }}
              style={{ color: "white", backgroundColor: `${color}` }}
            >
              <Ic name="linkedin" />
            </Btn>
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
      <div style={{ textAlign: "center" }}>
        <p>
          Copyright @2020 <strong>Phubie</strong>
        </p>
      </div>
    </div>
  );
}
