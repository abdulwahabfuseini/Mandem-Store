import React from "react";
import { serviceData } from "./Data";

const Service = () => {
  return (
    <div className="w-full h-full px-2 py-8 my-6 bg-white sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-16 lg:gap-x-20 gap-y-6" data-aos="fade-up">
        {serviceData.map((service) => (
          <div className="flex flex-col items-center gap-3 lg:flex-row" key={service?.id}>
            <img src={`/images/SVG/${service?.cover}`} alt={service?.title} className="w-16 h-14 fill-none" />
            <div>
              <h4 className="font-bold">{service?.title}</h4>
              <p className="text-sm text-gray-400">{service?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
