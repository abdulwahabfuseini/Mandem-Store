import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="grid sm:place-content-center px-2 py-20 gap-y-8 w-full">
      <div className=" text-center">
        <h1 className="text-8xl sm:text-9xl">404</h1>
        <h3 className="text-4xl sm:text-6xl">Page not found</h3>
      </div>
      <strong className="text-lg text-Red text-center">
        The page you are tying to access does not exist on this server
      </strong>
      <div className=" leading-6 border-b-2 pb-6">
        <h4 className=" font-semibold">Possible reasons:</h4>
        <li>The page may have been moved or deleted</li>
        <li>You may have used an outdated or broken link</li>
        <li>You may have typed the address (URL) incorrectly</li>
      </div>
      <div>
        <p>
          We suggest you go to our site's{" "}
          <span className=" text-blue-600 text-lg underline">
            <Link to="/">Home Page</Link>
          </span> or use one of the links below: <br />
          <span className=" text-blue-600 text-lg underline">
            <Link to="/products">Our Products</Link>
          </span> <br />
          <span className=" text-blue-600 text-lg underline">
            <Link to="/about">About Page</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
