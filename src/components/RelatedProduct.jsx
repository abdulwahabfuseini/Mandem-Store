import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const RelatedProduct = ({ Product}) => {


  return (
    <div className="w-full bg-white rounded-md h-full py-2">
      <Link to={`/product/${Product?.name}`}>
        <img
          src={`/images/${Product?.cover}`}
          alt={Product?.name}
          className="object-contain h-32 cursor-pointer w-60 sm:w-full sm:h-40 hover:scale-110"
        />
        <div className=" py-3 px-4">
          <h1 className="text-lg">{Product?.name}</h1>
          <div className="flex items-center justify-between">
            <p className="text-xs">
              GH₵:{" "}
              <span className="text-sm font-semibold text-Red">
                {Product?.price.toLocaleString()}
              </span>
            </p>
            <Button>Shop</Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatedProduct;
