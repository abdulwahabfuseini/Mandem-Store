import React from "react";
import ContactForm from "./ContactForm";

const Connect = ({ message }) => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-y-6 sm:gap-x-4 lg:gap-x-16">
        <div className="cols-span-1">
          <h4 className="text-xl text-Red">{message?.title}</h4>
          <h3 className="py-4 text-4xl sm:text-5xl">{message?.header}</h3>
          <p>{message?.desc}</p>
          <ContactForm />
        </div>
        <div className=" sm:col-span-1 lg:col-span-2">
          <iframe
            title="Locate Us"
            height="500"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            className="w-full"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=PREMPEH%20II%20SECOND%20STREET%20+(FAST%20FOOD)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Calculate population in area
            </a>
          </iframe>
        </div>
      </div>

      <div className="grid py-10 my-6 bg-white sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-2 sm:place-items-center gap-y-6">
        {message.connects.map((item, index) => (
          <div key={index} className="flex items-center gap-3 px-3 sm:justify-center" data-aos="fade-up">
            <img
              src={`/images/SVG/${item?.cover}`}
              alt=""
              className="object-contain w-16 h-16"
            />
            <div>
              <a href={`mailto:${item?.text}`}>{item?.text}</a> <br />
              <a
                className="text-sm text-gray-400"
                href={`mailto:${item?.info}`}
              >
                {item?.info}
              </a>
            </div>
            <div>
              <a href={`tel:${item?.tel}`}>{item?.tel}</a> <br />
              <a className="text-sm text-gray-400" href={`tel:${item?.num}`}>
                {item?.num}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
