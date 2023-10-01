import React from "react";
import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <div className="w-full h-full px-2 mb-20 overflow-hidden pt-44 sm:mb-0 sm:py-12 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-center justify-center pb-16 text-white pt-28 sm:py-16 lg:py-24 bg-Red rounded-3xl sm:flex-row gap-y-6">
        <div className="grid w-full space-y-6 sm:w-1/2 sm:place-items-start sm:place-content-center place-items-center sm:space-y-0" data-aos="fade-down">
          <h6 className="text-xl font-light">50 % off</h6>
          <p className="hidden font-extrabold sm:text-5xl md:text-6xl lg:text-9xl sm:block">
            FINE <br /> <span>SMILE</span>
          </p>
          <p className="text-5xl font-extrabold sm:hidden">FINE SMILE</p>
          <h4 className="text-lg font-light">From 1ST SEPT To 30TH SEPT</h4>
        </div>
        <div className="grid w-full space-y-3 sm:space-y-5 place-items-center sm:w-1/2 sm:place-items-start sm:place-content-center" data-aos="fade-left">
          <h5 className="text-xl sm:text-2xl">ManDem </h5>
          <p className="text-3xl font-bold lg:text-6xl">Summer Sale</p>
          <p className="w-full px-2 text-center sm:text-left sm:w-80 lg:w-96 sm:px-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            minima adipisci rerum digniss
          </p>
          <button className="w-32 px-6 py-2 text-xl text-Red cursor-pointer bg-white  rounded-3xl  before:contents() before:bottom-0 before:right-0 before:absolute before:bg-black hover:text-white before:w-32 before:h-0 relative h-12 overflow-hidden z-30 hover:before:transition2 hover:before:-z-10 hover:before:h-12">
              <Link to="/products">Shop</Link>
            </button>
        </div>
        <div className="absolute z-20 h-40 left-4 sm:-left-[2vw] lg:-left-[2.5vw] -top-28 sm:-top-20 lg:-top-48" data-aos="fade-right">
          <img
            src="/images/sale.png"
            alt="headphone"
            className="object-contain  sm:w-[75vw] lg:w-full"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
