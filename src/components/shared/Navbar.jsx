import React, { useState } from "react";



import { ChartLine, Clock2, House, HouseIcon, Menu, X } from 'lucide-react';

import MyNavLink from "./MyNavLink";
import { Link } from "react-router";


const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: " Home",
       icon:  <HouseIcon size={18}  />,
    },
    {
      path: "/Timeline",
      text: "Timeline",
      icon: <Clock2 size={18} />,
    },
    {
      path: "/Stats",
      text: "Stats",
      icon:  <ChartLine size={18} />
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

   <Link to="/" className="text-3xl font-bold">
  Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
</Link>
</div>


<div>

   <ul className="sm:flex hidden  justify-between gap-3  font-semibold items-center  ">
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
             <span className=" sm:flex hidden items-center gap-2 justify-between p-1 px-2 ">
        <li>{item.icon}</li>
        <li> {item.text}</li>
      </span>
            </MyNavLink>
           
          ))}


         
        </ul>






    {/* small devise start */}

          <div onClick={() => setOpen(!open)} className="dropdown dropdown-center sm:hidden ">
  <div tabIndex={0} role="button" className=" m-1">{open ? <X className='sm:hidden'></X> : <Menu className='sm:hidden'></Menu>}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm gap-2">
    {/* <li><a>Item 1</a></li>
    <li><a>Item 2</a></li> */}
{navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
             <span className="flex items-center gap-1 justify-start ">
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
