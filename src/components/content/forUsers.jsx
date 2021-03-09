import React from "react";
import { oranges } from "../colors";
import MyCard from "./myCard";
import Fade from "react-reveal/Fade";
import { Grid } from "@material-ui/core";
import hamburgerSVG from "./svgs/hamburger.svg";
import mobileAppsvg from "./svgs/mobile.svg";
import onlinePayment from "./svgs/onlinePayment.svg";
import deliverySvg from "./svgs/delivery.svg";
import mapSVG from "./svgs/map.svg";
import payment from "./svgs/payment.svg";

const content = [
  {
    src: hamburgerSVG,
    title: "Hygienic Food",
    content: `We make sure Restaurants partnering with us supply you with hygieninc and healthy food,
     which comes well packaged. The packages are `,
  },
  {
    src: mobileAppsvg,
    title: "Mobile App",
    content: `You get our free users app which you can use to food or book table from any restaurant closest to you.
    You get to search any food of your choices provided the restaurants serves that particular food. Experience the best
    your neighbourhood has to offer.`,
  },
  {
    src: deliverySvg,
    title: "Fast Delivery",
    content: `Our cherished delivery personnel makes sure your is delivered very fast at your chosen location.`,
  },
  {
    src: payment,
    title: "Payment Options",
    content: `We provide you with a wide variety payment options such as COD (Cash on Delivery), Mobile Cash (MoMo, Vodafone Cash, Tigo Cash),
    and card payments (debit, credit, and mastercard)`,
  },
  {
    src: mapSVG,
    title: "Live Order Tracking",
    content: `You get to track your orders through our customized timelined notification. Your get to know when your
    order is accepted, discharged, and the delivery personnel bringing your order.`,
  },
];

export default function ForUsers() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Fade left>
        <h1
          style={{
            color: `${oranges}`,
            fontFamily: "Indie Flower",
            paddingLeft: "10px",
          }}
        >
          For Users
        </h1>
      </Fade>
      <Grid container spacing={3} style={{ padding: "10px" }}>
        {content.map((data, index) => (
          <Grid xs={12} sm={6} md={4} key={index} style={{ padding: "10px" }}>
            <MyCard src={data.src} title={data.title} content={data.content} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
