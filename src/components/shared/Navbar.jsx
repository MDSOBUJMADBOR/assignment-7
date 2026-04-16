import React, { useState } from "react";



import { ChartLine, Clock2, House, HouseIcon, Menu, X } from 'lucide-react';

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
  const [open,setOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-xl/3 px-4">

      <div className="flex justify-between gap-6 items-center  py-[15px] max-w-7xl mx-auto">

<div>
  {/* //-------------------------------- */}
   {/* <span className='flex' onClick={() => setOpen(!open)}>
          {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
           <ul className={`md:hidden absolute text-black duration-1000 ${open ? "left-3 top-15" : "-left-40 top-15"} bg-amber-200 `}>
                
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
             <span className="flex items-center gap-1">
        {item.icon}
        {item.text}
      </span>
            </MyNavLink>
           
          ))}
                    
           </ul>
          
         </span> */}
         

{/* //---------------------------------------------- */}

    <h2 className="text-3xl font-bold">Keen<span className="font-semibold">Keeper</span></h2>
</div>


<div>

   <ul className="md:flex hidden flex justify-between gap-2 items-center  ">
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
             <span className="flex items-center gap-1">
        {item.icon}
        {item.text}
      </span>
            </MyNavLink>
           
          ))}


         
        </ul>

    {/* small devise start */}

          <div onClick={() => setOpen(!open)} className="dropdown dropdown-center md:hidden ">
  <div tabIndex={0} role="button" className=" m-1">{open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    {/* <li><a>Item 1</a></li>
    <li><a>Item 2</a></li> */}
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

          {/* small devise end */}
</div>
      
       



       
      </div>
    </nav>
  );
};

export default Navbar;
