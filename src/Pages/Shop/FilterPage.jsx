import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import useFilteredProducts from "../../Api/useFilteredProducts";

const FilterPage = ({ onClose,  }) => {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
  });
const handleFilterProducts = useFilteredProducts(filters)
console.log(handleFilterProducts)

  const handleFilter = () => {
    onClose(false);
    handleFilterProducts
  };

  console.log(filters)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-2xl relative animate-fadeInUp"
      >
        {/* Close Button */}
        <button
          onClick={() => onClose(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
        >
          <IoClose />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Filter Products
        </h2>

        {/* Filter Form */}
        <div className="flex flex-col gap-5">
          {/* Category */}
          <div>
            <label className="text-gray-700 font-medium">Category</label>
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-primary focus:border-primary"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="text-gray-700 font-medium">Price Range</label>
            <div className="flex gap-3 mt-1">
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) =>
                  setFilters({ ...filters, minPrice: e.target.value })
                }
                className="w-1/2 border border-gray-300 rounded-lg p-2 focus:ring-primary focus:border-primary"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters({ ...filters, maxPrice: e.target.value })
                }
                className="w-1/2 border border-gray-300 rounded-lg p-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="text-gray-700 font-medium">Rating</label>
            <select
              value={filters.rating}
              onChange={(e) =>
                setFilters({ ...filters, rating: e.target.value })
              }
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Any Rating</option>
              <option value="4">4+</option>
              <option value="3">3+</option>
              <option value="2">2+</option>
            </select>
          </div>

          {/* Apply Button */}
          <button
            onClick={handleFilter}
            className="bg-primary hover:bg-primary/90 transition text-white font-medium py-2 rounded-lg"
          >
            Apply Filters
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FilterPage;
