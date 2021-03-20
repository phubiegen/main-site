import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Fade } from "react-reveal";
import { oranges } from "../colors";

export default function LaunchDate() {
  return (
    <div>
      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={false} sm={2} md={3}></Grid>
        <Grid item xs={12} sm={8} md={6} style={{ padding: "10px" }}>
          <Typography variant="h3">
            Launch Date of app{" "}
            <span style={{ color: `${oranges}` }}>
              <Fade left>24th April, 2021</Fade>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2} md={3}></Grid>
      </Grid>
    </div>
  );
}
