import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chats from "./Chats";
import BackToTop from "./BackToTop";

const Layout = ({ children }) => {
  return (
    <div className=" bg-slate-100">
      <Navbar />
      {children}
      <Chats />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Layout;
