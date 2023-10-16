import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Socialconnect } from "../assets/Navigation";
import { Tooltip } from "antd";

const Footer = () => {
  return (
    <div className="pt-6 mt-24 overflow-hidden text-white border-t-2 shadow-lg bg-Text sm:bg-white sm:text-Text">
      <div className="grid w-full h-full px-5 mb-12 gap-x-8 sm:px-8 grid-auto-fit-xs gap-y-5 sm:place-items-center">
        <div className="space-y-2" data-aos="fade-right">
          <Typography variant="h5" color="red" data-aos="fade-up">
            <Link to="/">
              <header className="text-2xl text-Red">MANDEM STORE</header>
            </Link>
          </Typography>
          <Typography className="break-all text-lg">
            Lorem ipsum dolor sit amet consect, adipisicing elit. Dolores
            perferendis tenetur vitae labore odio unde quo aliquam exceptur
          </Typography>
        </div>
        <div className="space-y-2" data-aos="fade-up">
          <Typography variant="h5">Company</Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/about">About Us</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/products">Our Products</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/blog">Latest News</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/">Home</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/*">Terms & Conditions</Link>
          </Typography>
        </div>
        <div className="space-y-2" data-aos="fade-up">
          <Typography variant="h5">Useful Links</Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/products">Shop</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/cart">Cart</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/about">About Us</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/contact">Contact Us</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <Link to="/*">Privacy Policy</Link>
          </Typography>
        </div>
        <div className="space-y-2" data-aos="fade-up">
          <Typography variant="h5">Contact Us</Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            www.mandemStore.com
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <a href="mailto:Info@mandem.com">Info@mandem.com</a>
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            Prempeh II Street - Adum
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            Kumasi - Ghana
          </Typography>
          <Typography
            variant="h6"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            fontSize="17px"
          >
            <a href="tel:0334786495">+233 33 478 6495</a>
          </Typography>
        </div>
        <div className="w-full space-y-4" data-aos="fade-left">
          <Typography variant="h5">Connect With Us</Typography>
          <div className="flex flex-wrap gap-3 py-4">
            {Socialconnect.map((media) => (
              <Typography key={media.id}>
                <Tooltip color={media?.color} title={media?.title}  key={media.id}>
                  <a href={media?.link} target="blank">
                    <img
                      className="w-12 h-12 p-1 rounded-full sm:h-11 sm:w-11 bg-slate-100 lg:hover:scale-110"
                      src={`/images/social/${media.imgUrl}`}
                      alt="social"
                    />
                  </a>
                </Tooltip>
              </Typography>
            ))}
          </div>
        </div>
      </div>
      <div className="px-2 py-6 leading-8 text-center text-white border-t-4 sm:px-6 bg-Text" >
        <h4 className="text-lg" >
          {" "}
          &copy; 2023 Mandem Store, All rights reserved
        </h4>
        <p>Created By: Fuseini Abdul Wahab</p>
      </div>
    </div>
  );
};

export default Footer;
