import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-full px-2 sm:py-16 sm:px-6 lg:px-8 py-16">
       <h1 className="text-xl text-Red">Welcome to Mandem</h1>
      <div className="flex items-center justify-center flex-col sm:flex-row gap-y-8 gap-x-10">
        <div className="sm:w-1/2 w-full">
        <h3 className="text-3xl sm:text-4xl lg:text-6xl py-6">Who We Are</h3>
          <div className=" space-y-5 w-full text-justify tracking-tighter">
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            veritatis perferendis culpa tempore rem praesentium necessitatibus
            beatae ut eum commodi!
          </h2>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            veritatis perferendis culpa tempore rem praesentium necessitatibus
            beatae ut eum commodi!
          </h2>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            veritatis perferendis culpa tempore rem praesentium necessitatibus
            beatae ut eum commodi!
          </h2>
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <img src="/images/about.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
