import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-full px-2 py-16 sm:py-16 sm:px-6 lg:px-8">
       <h1 className="text-2xl text-Red">Welcome to Mandem</h1>
      <div className="flex flex-col items-center justify-center sm:flex-row gap-y-8 gap-x-10">
        <div className="w-full sm:w-1/2">
        <h3 className="py-6 text-3xl sm:text-4xl lg:text-6xl">Who We Are</h3>
          <div className="w-full space-y-5 text-xl break-word">
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
        <div className="w-full sm:w-1/2">
          <img src="/images/about.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
