import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ id, name, cover, price }) => {
  return (
    <div className="w-full h-full bg-white rounded-md" data-aos="fade-up">
      <Link to={`/product/${name}`}>
        <img
          src={`/images/${cover}`}
          alt={name}
          className="object-contain h-32 cursor-pointer w-60 sm:w-80 sm:h-40 lg:hover:scale-110"
        />
        <div className="px-3 py-1 ">
          <p className="text-lg  text-bold w-24 sm:w-44 truncate">{name}</p>
          <div className="flex items-center justify-between py-1">
            <p>
            GH₵:{" "}
              <span className="text-sm font-semibold text-Red">
                {price.toLocaleString()}
              </span>
            </p>
            <Button>Shop</Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
