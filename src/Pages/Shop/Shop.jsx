import React from "react";
import images from "../../assets/shop.png";
import { Link } from "react-router";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import filterIcon from "../../assets/icons/filter.png";
import gridicon from "../../assets/icons/grid.png";
import lineicon from "../../assets/icons/viewlist.png";
const Shop = () => {
  return (
    <div className="min-h-screen ">
      <div
        className="h-[360px] w-full bg-cover flex justify-center"
        style={{ backgroundImage: `url(${images}) ` }}
      >
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop</h1>
          <div className="flex items-center text-gray-600 text-sm gap-2">
            <Link
              to="/"
              className="hover:text-primary transition font-medium hover:underline "
            >
              Home
            </Link>
            <MdKeyboardArrowRight className="text-xl" />
            <span className="text-gray-500">Shop</span>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-4">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <div className="flex gap-10 items-center ">
            <div>
              <img src={filterIcon} alt="filter-icons" />
            </div>
            <div>
                 <img src={gridicon} alt="filter-icons" />
            </div>
            <div className="pr-4 border-r-2 border-primary ">
                 <img src={lineicon} alt="filter-icons" />
            </div>
              <div>
            <p className="text-md font-medium">
                Showing 1-16 of <span>30</span> result
            </p>
          </div>
          </div>
        
          <div>
            <span className="flex items-center gap-4">
                <p className="text-lg font-medium ">Show</p>
                <p className="bg-white py-3 px-8 font-bold rounded-md">16</p>
            </span>
          </div>
          <div>
             <span className="flex items-center gap-4">
                <p className="text-lg font-medium ">Short by</p>
                <p className="bg-white py-3 px-8 font-bold rounded-md">Default</p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto"></div>
    </div>
  );
};

export default Shop;
