import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./header/header";
import { withTranslation } from "react-i18next";
import AdvertBody from "./advert/advertBody";
import Footer from "./footer/footer";
import Content from "./content/content";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <AdvertBody />
        <Content />
        <Footer />
      </div>
    );
  }
}
