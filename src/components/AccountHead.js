import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

const AccountHead = () => {
  const location = useLocation();

  return (
    <div className="relative grid place-items-center">
     <img src="/images/account.jpg" alt="account" className="object-cover w-full h-32 sm:h-48"/>
      <div className="absolute top-0 left-0 grid w-full h-32 gap-0 py-6 text-white sm:h-48 bg-slate-900 sm:py-12 bg-opacity-20 place-items-center">
        <button className="mb-2 text-xl capitalize">
          <Link to="/">
            <span> Home </span>
          </Link>
          <ChevronRight className="font-thin " />
          <span>{location.pathname.split("/")[1]}</span>
        </button>
        <span className="text-3xl capitalize sm:text-5xl ">
          {location.pathname.split("/")[1]}
        </span>
      </div>
    </div>
  );
};

export default AccountHead;
