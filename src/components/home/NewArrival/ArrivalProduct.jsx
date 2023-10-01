import React from "react";
import { Col, Row } from "reactstrap";

const ArrivalProduct = ({ name, cover }) => {
  
  return (
    <Row data-aos="fade-down">
      <img
        alt="Hp"
        src={`/images/${cover}`}
        className="object-contain w-full cursor-pointer hover:scale-105 h-36 sm:h-40"
      />
      <Col className="px-2 py-2 lg:px-4">
        <p className="truncate ">{name}</p>
      </Col>
    </Row>
  );
};

export default ArrivalProduct;
