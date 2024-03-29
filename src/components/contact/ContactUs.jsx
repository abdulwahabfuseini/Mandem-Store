import React from "react";
import { ContactData } from "./Data";
import Connect from "./Connect";

const ContactUs = () => {
  return (
    <div className="w-full h-full px-2 sm:px-5 lg:px-7 py-24 lg:py-10">
      <div>
        {ContactData.map((message, index) => {
          return <Connect key={index} message={message} />;
        })}
      </div>
    </div>
  );
};

export default ContactUs;
