import React from "react";
import Layout from "../layout/Layout";
import HeadTitle from "../components/HeadTitle";
import AboutUs from "../components/about/AboutUs";
import Service from "../components/home/Service";

const About = () => {
  return (
    <Layout>
      <HeadTitle />
      <AboutUs />
      <Service />
    </Layout>
  );
};

export default About;
