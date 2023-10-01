import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

const HeadTitle = () => {
  const location = useLocation();

  return (
    <div className="relative grid place-items-center">
      <span className="font-extrabold text-slate-300 text-[12vw] uppercase mt-[5vw] sm:mt-[2.4vw] lg:-mt-[3.2vw] ">
        MANDEM
      </span>
      <div className="absolute top-0 left-0 grid w-full gap-0 py-6 bg-gray-300 sm:py-12 bg-opacity-80 place-items-center">
        <button className="mb-2 text-xl text-gray-700 capitalize">
          <Link to="/">
            <span> Home </span>
          </Link>
          <ChevronRight className="font-thin text-gray-700" />
          <span>{location.pathname.split("/")[1]}</span>
        </button>
        <span className="text-3xl capitalize sm:text-5xl ">
          {location.pathname.split("/")[1]}
        </span>
      </div>
    </div>
  );
};

export default HeadTitle;
