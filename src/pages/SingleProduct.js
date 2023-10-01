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

  const { id, name, cover, price, rate, review } = device;

  const AddToCart = () => {
    dispatch(CartActions.addToCart({ id, name, cover, price }));
    message.success("Device Added to Cart");
  };

  return (
    <Layout>
      <div className="relative grid px-3 py-6 overflow-hidden place-items-center sm:px-8 lg:px-6 gap-y-14">
        <div className="grid lg:grid-cols-2 place-items-center gap-y-6 lg gap-x-6 ">
          <div className="p-10 bg-gray-200" data-aos="fade-right">
            <img
              src={`/images/${cover}`}
              alt={name}
              className="object-contain lg:w-[500px] lg:h-[500px]"
            />
          </div>
          <div className="space-y-6" data-aos="fade-left">
            <h1 className="text-2xl font-semibold sm:text-3xl">{name}</h1>
            <Rating rate={rate} review={review} />
            <Typography className="text-xl font-medium text-Red">
              Unit Price: GH₵: {price.toLocaleString()}.00
            </Typography>
            <Typography className="w-full text-lg tracking-tighter text-justify lg:w-11/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              rem sint officia, asperiores minus placeat eum? At, dignissimos
              possimus! Amet distinctio eveniet, quia dolor, quae vel aperiam
              eaque, minima voluptatibus dolorem odio debitis voluptatem dolorum
              doloremque velit sapiente mollitia corrupti accusamus aliquam
              quidem corporis accusantium cum dignissimos aut. Dolorem iusto
              voluptatibus, id vitae iste explicabo delectus sapiente aliquid
              debitis cupiditate quisquam sint rem sunt dicta sed deleniti nisi
              eveniet! Quaerat ipsam quod perspiciatis quas temporibus rem optio
              eum consectetur, assumenda distinctio, quam unde hic voluptatibus
              vitae ducimus? Cum officia voluptas beatae ducimus illum fugiat
              quam veritatis, quas voluptatem. Temporibus, ratione.
            </Typography>
            <div className="space-x-4 ">
              <Button
                onClick={AddToCart}
                className="w-40 h-10 text-lg text-white rounded-3xl bg-Red"
              >
                AddToCart
              </Button>
              {/* <Button className="w-20 h-10 text-lg text-white rounded-3xl bg-slate-900">
                Shop
              </Button> */}
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
