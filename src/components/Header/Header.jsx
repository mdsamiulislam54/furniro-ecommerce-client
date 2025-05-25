import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import manIcons from "../../assets/icons/man.png";
import searchIcons from "../../assets/icons/serach.png";
import heartIcons from "../../assets/icons/heart.png";
import cartIcons from "../../assets/icons/cart.png";
import { NavLink } from "react-router";
import { HiMenuAlt2 } from "react-icons/hi";
import Mobile from "./Mobile";

const Header = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="py-6 bg-white shadow-md relative">
      <div className="flex justify-between items-center  w-11/12 mx-auto ">
        <div>
          <img src={logo} alt="logo" className="w-[185px] h-[35px]" />
        </div>
        <div className="lg:block hidden">
          <ul className=" flex items-center text-gray-700 gap-6">
            <NavLink className="text-lg font-medium tracking-wide ">
              Home
            </NavLink>
            <NavLink className="text-lg font-medium tracking-wide ">
              Shop
            </NavLink>
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
        </div>
        <div>
          <div className="flex gap-4 items-center max-lg:hidden">
            <img src={searchIcons} alt="Search" className="w-7 h-7" />
            <img src={heartIcons} alt="Wishlist" className="w-7 h-7" />
            <img src={cartIcons} alt="Cart" className="w-7 h-7" />
            <img src={manIcons} alt="User" className="w-7 h-7" />
          </div>
          <div>
            <button
              onClick={() => setShowMobileMenu(!isShowMobileMenu)}
              className="lg:hidden block text-2xl text-gray-700 cursor-pointer"
            >
              <HiMenuAlt2 size={30}/>
            </button>
          </div>
        </div>

        
          <div className={`absolute top-[0px] right-[-999px]    shadow-md w-8/12  bg-secondary md:hidden min-h-screen ${isShowMobileMenu ? "right-[0px]" : ""} transform transition-all duration-500 ease-in-out z-100`}>
            <Mobile  setShowMobileMenu={setShowMobileMenu} />
          </div>
       
      </div>
    </nav>
  );
};

export default Header;
