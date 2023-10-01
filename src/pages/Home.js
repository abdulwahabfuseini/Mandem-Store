import React from "react";
import Layout from "../layout/Layout";
import Hero from "../components/home/Hero";
import Category from "../components/home/Category";
import Sales from "../components/home/Sales";
import Service from "../components/home/Service";
import Products from "../components/home/Product/Products";
import NewArrival from "../components/home/NewArrival/NewArrival";
import Subscribe from "../components/home/Subscribe";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Category />
      <Service />
      <Sales />
      <Products />
      <NewArrival />
      <Subscribe />
    </Layout>
  );
};

export default Home;
