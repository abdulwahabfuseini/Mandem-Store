import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { List } from "antd";
import { Col, Container, Row } from "reactstrap";
import { ArrivalProducts } from "../Data";
import ArrivalProduct from "./ArrivalProduct";

const NewArrival = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <Container className="w-full h-full px-3 lg:py-4 sm:px-6 lg:px-10">
      <Row className="relative">
        <header className="flex items-center gap-1 pb-3 text-xl">
          <img src="/images/SVG/new.png" alt="svg" className="w-12 h-12"/>
          <h1 className="text-lg font-bold">Arrival</h1>
        </header>
        <List className="mt-4">
          <Swiper
            navigation={{ nextEl, prevEl }}
            spaceBetween={8}
            loop={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full "
            breakpoints={{
              0: {
                slidesPerView: 2.2,
              },
              400: {
                slidesPerView: 2.4,
              },
              600: {
                slidesPerView: 3.2,
              },
              768: {
                slidesPerView: 3.2,
              },
              1024: {
                slidesPerView: 7,
              },
            }}
          >
            {ArrivalProducts.map((laptop) => (
              <SwiperSlide
                key={laptop.id}
                className="mb-2 text-center bg-white rounded-md hover:shadow-lg"
              >
                <ArrivalProduct
                  name={laptop.name}
                  intel={laptop.intel}
                  cover={laptop.cover}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Col className="items-center justify-end hidden gap-6 lg:flex">
            <button ref={(node) => setPrevtEl(node)}>
              <FaChevronLeft className="absolute z-10 w-8 h-8 p-2 text-lg font-bold text-black -left-5 sm:w-10 sm:h-10 top-20" />
            </button>
            <button ref={(node) => setNextEl(node)}>
              <FaChevronRight className="absolute z-10 w-8 h-8 p-2 text-lg font-bold text-black -right-5 sm:w-10 sm:h-10 top-20 " />
            </button>
          </Col>
        </List>
      </Row>
    </Container>
  );
};

export default NewArrival;
