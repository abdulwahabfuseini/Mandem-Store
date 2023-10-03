import React, { useEffect, useState } from "react";
import { CgChevronDoubleUp } from "react-icons/cg";
import { animateScroll as scroll } from "react-scroll";


const BackToTop = () => {
  const [backTo, setBackTo] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 450 ? setBackTo(true) : setBackTo(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {backTo && (
        <button
          onClick={() => scrollToTop()}
          className="fixed p-2 font-bold transition-all duration-200 bg-white border-2 rounded-full shadow-lg bottom-20 sm:bottom-5 right-24 border-Header hover:ring-4 hover:ring-green-100"
        >
          <CgChevronDoubleUp className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
