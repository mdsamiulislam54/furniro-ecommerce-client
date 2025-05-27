import { useQuery } from "@tanstack/react-query";

import Button from "../components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { motion } from "motion/react"

const TopProducts = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["topProducts"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      <div className="w-11/12 mx-auto my-10">
        <h1 className="text-3xl font-bold  mb-10">Top Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((product) => (
            <motion.div  
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{duration: 0.5, ease: "easeInOut"}}
              viewport={{ amount: 0.3}}
              key={product.id}
              className=" p-4 rounded-lg shadow-lg relative"
            >
              <img
                src={product.defaultColorImage}
                alt={product.name}
                className="w-48 mx-auto object-contain h-48  mb-4 rounded"
              />
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-light text-gray-600 ">
                  {product.category}
                </p>
                <span className="text-md font-bold text-gray-600">
                  ⭐ {product.rating}
                </span>
                <span className="absolute top-2 right-2 bg-primary font-medium text-white px-2 py-1 rounded">
                  -
                  {Math.round(
                    ((product.price - product.discountPrice) / product.price) *
                      100
                  )}
                  %
                </span>
              </div>
              <h2 className="text-md font-semibold">{product.name}</h2>

              <span className="flex  items-center mt-2 gap-10">
                <p className=" font-bold">
                  {" "}
                  <span>${product.discountPrice}</span>
                </p>
                <p className="text-gray-600  font-bold ">
                  {" "}
                  <span className="line-through">${product.price}</span>
                </p>
              </span>
              <div className="absolute top-[140px] left-2 flex flex-col gap-2 items-center ">
                <button
                  className="cursor-pointer " 
                  data-tooltip-id="add-to-cart-tooltip"
                  data-tooltip-content="Add to cart"
                
                >
                  <AiOutlineShoppingCart size={25} />
                    <Tooltip id="add-to-cart-tooltip" />
                </button>
                <button className="cursor-pointer" 
                  data-tooltip-id="add-to-wishlist-tooltip"
                  data-tooltip-content="Add to wishlist">
                  <FaRegHeart size={23} />
                    <Tooltip id="add-to-wishlist-tooltip" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button text="See all products" />
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
