import { Grid } from "@material-ui/core";
import { Button, Image } from "antd";
import React from "react";
import { Fade } from "react-reveal";
import { Input } from "semantic-ui-react";
import { violet } from "../colors";
import FunnyImg from "./funny.jpeg";

export default function MapSelect() {
  return (
    <div>
      <Grid container style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6} style={{ padding: "15px" }}>
          <Fade left>
            <Image src={FunnyImg} alt="phubie funny" />
          </Fade>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          style={{ paddingTop: "10%", textAlign: "center" }}
        >
          <Fade right>
            <Input
              icon="point"
              placeholder="Enter location Address"
              iconPosition="left"
            />
            <br />
            <br />
            <Button
              style={{ backgroundColor: `${violet}`, color: "white" }}
              type="primary"
            >
              Find Location
            </Button>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}
