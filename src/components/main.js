import React, { Component } from "react";
import { Helmet } from "react-helmet";
// import Header from "./header/header";
import { withTranslation } from "react-i18next";
// import AdvertBody from "./advert/advertBody";
// import Footer from "./footer/footer";
// import Content from "./content/content";
// import LinksToPage from "./linksPage/linksToPage";
import asyncComponent from "./asyncComponent/asyncComponent";

const Header = asyncComponent(() => {
  return import("./header/header");
});

const FooterTwo = asyncComponent(() => {
  return import("./footer/footer2");
});

const AdvertBody = asyncComponent(() => {
  return import("./advert/advertBody");
});

const Footer = asyncComponent(() => {
  return import("./footer/footer");
});

const Content = asyncComponent(() => {
  return import("./content/content");
});

const LinksToPage = asyncComponent(() => {
  return import("./linksPage/linksToPage");
});

export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <AdvertBody />
        <Content />
        <LinksToPage />
        {/* <Footer /> */}
        <FooterTwo />
      </div>
    );
  }
}
