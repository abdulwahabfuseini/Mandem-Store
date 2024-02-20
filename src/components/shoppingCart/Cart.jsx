import { QuestionCircleOutlined } from "@ant-design/icons";
import React from "react";
import CartItems from "./CartItems";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import { ChevronRightOutlined } from "@mui/icons-material";
import { CartActions } from "../../Store/cartSlice";
import HeadTitle from "../HeadTitle";
import { GiShoppingCart } from "react-icons/gi";
import { useAuth } from "../../contexts/AuthContext";
import SignIn from "../../pages/account/SignIn";

const Cart = () => {
  const cartProducts = useSelector((state) => state.Cart.itemsList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  let DeliveryPrice = 30;

  let totalAmount = 0;
  const itemsLists = useSelector((state) => state.Cart.itemsList);
  itemsLists.forEach((item) => {
    totalAmount += item.totalPrice;
  });

  const GrandTotal = totalAmount + DeliveryPrice;

  const ClearCart = () => {
    dispatch(CartActions.clearCart());
    message.success("Cart successful cleared");
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <>
      {!currentUser ? (
        <Layout>
          <HeadTitle />
          <div className="flex flex-col px-2 py-20 w-fu-ll sm:px-6 lg:px-3 gap-x-10 sm:mx-auto sm:max-w-6xl lg:py-12 gap-y-6 lg:flex-row">
            <div className="w-full">
              {cartProducts.length === 0 && (
                <div className="space-y-8 text-center">
                  <h1 className="text-2xl sm:text-3xl">
                    Your Shopping Cart is empty
                  </h1>
                  <GiShoppingCart className="grid w-full font-bold h-44 place-items-center" />
                  <Button
                    onClick={() => navigate("/products")}
                    type="primary"
                    className="h-12 text-lg bg-blue-600"
                  >
                    Start Shopping
                  </Button>
                </div>
              )}
              <h1
                className={`${
                  cartProducts.length === 0 ? "hidden" : "block"
                } text-2xl pb-2`}
              >
                Your Shopping Cart item(s): {cartProducts.length}
              </h1>
              {cartProducts.map((CartProduct) => {
                return (
                  <CartItems
                    key={CartProduct.id}
                    id={CartProduct.id}
                    name={CartProduct.name}
                    cover={CartProduct.cover}
                    price={CartProduct.price}
                    totalPrice={CartProduct.totalPrice}
                    quantity={CartProduct.quantity}
                  />
                );
              })}
              <div
                className={`${
                  cartProducts.length === 0
                    ? "hidden"
                    : "flex items-center justify-between my-4 font-bold gap-x-2"
                }`}
              >
                <Popconfirm
                  title="Clear Cart"
                  description="Are you sure want to clear cart?"
                  icon={
                    <QuestionCircleOutlined
                      style={{
                        color: "red",
                      }}
                    />
                  }
                  onConfirm={ClearCart}
                  onCancel={cancel}
                  color="#F1E6E6"
                  okText="Confirm"
                  cancelText="Cancel"
                >
                  <Button
                    danger
                    className="h-12 mb-2 text-lg border-2 rounded-lg bg-slate-900"
                  >
                    Clear Cart
                  </Button>
                </Popconfirm>
                <span className=" text-Red">
                  SubTotal: GH₵: {totalAmount.toLocaleString()}.00
                </span>
              </div>
            </div>
            <div className={`${cartProducts.length === 0 ? "hidden" : "grid"}`}>
              <div className="w-full p-4 bg-white rounded shadow-sm sm:w-96 h-96">
                <h6 className="py-2 font-semibold border-b-2">Order Summary</h6>
                <div className="flex items-center justify-between py-2 gap-x-6">
                  <h4>Selected {cartProducts.length} item(s) Price </h4>
                  <p className="text-center ">
                    GH₵: {totalAmount.toLocaleString()}.00
                  </p>
                </div>
                <div className="flex items-center justify-between py-2 gap-x-6">
                  <h4>Discount</h4>
                  <p>GH₵: 0.00</p>
                </div>
                <div className="flex items-center justify-between py-2 gap-x-6">
                  <h4>Delivery Cost</h4>
                  <p>GH₵: {DeliveryPrice.toLocaleString()}.00</p>
                </div>
                <div className="mt-16 border-t-2">
                  <div className="flex items-center justify-between py-2 gap-x-6">
                    <h4>Grand Total</h4>
                    <p>GH₵: {GrandTotal.toLocaleString()}.00</p>
                  </div>
                  <Button
                    onClick={() => navigate("/checkout")}
                    type="primary"
                    className="w-full h-10 text-lg text-white bg-blue-600"
                  >
                    Proceed to Checkout
                  </Button>
                  <button
                    onClick={() => navigate("/products")}
                    className="flex items-center justify-center w-full gap-1 py-2 text-base text-yellow-500 cursor-pointer"
                  >
                    or <h3>Continue Shopping</h3>{" "}
                    <ChevronRightOutlined
                      sx={{ width: 30, height: 30, marginTop: 0.5 }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Cart;
