import { IconButton } from "@mui/material";
import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { CartActions } from "../../Store/cartSlice";
import { message } from "antd";

const CartItems = ({ id, name, price, cover, totalPrice, quantity }) => {
  const dispatch = useDispatch();

  const InCartItem = () => {
    dispatch(CartActions.addToCart({ id, name, price, cover }));
  };

  const DesCartItem = () => {
    dispatch(CartActions.removeFromCart(id));
  };

  const DltCartItem = () => {
    dispatch(CartActions.deleteFromCart(id));
    message.success(`${name} Remove Form Cart`);
  };

  return (
    <div>
      {/* ====== Mobile Cart ======  */}
      <div className="flex items-center justify-between w-full pb-1 mb-4 border-b sm:hidden">
        <img
          src={`/images/${cover}`}
          alt={name}
          className="object-contain w-20 h-20 p-1 bg-gray-200 "
        />
        <div className="grid place-items-center gap-y-1">
          <h1>{name}</h1>
          <div className="flex items-center gap-3 p-2 border-2 rounded-lg">
            <button onClick={InCartItem} className="cursor-pointer ">
              <FaPlus />
            </button>
            <button className="font-bold ">{quantity}</button>
            <button onClick={DesCartItem} className="cursor-pointer ">
              <FaMinus />
            </button>
          </div>
          <h4 className="text-sm text-center">Unit Price: GH₵: {price.toLocaleString()}</h4>
        </div>
        <div className="grid place-items-center gap-y-2">
          <IconButton>
            <FaTrashAlt onClick={DltCartItem} className="w-5 h-5" />
          </IconButton>
          <h4 className="text-sm text-center">GH₵: {totalPrice.toLocaleString()}</h4>
        </div>
      </div>

      {/* ====== medium and Large Screen Cart ======  */}
      <div className="items-center justify-between hidden w-full pb-1 mb-4 border-b sm:flex">
        <div className="flex items-center gap-4 ">
          <img
            src={`/images/${cover}`}
            alt={name}
            className="object-contain w-40 h-40 p-1 bg-gray-200"
          />
          <div>
            <h1 className="text-lg">{name}</h1>
            <h4 lassName="text-lg">
              Unit Price: GH₵: {price.toLocaleString()}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2 border-2 rounded-lg">
          <button onClick={InCartItem} className="cursor-pointer ">
            <FaPlus />
          </button>
          <button className="font-bold ">{quantity}</button>
          <button onClick={DesCartItem} className="cursor-pointer ">
            <FaMinus />
          </button>
        </div>
        <div className="grid place-items-center gap-y-2">
          <IconButton>
            <FaTrashAlt onClick={DltCartItem} className="w-5 h-5" />
          </IconButton>
          <h4 lassName="text-lg">
            GH₵: {totalPrice.toLocaleString()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
