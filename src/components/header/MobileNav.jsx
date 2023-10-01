import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia"; 
import { HiMiniBars3BottomRight } from "react-icons/hi2"; 
import { NavLinks } from "../../assets/Navigation";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import { IconButton } from "@mui/material";

const MobileNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="lg:hidden">
      <button>
        <HiMiniBars3BottomRight
          onClick={() => setMobileMenu(true)}
          className="w-9 h-10 cursor-pointer font-light"
        />
        <Drawer  open={mobileMenu} onClose={() => setMobileMenu(false)} closable={false} contentWrapperStyle={{ width: "100%", height: 400}}>
          <nav className="text-Red">
           <header className="flex items-center justify-between border-b">
             <h1 className="text-2xl sm:text-3xl">MANDEM</h1>
             <IconButton>
               <LiaTimesSolid onClick={() => setMobileMenu(false)} className="w-8 h-8 font-bold"/>
             </IconButton>
           </header>
            <ul className="pt-8">
              <li className="space-y-4 text-2xl sm:text-3xl">
                {NavLinks.map((item) => (
                  <h1>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </h1>
                ))}
              </li>
            </ul>
          </nav>
        </Drawer>
      </button>
    </div>
  );
};

export default MobileNav;
