import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartActions } from "../../../Store/cartSlice";
import { useDispatch } from "react-redux";
import { Button, message } from "antd";
import { GiShoppingCart } from "react-icons/gi";

const ProductDetail = ({
  id,
  name,
  cover,
  price,
  desc,
  quantity,
  totalPrice,
}) => {

    const dispatch = useDispatch();

  const InCartItem = () => {
    dispatch(CartActions.addToCart({ id, name, cover, price }));
  };

  const DesCartItem = () => {
    dispatch(CartActions.removeFromCart(id));
  };

  const addToCart = () => {
    dispatch(CartActions.addToCart({ id, name, cover, price }));
    message.success("Device added to Cart");
  };

  return (
    <div>
      <img
        src={`/images/${cover}`}
        alt={name}
        className="object-contain w-full sm:w-60 h-40 sm:h-60 rounded-3xl  bg-gray-200"
      />
      <div>
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm">{desc}</p>
        <h1 className="pt-4 pb-2 text-xl font-bold border-b-2">
          Price: GH₵: {price.toLocaleString()}.00
        </h1>
        <div className="flex items-center gap-2 py-2">
          <h6>Qty:</h6>
          <div className="flex items-center gap-4 p-2 rounded-lg">
            <button
              onClick={InCartItem}
              className="p-1 text-lg border-2 cursor-pointer "
            >
              <FaPlus />
            </button>
            <button onClick={DesCartItem} className="font-bold ">
              {quantity}
            </button>
            <button className="p-1 text-lg border-2 cursor-pointer ">
              <FaMinus />
            </button>
          </div>
        </div>
        <Button
          onClick={addToCart}
          type="primary"
          className="flex items-center gap-2 bg-blue-500 my-3 h-10"
        >
          <GiShoppingCart className="w-8 font-bold h-8" />
          <h5 className="text-lg">Add To Cart</h5>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
