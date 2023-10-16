import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = ({ item }) => {
  return (
    <Row className="relative grid w-full h-full px-2 pt-20 pb-12 bg-gray-200 rounded-2xl md:py-28 lg:py-44 place-content-center">
      <Col data-aos="fade-right">
        <h1 className="text-xl sm:text-3xl">{item?.title}</h1>
        <p className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-8xl">
          {item?.SubTitle}
        </p>
        <h1 className="font-extrabold text-white text-[12vw] uppercase -mt-[3vw]">
          {item?.category}
        </h1>
        <button className="p-2 text-sm text-white w-36 sm:w-48 sm:px-4 sm:text-lg sm:py-3 bg-Red rounded-3xl">
          <Link to="/products">{item?.button}</Link>
        </button>
      </Col>
      <Col className="absolute right-0 top-20  w-[60vw]" data-aos="fade-down">
        <Swiper
          direction="vertical"
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-60 sm:h-[300px] lg:h-[650px]"
        >
          {item.cover.map((product, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/images/${product?.imgUrl}`}
                alt={product?.title}
                className="object-contain w-full h-32 sm:h-60 lg:h-96"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
      <Col className="absolute hidden text-right sm:bottom-10 lg:bottom-20 right-16 sm:w-64 lg:w-80 md:block">
        <h4 className="py-2 text-xl">{item?.header}</h4>
        <p className=" text-md text-slate-500">{item?.desc}</p>
      </Col>
    </Row>
  );
};

export default Banner;
