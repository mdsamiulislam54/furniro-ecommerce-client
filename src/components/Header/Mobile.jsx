import React from "react";
import manIcons from "../../assets/icons/man.png";
import searchIcons from "../../assets/icons/serach.png";
import heartIcons from "../../assets/icons/heart.png";
import cartIcons from "../../assets/icons/cart.png";
import { NavLink } from "react-router";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/logo/logo.png";
const Mobile = ({setShowMobileMenu}) => {
  return (
    <div>
      <div className="p-10  relative">
        <div className="absolute top-5 right-10 flex justify-end">
          <button
            onClick={() => setShowMobileMenu(false)}
            className="text-2xl  bg-primary rounded-full p-1 font-bold cursor-pointer text-white "
          >
         <IoClose size={30 } className=""/>
          </button>
        </div>
        <ul className=" flex flex-col text-gray-700 gap-6 mt-10">
           <div>
                    <img src={logo} alt="logo" className="w-[185px] h-[35px]" />
                  </div>
          <NavLink className="text-lg font-medium tracking-wide ">Home</NavLink>
          <NavLink className="text-lg font-medium tracking-wide ">Shop</NavLink>
          <NavLink className="text-lg font-medium tracking-wide ">
            About
          </NavLink>
          <NavLink className="text-lg font-medium tracking-wide ">
            Contact
          </NavLink>
          <NavLink className="text-lg font-medium tracking-wide ">
            Blogs
          </NavLink>
        </ul>
         <div className="flex flex-wrap gap-8 items-center mt-5 ">
        <img src={searchIcons} alt="Search" className="w-7 h-7" />
        <img src={heartIcons} alt="Wishlist" className="w-7 h-7" />
        <img src={cartIcons} alt="Cart" className="w-7 h-7" />
        <img src={manIcons} alt="User" className="w-7 h-7" />
      </div>
      </div>
     
    </div>
  );
};

export default Mobile;
