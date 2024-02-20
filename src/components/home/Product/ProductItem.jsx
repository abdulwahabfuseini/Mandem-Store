import { Button, Badge, Typography, message } from "antd";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CartActions } from "../../../Store/cartSlice";
import { useDispatch } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ProductItem = ({ id, name, cover, price, discount, desc, quantity }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addToCart = () => {
    dispatch(CartActions.addToCart({ id, name, cover, price }));
    setOpen(false);
    message.success(`${name} added to Cart`);
  };

  return (
    <div
      className="relative pt-2 pb-1 bg-white hover:shadow-lg rounded-2xl"
      data-aos="fade-up"
    >
      <div onClick={handleClickOpen}>
        <img
          src={`/images/${cover}`}
          alt={name}
          className="object-contain h-32 cursor-pointer sm:h-40 md:h-52 w-60 rounded-3xl hover:scale-105"
        />

        <div className="px-2 before:sm:px-4">
          <p className="py-2 truncate">{name}</p>
          <button className="absolute top-0 right-0">
            <Badge.Ribbon
              text={`${discount}% off`}
              color=""
              style={{ fontSize: 16, background: "red", paddingBlock: 4 }}
            ></Badge.Ribbon>
          </button>
          <Typography.Paragraph className="flex flex-col items-center justify-between gap-y-2 sm:flex-row">
            <Typography.Text className="font-bold">
              GH₵: {price.toLocaleString()}
              <Typography.Text
                delete
                type="danger"
                className="pl-4 text-xs sm:pl-2"
              >
                {parseFloat(price + (price * discount) / 100).toFixed(1)}
              </Typography.Text>
            </Typography.Text>
            <Button>Shop</Button>
          </Typography.Paragraph>
        </div>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="flex flex-col items-center sm:flex-row gap-x-8 gap-y-6">
            <img
              src={`/images/${cover}`}
              alt={name}
              className="object-contain w-full h-40 bg-gray-200 sm:w-60 sm:h-60 rounded-3xl"
            />
            <div>
              <h1 className="text-lg font-semibold">{name}</h1>
              <p className="text-sm">{desc}</p>
              <h1 className="pt-4 pb-2 text-xl font-bold border-b-2">
                Price: GH₵ {price.toLocaleString()}
              </h1>
              <Button
                onClick={addToCart}
                type="primary"
                className="flex items-center h-10 gap-2 my-3 bg-blue-500"
              >
                <GiShoppingCart className="w-8 h-8 font-bold" />
                <h5 className="text-lg">Add To Cart</h5>
              </Button>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default ProductItem;
