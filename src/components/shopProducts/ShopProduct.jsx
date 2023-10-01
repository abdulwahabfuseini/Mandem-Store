import { ChevronRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import {
  AllProducts,
  Earbuds,
  HeadPhones,
  Laptops,
  PlayStation,
  SmartPhones,
  SmartWatches,
  Speakers,
} from "../../assets/ProductData";
import ShopCard from "./ShopCard";
import { ScaleLoader } from "react-spinners";
import { Link, useLocation } from "react-router-dom";

const ShopProduct = () => {
  const [filter, setFilter] = useState("All Product");
  const [accessories, setAccessories] = useState(AllProducts);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    if (filter === "All Product") {
      setAccessories(AllProducts);
    }
    if (filter === "Laptop") {
      setAccessories(Laptops);
    }
    if (filter === "PlayStation") {
      setAccessories(PlayStation);
    }
    if (filter === "Speakers") {
      setAccessories(Speakers);
    }
    if (filter === "SmartPhones") {
      setAccessories(SmartPhones);
    }
    if (filter === "HeadPhone") {
      setAccessories(HeadPhones);
    }
    if (filter === "Earbuds") {
      setAccessories(Earbuds);
    }
    if (filter === "SmartWatches") {
      setAccessories(SmartWatches);
    }
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [filter]);

  return (
    <>
      <div className="relative grid place-items-center">
        <span className="font-extrabold text-slate-300 text-[12vw] uppercase mt-[5vw] sm:mt-[2.4vw] lg:-mt-[3.2vw]">
          MANDEM
        </span>
        <div className="absolute top-0 left-0 grid w-full gap-0 py-6 bg-gray-300 sm:py-12 bg-opacity-80 place-items-center">
          <button className="mb-2 text-xl text-gray-700 capitalize">
            <Link to="/">
              <span> Home </span>
            </Link>
            <ChevronRight className="font-thin text-gray-700" />
            <span>{location.pathname.split("/")[1]}</span>
            <ChevronRight className="font-thin text-gray-700" />
            {filter}
          </button>
          <span className="text-3xl capitalize sm:text-5xl ">{filter}</span>
        </div>
      </div>
      <Container className="w-full h-full px-3 py-16 sm:px-6 lg:px-10">
        <Row className="grid lg:grid-cols-4 gap-x-6 gap-y-12">
          <aside className="sm:cols-span-1">
            <header className="text-xl sm:pr-6 sm:text-2xl">
              Products Categories
            </header>
            <Col className="grid grid-cols-2 py-4 sm:grid-cols-1 sm:place-items-start gap-x-3 gap-y-5">
              <button
                id="products"
                onClick={() => setFilter("All Product")}
                className={`${
                  filter === "All Product"
                    ? "activeBtn relative sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:w-1 sm:before:bg-Red sm:before:absolute sm:before:contents()"
                    : "btn"
                }`}
              >
                All
              </button>
              <button
                id="laptop"
                onClick={() => setFilter("Laptop")}
                className={`${
                  filter === "Laptop"
                    ? "activeBtn relative sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:w-1 sm:before:bg-Red sm:before:absolute sm:before:contents()"
                    : "btn"
                }`}
              >
                Laptop
              </button>
              <button
                id="playstation"
                onClick={() => setFilter("PlayStation")}
                className={`${
                  filter === "PlayStation"
                    ? "activeBtn relative sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:w-1 sm:before:bg-Red sm:before:absolute sm:before:contents()"
                    : "btn"
                }`}
              >
                PlayStation
              </button>
              <button
                id="speaker"
                onClick={() => setFilter("Speakers")}
                className={`${
                  filter === "Speakers"
                    ? "activeBtn relative sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:w-1 sm:before:bg-Red sm:before:absolute sm:before:contents()"
                    : "btn"
                }`}
              >
                Speakers
              </button>
              <button
                id="smartphones"
                onClick={() => setFilter("SmartPhones")}
                className={`${
                  filter === "SmartPhones"
                    ? "activeBtn relative sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:w-1 sm:before:bg-Red sm:before:absolute sm:before:contents()"
                    : "btn"
                }`}
              >
                SmartPhones
              </button>
              <button
                id="headphone"
                onClick={() => setFilter("HeadPhone")}
                className={`${
                  filter === "HeadPhone"
                    ? "activeBtn relative sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:w-1 sm:before:bg-Red sm:before:absolute sm:before:contents()"
                    : "btn"
                }`}
              >
                HeadPhone
              </button>
              <button
                id="smartwatches"
                onClick={() => setFilter("SmartWatches")}
                className={`${
                  filter === "SmartWatches"
                    ? "activeBtn relative sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:w-1 sm:before:bg-Red sm:before:absolute sm:before:contents()"
                    : "btn"
                }`}
              >
                SmartWatches
              </button>
              <button
                id="earbuds"
                onClick={() => setFilter("Earbuds")}
                className={`${
                  filter === "Earbuds"
                    ? "activeBtn relative sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:w-1 sm:before:bg-Red sm:before:absolute sm:before:contents()"
                    : "btn"
                }`}
              >
                Earbuds
              </button>
            </Col>
          </aside>
          <main className="sm:col-span-3">
            <header className="text-lg font-extrabold">{filter}</header>
            <span>
              Showing All {accessories.length} {filter}
            </span>
            <Col className="grid grid-cols-2 gap-2 py-6 sm:grid-auto-fit-xs place-items-center pb-14">
              {accessories.slice(0, 10).map((product, index) => (
                <Col key={index}>
                  {loading ? (
                    <ScaleLoader
                      color="#36d7b7"
                      loading={loading}
                      size={100}
                      margin={2}
                      className="py-20"
                    />
                  ) : (
                    <ShopCard
                      id={product.id}
                      name={product.name}
                      cover={product.cover}
                      price={product.price}
                    />
                  )}
                </Col>
              ))}
            </Col>
          </main>
        </Row>
      </Container>
    </>
  );
};

export default ShopProduct;
