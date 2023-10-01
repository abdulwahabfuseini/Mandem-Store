import React, { useEffect, useState } from "react";
import { NavLinks } from "../assets/Navigation";
import { Link, NavLink } from "react-router-dom";
import User from "../components/header/User";
import { IconButton } from "@mui/material";
import { Badge, Tooltip } from "antd";
import { GiShoppingCart } from "react-icons/gi";
import MobileNav from "../components/header/MobileNav";
import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { currentUser } = useAuth();
  const cartProducts = useSelector((state) => state.Cart.itemsList);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <div
      className={`${
        sticky
          ? "top-0 left-0 fixed bg-white  py-4 border-b border-gray-300"
          : "bg-slate-100 py-6"
      } Nav`}
    >
      <nav className="flexBox">
        <ul className="gap-12 FlexRow">
          <Link to="/">
            <header className="text-2xl sm:text-4xl text-Red">MANDEM</header>
          </Link>
          <li className="nav-items">
            {NavLinks.map((item, index) => (
              <h4>
                <NavLink key={index} to={item.path}>
                  {item.display}
                </NavLink>
              </h4>
            ))}
          </li>
        </ul>
        <div className="gap-1 FlexRow">
          {currentUser && <User />}
          <NavLink to="/cart">
            <IconButton>
              <Tooltip title="Cart">
                <Badge count={cartProducts.length}>
                  <GiShoppingCart className="w-10 font-bold h-10 " />
                </Badge>
              </Tooltip>
            </IconButton>
          </NavLink>
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
