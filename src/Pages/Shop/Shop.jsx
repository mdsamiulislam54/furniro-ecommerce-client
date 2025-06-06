import React, { useState } from "react";
import images from "../../assets/shop.png";
import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductsCard from "./ProductsCard";
import useFilteredProducts from "../../Api/useFilteredProducts";

const Shop = () => {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 0,
    rating: "",
  });

  const { data, loading, error } = useFilteredProducts(filters);

  const handleCategoryClick = (categoryName, isChecked) => {
    setFilters((prev) => {
      if (isChecked) {
        return { ...prev, category: categoryName };
      } else {
        return prev.category === categoryName ? { ...prev, category: "" } : prev;
      }
    });
  };

  const categories = [
    { name: "Chair" },
    { name: "Armchair" },
    { name: "Sofa" },
    { name: "Bed" },
    { name: "Table" },
    { name: "Cabinet" },
    { name: "Lighting" },
    { name: "Bookshelf" },
    { name: "TV Stand" },
    { name: "Wardrobe" },
  ];

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

      <div className="flex justify-between py-4 w-11/12 mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 pb-2">
            Filter Option
          </h2>
        </div>
        <div>
          <p>Showing 1-16 of 0 result</p>
        </div>

        <div>
          <p>Sort by :</p>
          <select name="Default" id="">
            <option value="Default">Default</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-5 w-11/12 mx-auto py-10 gap-4">
        {/* Filter Section */}
        <div className="col-span-1">
          <div>
            {/* Category Filter */}
            <label className="text-gray-700 font-medium mb-3 block">
              Category
            </label>
            <div className="flex flex-col gap-3 pl-6 h-[300px] overflow-y-scroll">
              {categories.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={item.name}
                    onChange={(e) =>
                      handleCategoryClick(item.name, e.target.checked)
                    }
                    checked={filters.category === item.name}
                    className="w-4 h-4"
                  />
                  <span>{item.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4">
          {/* Loading UI */}
          {loading && (
            <div className="text-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading products...</p>
            </div>
          )}

          {/* Error UI */}
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded shadow-md text-center mb-4">
              {error.response && error.response.status === 403
                ? "⚠️ Unauthorized Access: Please login first."
                : `❌ ${error.message || "Something went wrong. Please try again later."}`}
            </div>
          )}

          {/* Product List */}
          {!loading && !error && (
            <>
              {data?.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {data.map((product) => (
                    <ProductsCard key={product._id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 text-lg">No products found</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
