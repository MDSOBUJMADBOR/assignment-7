import React from "react";



import { ChartLine, Clock2, House, HouseIcon } from 'lucide-react';

import MyNavLink from "./MyNavLink";


const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: " Home",
       icon:  <HouseIcon   />,
    },
    {
      path: "/Timeline",
      text: "Timeline",
      icon: <Clock2  />,
    },
    {
      path: "/Stats",
      text: "Stats",
      icon:  <ChartLine   />
    },
    
  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-6 items-center  py-[15px] max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Keen<span className="font-semibold">Keeper</span></h2>
        <ul className="flex justify-between gap-2 items-center  ">
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
             <span className="flex items-center gap-1">
        {item.icon}
        {item.text}
      </span>
            </MyNavLink>
           
          ))}

         
        </ul>
       
      </div>
    </nav>
  );
};

export default Navbar;
