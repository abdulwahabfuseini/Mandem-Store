import React from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { AllProducts } from "../assets/ProductData";
import { useDispatch } from "react-redux";
import { Button, Typography, message } from "antd";
import { CartActions } from "../Store/cartSlice";
import RelatedProduct from "../components/RelatedProduct";
import Rating from "../components/Rating";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const device = AllProducts.find((device) => device.name === productId);

  const { id, name, cover, price, rate, review, description, condition } = device;

  const AddToCart = () => {
    dispatch(CartActions.addToCart({ id, name, cover, price }));
    message.success(`${name} Added to Cart`);
  };

  return (
    <Layout>
      <div className="relative grid px-3 py-14 overflow-hidden place-items-center sm:px-8 lg:px-6 gap-y-14 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2  gap-y-6 lg gap-x-10 ">
          <div className="p-10 bg-gray-200" data-aos="fade-right">
            <img
              src={`/images/${cover}`}
              alt={name}
              className="object-contain lg:w-[500px] lg:h-[350px] hover:scale-x-105"
            />
          </div>
          <div className="space-y-2" data-aos="fade-left">
            <h1 className="text-2xl font-semibold sm:text-3xl">{name}</h1>
            <Typography className="w-full text-lg tracking-tighter text-justify lg:w-11/12">
              {description}
            </Typography>
            <Rating rate={rate} review={review} />
            <Typography className="text-xl font-medium text-Red">
              Unit Price:  GH₵: {price.toLocaleString()}
            </Typography>
            <p className="text-xl">Condition: {condition}</p>
            <div className="space-x-4">
              <Button
                onClick={AddToCart}
                className="w-32 h-10 text-lg text-white sm:w-40 rounded-3xl bg-Red mt-12"
              >
                AddToCart
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-full ">
          <header className="py-8 text-lg font-semibold text-center sm:text-2xl text-Red">Related Products</header>
          <div className="grid grid-cols-2 gap-3 py-6 sm:grid-auto-fit-xs place-items-center" data-aos="fade-up">
            {device.related.map((Product, index) => (
              <RelatedProduct key={index} Product={Product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
