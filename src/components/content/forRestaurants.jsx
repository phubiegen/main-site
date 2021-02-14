import { Card, Grid, makeStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import managementImage from "./svgs/management.svg";
import appSVG from "./svgs/mobileApp.svg";
import socialGirl from "./svgs/socialGirl.svg";
import { oranges } from "../colors";
import MyCard from "./myCard";
import Fade from "react-reveal/Fade";

const data = [
  {
    title: "Inventory Management",
    src: managementImage,
    content: `We provide you with an inventory system (Web and desktop), which helps in managing
    food, managing tables, tracking users following your restaurant,
    analyzing comments and reviews form customer.`,
  },
  {
    title: "App For Management",
    src: appSVG,
    content: `You get a smart app whhich you can also use alongside the web or desktop app, 
    for managing orders, adding of food and table, viewing customer review and comments, and many other features.
    You can also receive or make payment online through your wallets (MoMo, Vodafone Cash) or bank cards.`,
  },
  {
    title: "Advertisement",
    content: `We get to advertise your restaurants to the people closest to you. In the advertisement we showcase 
    your great food or table, any news on discounts or ceremony and events, to users app and also on our various
    social media platform, facebook, linkedIn, Twitter and Instagram`,
    src: socialGirl,
  },
];

export default function ForRestaurants() {
  console.log(Math.floor(Math.random() * 2));
  return (
    <div>
      <Fade left>
        <h1
          style={{
            color: `${oranges}`,
            fontFamily: "Indie Flower",
            paddingLeft: "10px",
          }}
        >
          For restaurants
        </h1>
      </Fade>

      <Grid container spacing={3} style={{ padding: "10px" }}>
        {data.map((data, index) => (
          <Grid xs={12} sm={6} md={4} key={index} style={{ padding: "10px" }}>
            <MyCard src={data.src} title={data.title} content={data.content} />
          </Grid>
        ))}

        {/* <Grid xs={12} sm={6} md={4}></Grid>
        <Grid xs={12} sm={6} md={4}></Grid> */}
      </Grid>
    </div>
  );
}
