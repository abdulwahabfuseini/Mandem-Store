import React from "react";
import { HomeData } from "./Data";
import Banner from "./Banner";
import { Container } from "reactstrap";

const Hero = () => {
  return (
    <Container className="w-full h-full px-2 py-4 sm:px-6 lg:px-8 overflow-hidden">
      {HomeData.map((item, index) => (
        <Banner key={index} item={item} />
      ))}
    </Container>
  );
};

export default Hero;
