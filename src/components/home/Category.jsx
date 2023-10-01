import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="w-full h-full px-2 overflow-hidden sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-x-8 gap-y-4 lg:grid lg:grid-cols-2" >
        <div className="flex flex-col items-center w-full gap-x-6 gap-y-4 sm:flex-row lg:cols-span-1" >
          <div className="relative  text-white bg-black rounded-2xl sm:h-[370px]  sm:pt-24 lg:pt-36 pt-8  pb-16 space-y-2 w-full lg:cols-span-1 overflow-hidden grid place-content-center" data-aos="fade-right">
            <h1 className="text-lg">
              Enjoy <br />{" "}
              <span className="text-3xl font-bold">
                <h4>With</h4>
              </span>
            </h1>
            <h1 className="py-2 text-6xl lg:text-[3.8vw] font-extrabold text-Glass">
              EARBUDS
            </h1>
            <button className="w-32 px-6 py-2 text-xl text-white cursor-pointer bg-Red rounded-3xl  before:contents() before:bottom-0 before:right-0 before:absolute before:bg-yellow-400 before:text-white before:w-32 before:h-0 relative h-12 overflow-hidden z-30 hover:before:transition2 hover:before:-z-10 hover:before:h-12">
              <Link to="/products">Browse</Link>
            </button>
            <div className="absolute top-4 -right-14">
              <img
                draggable={false}
                src="/images/ear4.png"
                alt="earphone"
                className="w-72 "
              />
            </div>
          </div>
          <div className="relative  text-white bg-yellow-300 rounded-2xl sm:h-[370px] sm:pt-24 lg:pt-36 pt-8 grid place-content-center pb-16 space-y-2 w-full lg:cols-span-1 overflow-hidden" data-aos="fade-right">
            <h1 className="text-lg">
              New <br />{" "}
              <span className="text-3xl font-bold">
                <h4>Wear</h4>
              </span>
            </h1>
            <h1 className="py-2 text-6xl lg:text-[3.9vw] font-extrabold text-Glass">
              GADGETS
            </h1>
            <button className="w-32 px-6 py-2 text-xl text-yellow-400 cursor-pointer bg-white  rounded-3xl  before:contents() before:bottom-0 before:right-0 before:absolute before:bg-black hover:text-white before:w-32 before:h-0 relative h-12 overflow-hidden z-30 hover:before:transition2 hover:before:-z-10 hover:before:h-12">
              <Link to="/products">Browse</Link>
            </button>
            <img
              draggable={false}
              src="/images/W3.png"
              alt="watch"
              className="absolute object-contain w-full -right-20 h-60 sm:h-64 lg:top-0"
            />
          </div>
        </div>
        <div className="relative w-full lg:cols-span-1 px-10 sm:h1-20 pb-10 text-white bg-Red rounded-2xl sm:h-[370px] pt-16 space-y-2" data-aos="fade-left">
          <h1 className="text-lg">
            Trend <br />{" "}
            <span className="text-3xl font-bold">
              <h4>Devices</h4>
            </span>
          </h1>
          <h1 className="font-extrabold text-Glass text-7xl sm:text-8xl">
            LAPTOP
          </h1>
          <button className="w-32 px-6 py-2 text-xl text-Red cursor-pointer bg-white  rounded-3xl  before:contents() before:bottom-0 before:right-0 before:absolute before:bg-black hover:text-white before:w-32 before:h-0 relative h-12 overflow-hidden z-30 hover:before:transition2 hover:before:-z-10 hover:before:h-12">
            <Link to="/products">Browse</Link>
          </button>
          <div className="absolute sm:right-32 top-6 -right-6">
            <img
              draggable={false}
              src="/images/laptop1.png"
              alt="laptop"
              className="object-contain w-full lg:h-80 h-60 sm:h-72"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center py-4 sm:py-8 gap-x-8 gap-y-4 lg:grid lg:grid-cols-2" >
        <div className="relative w-full lg:cols-span-1 px-10 sm:h1-20 pb-10 text-white bg-gray-200 rounded-2xl sm:h-[370px] pt-16 space-y-2" data-aos="fade-right">
          <h1 className="text-lg text-black">
            Best <br />
            <span className="text-3xl font-bold">
              <h4>Gaming</h4>
            </span>
          </h1>
          <h1 className="text-[9vw] font-extrabold text-Glass sm:text-7xl lg:text-8xl">
            CONSOLE
          </h1>
          <button className="w-32 px-6 py-2 text-xl text-white cursor-pointer bg-Red  rounded-3xl  before:contents() before:bottom-0 before:right-0 before:absolute before:bg-black hover:text-white before:w-32 before:h-0 relative h-12 overflow-hidden z-30 hover:before:transition2 hover:before:-z-10 hover:before:h-12">
            <Link to="/products">Browse</Link>
          </button>
          <div className="absolute -bottom-10 right-1">
            <img
              draggable={false}
              src="/images/game.png"
              alt="game"
              className="h-48 w-44 sm:w-full sm:h-full"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center w-full gap-x-6 gap-y-4 sm:flex-row-reverse lg:cols-span-1 lg:flex-row">
          <div className="relative  text-white bg-green-400 rounded-2xl sm:h-[370px] pt-8 grid place-content-center pb-20 space-y-2 w-full lg:cols-span-1 overflow-hidden"  data-aos="fade-left">
            <h1 className="text-lg">
              Play <br /> <span className="text-3xl font-bold">Game</span>
            </h1>
            <h1 className="text-7xl lg:text-[5vw] font-extrabold text-Glass">
              OCULUS
            </h1>
            <button className="w-32 px-6 py-2 text-xl text-green-400 cursor-pointer bg-white  rounded-3xl  before:contents() before:bottom-0 before:right-0 before:absolute before:bg-black hover:text-white before:w-32 before:h-0 relative h-12 overflow-hidden z-30 hover:before:transition2 hover:before:-z-10 hover:before:h-12">
              <Link to="/products">Browse</Link>
            </button>
            <div className="absolute bottom-0 sm:bottom-0 -right-10 sm:-right-14">
              <img
                draggable={false}
                src="/images/play.png"
                alt="play"
                className="object-contain sm:w-96 sm:h-56"
              />
            </div>
          </div>
          <div className="relative  text-white bg-blue-500 rounded-2xl sm:h-[370px] pt-8 grid place-content-center pb-20 sm:pt-8 space-y-2 w-full lg:cols-span-1 overflow-hidden"  data-aos="fade-left">
            <h1 className="text-lg">
              New <br />{" "}
              <span className="text-3xl font-bold">
                <h4>Amazon</h4>
              </span>
            </h1>
            <h1 className="py-2 text-5xl lg:text-[4vw] font-extrabold text-Glass">
              SPEAKER
            </h1>
            <button className="w-32 px-6 py-2 text-xl text-blue-400 cursor-pointer bg-white  rounded-3xl  before:contents() before:bottom-0 before:right-0 before:absolute before:bg-black hover:text-white before:w-32 before:h-0 relative h-12 overflow-hidden z-30 hover:before:transition2 hover:before:-z-10 hover:before:h-12">
              <Link to="/products">Browse</Link>
            </button>
            <div className="absolute right-0 -bottom-24">
              <img
                draggable={false}
                src="/images/b5.png"
                alt="speaker"
                className="w-full h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
