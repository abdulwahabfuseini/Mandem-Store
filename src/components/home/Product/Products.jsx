import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ProductsData } from "../Data";
import { Col } from "reactstrap";
import { ScaleLoader } from "react-spinners";

const Products = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  return (
    <div className="w-full h-full px-2 my-12 sm:px-6 lg:px-8 place-items-center" id="discount">
      <header className="mb-2 text-4xl font-bold text-center">
        Summer Discount Products
      </header>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident
        facer
      </p>
      <Col className="grid grid-cols-2 gap-3 py-6 sm:grid-auto-fit-xs place-items-center">
        {ProductsData.map((product, index) => (
          <Col key={index}>
            {loading ? (
              <ScaleLoader
                color="#36d7b7"
                loading={loading}
                size={100}
                margin={2}
                className="py-10"
              />
            ) : (
              <ProductItem
                id={product.id}
                name={product.name}
                cover={product.cover}
                price={product.price}
                discount={product.discount}
                desc={product.desc}
                quantity={product.quantity}
                totalPrice={product.totalPrice}
              />
            )}
          </Col>
        ))}
      </Col>
    </div>
  );
};

export default Products;
