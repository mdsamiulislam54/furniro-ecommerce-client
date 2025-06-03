import React from "react";
import images from "../../assets/shop.png";
import { Link } from "react-router";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
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
            <Link to="/" className="hover:text-primary transition font-medium hover:underline ">
              Home
            </Link>
            <MdKeyboardArrowRight className="text-xl" />
            <span className="text-gray-500">Shop</span>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto"></div>
    </div>
  );
};

export default Shop;
