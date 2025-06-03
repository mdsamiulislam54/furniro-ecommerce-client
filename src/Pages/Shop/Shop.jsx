import React, { useState } from "react";
import images from "../../assets/shop.png";
import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import filterIcon from "../../assets/icons/filter.png";
import gridicon from "../../assets/icons/grid.png";
import lineicon from "../../assets/icons/viewlist.png";
import FilterPage from "./FilterPage";

const Shop = () => {
  const [isFilterPageOpen, setIsFilterPageOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div
        className="h-[360px] w-full bg-cover flex justify-center"
        style={{ backgroundImage: `url(${images})` }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop</h1>
          <div className="flex items-center text-gray-600 text-sm gap-2">
            <Link
              to="/"
              className="hover:text-primary transition font-medium hover:underline"
            >
              Home
            </Link>
            <MdKeyboardArrowRight className="text-xl" />
            <span className="text-gray-500">Shop</span>
          </div>
        </div>
      </div>

      {/* Filter and Sort Options */}
      <div className="bg-secondary py-4">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          {/* Filter Section */}
          <div className="flex  gap-6 items-center">

            {/* Filter Button */}
            <div className="relative flex items-center gap-2">
              <img
                src={filterIcon}
                alt="filter-icon"
                className="cursor-pointer w-8 h-8"
                onClick={() => setIsFilterPageOpen(!isFilterPageOpen)}
              />
              <p className="text-xl font-medium">Filter</p>

              {isFilterPageOpen && (
                <div className="absolute top-12 left-0 z-50">
                  <FilterPage onClose={() => setIsFilterPageOpen(false)} />
                </div>
              )}
            </div>

            {/* Grid & List Icon */}
            <div className="flex items-center gap-4">
              <img src={gridicon} alt="grid-icon" className="w-8 h-8" />
              <img
                src={lineicon}
                alt="list-icon"
                className="lg:w-8 h-8 border-l-2 pl-4 border-primary"
              />
            </div>

            {/* Showing Result */}
            <div>
              <p className="text-md font-medium">
                Showing 1-16 of <span className="font-bold">30</span> results
              </p>
            </div>
          </div>

        <div className="flex justify-between gap-4">
              {/* Show Count */}
          <div className="flex items-center gap-4">
            <p className="text-lg font-medium">Show</p>
            <p className="bg-white py-2 px-5 font-bold rounded-md">16</p>
          </div>

          {/* Short By */}
          <div className="flex items-center gap-4">
            <p className="lg:text-lg font-medium">Sort by</p>
            <p className="bg-white py-2 px-5 font-bold rounded-md">Default</p>
          </div>
        </div>

        </div>
      </div>

      {/* Product Container */}
      <div className="w-11/12 mx-auto py-10">
        {/* product grid ekhane asbe */}
      </div>
    </div>
  );
};

export default Shop;
