import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./header/header";
import { withTranslation } from "react-i18next";
import AdvertBody from "./advert/advertBody";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>Phubie</title>
          <meta
            name="description"
            content="Phubie Online food ordering main page"
          />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>
        <Header />
        <AdvertBody />
      </div>
    );
  }
}
