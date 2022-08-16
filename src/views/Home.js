import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Twilio from "../components/Twilio";
import Content from "../components/Content";

const Home = () => (
  <Fragment>
    <Twilio />
    <Hero />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
